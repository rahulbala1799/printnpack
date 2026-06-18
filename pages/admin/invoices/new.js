import React, { useEffect, useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import QuotePreview from '../../../components/admin/invoices/QuotePreview';
import SavedPricePicker from '../../../components/admin/invoices/SavedPricePicker';
import CustomerPicker from '../../../components/staff/CustomerPicker';
import '../../../styles/pricelist-builder.css';

const WELCOME_FALLBACK =
  'Hi! I can price plain packaging from the database and calculate custom printed products. Select a customer for saved pricing, choose VAT or Cash, then ask me anything.';

export default function NewInvoiceQuotePage() {
  const router = useRouter();
  const { quote_id: quoteIdParam, session_id: sessionIdParam } = router.query;

  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [quote, setQuote] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [documentType, setDocumentType] = useState('vat');
  const [customerName, setCustomerName] = useState('');
  const [customerId, setCustomerId] = useState(null);
  const [savedPriceCount, setSavedPriceCount] = useState(0);
  const [customerPickerOpen, setCustomerPickerOpen] = useState(false);
  const [savedPickerOpen, setSavedPickerOpen] = useState(false);
  const [applyingSaved, setApplyingSaved] = useState(false);
  const bottomRef = useRef(null);
  const initRef = useRef(false);

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((d) => {
        if (d.user?.role !== 'admin') throw new Error();
        setAllowed(true);
      })
      .catch(() => router.replace('/login'))
      .finally(() => setLoading(false));
  }, [router]);

  const loadSession = useCallback(async (sessionId) => {
    const res = await fetch(`/api/admin/invoices/session/${sessionId}`, { credentials: 'include' });
    if (!res.ok) throw new Error('Failed to load session');
    const data = await res.json();
    setSession(data.session);
    setQuote(data.quote);
    setDocumentType(data.quote?.document_type || data.session?.document_type || 'vat');
    setCustomerName(data.quote?.customer_name || '');
    setCustomerId(data.quote?.customer_id || data.session?.customer_id || null);
    setMessages(
      data.messages?.length
        ? data.messages.map((m) => ({ role: m.role, content: m.content }))
        : [{ role: 'assistant', content: WELCOME_FALLBACK }]
    );
    return data;
  }, []);

  const refreshSavedCount = useCallback(async (cid) => {
    if (!cid) {
      setSavedPriceCount(0);
      return;
    }
    try {
      const res = await fetch(`/api/admin/invoices/customer-prices?customer_id=${encodeURIComponent(cid)}`, {
        credentials: 'include',
      });
      if (res.ok) {
        const d = await res.json();
        setSavedPriceCount(d.products?.length || 0);
      }
    } catch {
      setSavedPriceCount(0);
    }
  }, []);

  useEffect(() => {
    if (!allowed || !router.isReady || initRef.current) return;

    const init = async () => {
      initRef.current = true;
      try {
        if (sessionIdParam) {
          await loadSession(sessionIdParam);
          return;
        }
        if (quoteIdParam) {
          const qRes = await fetch(`/api/admin/invoices/${quoteIdParam}`, { credentials: 'include' });
          if (qRes.ok) {
            const q = await qRes.json();
            if (q.session_id) {
              await loadSession(q.session_id);
              return;
            }
          }
        }
        const res = await fetch('/api/admin/invoices', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ document_type: documentType, customer_name: customerName || null }),
        });
        const d = await res.json();
        setSession(d.session);
        setQuote(d.quote);
        setMessages([{ role: 'assistant', content: WELCOME_FALLBACK }]);
        const sessRes = await fetch(`/api/admin/invoices/session/${d.session.id}`, { credentials: 'include' });
        if (sessRes.ok) {
          const sess = await sessRes.json();
          if (sess.messages?.length) {
            setMessages(sess.messages.map((m) => ({ role: m.role, content: m.content })));
          }
        }
      } catch (e) {
        console.error(e);
      }
    };

    init();
  }, [allowed, router.isReady, quoteIdParam, sessionIdParam, loadSession]);

  useEffect(() => {
    refreshSavedCount(customerId);
  }, [customerId, refreshSavedCount]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatLoading]);

  const patchQuote = async (body) => {
    if (!quote?.id) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/invoices/${quote.id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setQuote(data);
      if (body.customer_id !== undefined) setCustomerId(body.customer_id);
      if (body.customer_name !== undefined) setCustomerName(body.customer_name);
      if (body.document_type !== undefined) setDocumentType(body.document_type);
    } finally {
      setSaving(false);
    }
  };

  const handleCustomerSelect = async ({ id, name }) => {
    setCustomerId(id);
    setCustomerName(name);
    await patchQuote({ customer_id: id, customer_name: name });
    setMessages((m) => [
      ...m,
      {
        role: 'assistant',
        content: `Customer set to **${name}**. I can use their saved prices or calculate fresh — just ask.`,
      },
    ]);
  };

  const handleApplySavedPrices = async (opts) => {
    if (!quote?.id) return;
    setApplyingSaved(true);
    try {
      const res = await fetch(`/api/admin/invoices/${quote.id}?action=apply-saved-prices`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(opts),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to apply');
      setQuote(data);
      setSavedPickerOpen(false);
      const count = opts.mode === 'latest' ? savedPriceCount : opts.match_keys?.length || 0;
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content: `Applied ${count} saved price${count === 1 ? '' : 's'} to the quote. You can adjust quantities in the preview or ask me to add more items.`,
        },
      ]);
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: `Could not apply saved prices: ${err.message}` }]);
    } finally {
      setApplyingSaved(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || !session?.id || chatLoading) return;
    const text = input.trim();
    setInput('');
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setChatLoading(true);
    try {
      const res = await fetch('/api/admin/invoices/chat', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: session.id,
          message: text,
          customer_id: customerId || quote?.customer_id,
          document_type: documentType,
        }),
      });
      const raw = await res.text();
      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        throw new Error(raw?.slice(0, 300) || `Chat failed (${res.status})`);
      }
      if (!res.ok) throw new Error(data.error || 'Chat failed');
      setMessages((m) => [...m, { role: 'assistant', content: data.message }]);
      if (data.quote) setQuote(data.quote);
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: `Error: ${err.message}` }]);
    } finally {
      setChatLoading(false);
    }
  };

  const handleFinalize = async () => {
    setSaving(true);
    try {
      await fetch(`/api/admin/invoices/${quote.id}?action=finalize`, {
        method: 'POST',
        credentials: 'include',
      });
      const res = await fetch(`/api/admin/invoices/${quote.id}`, { credentials: 'include' });
      setQuote(await res.json());
      refreshSavedCount(customerId);
    } finally {
      setSaving(false);
    }
  };

  const handleConvert = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/invoices/${quote.id}?action=convert`, {
        method: 'POST',
        credentials: 'include',
      });
      const inv = await res.json();
      if (res.ok) router.push(`/admin/invoices/${inv.id}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading || !allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <AdminLayout title="New Quote">
      <Head>
        <title>New Quote — Admin — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setCustomerPickerOpen(true)}
          className="border border-slate-200 rounded-xl px-3 py-2 text-sm text-left min-w-[200px] hover:border-slate-300 bg-white"
        >
          {customerName ? (
            <span className="font-medium text-slate-900">{customerName}</span>
          ) : (
            <span className="text-slate-400">Select customer…</span>
          )}
        </button>

        {customerId && savedPriceCount > 0 && (
          <button
            type="button"
            onClick={() => setSavedPickerOpen(true)}
            className="px-3 py-2 rounded-xl text-sm font-medium bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
          >
            Saved prices ({savedPriceCount})
          </button>
        )}

        <input
          type="text"
          placeholder="Or type customer name"
          className="border border-slate-200 rounded-xl px-3 py-2 text-sm"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          onBlur={() => patchQuote({ customer_name: customerName })}
        />

        <div className="flex rounded-xl border border-slate-200 overflow-hidden text-sm">
          <button
            type="button"
            className={`px-4 py-2 ${documentType === 'vat' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600'}`}
            onClick={() => {
              setDocumentType('vat');
              patchQuote({ document_type: 'vat' });
            }}
          >
            VAT Invoice
          </button>
          <button
            type="button"
            className={`px-4 py-2 ${documentType === 'cash' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600'}`}
            onClick={() => {
              setDocumentType('cash');
              patchQuote({ document_type: 'cash' });
            }}
          >
            Cash (no VAT)
          </button>
        </div>
        <p className="text-xs text-slate-500 w-full">
          {documentType === 'cash'
            ? 'Cash: material costs include 23% purchase VAT. Customer pays the cash total shown — no VAT added.'
            : 'VAT invoice: materials priced ex-VAT. Customer pays subtotal + 23% VAT.'}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 min-h-[calc(100vh-12rem)]">
        <div className="bg-white rounded-2xl border border-slate-200 flex flex-col">
          <div className="p-4 border-b border-slate-100 font-semibold text-slate-800">AI Quote Assistant</div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[60vh] lg:max-h-none">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm rounded-xl px-3 py-2 max-w-[90%] whitespace-pre-wrap ${
                  m.role === 'user' ? 'ml-auto bg-blue-600 text-white' : 'bg-slate-100 text-slate-800'
                }`}
              >
                {m.content.replace(/\*\*(.*?)\*\*/g, '$1')}
              </div>
            ))}
            {chatLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="inline-block w-2 h-2 rounded-full bg-slate-300 animate-pulse" />
                Calculating…
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <form onSubmit={sendMessage} className="p-4 border-t border-slate-100 flex gap-2">
            <input
              className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-sm"
              placeholder="Ask about pricing or build a quote…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={chatLoading}
            />
            <button
              type="submit"
              disabled={chatLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>

        <QuotePreview
          quote={quote}
          saving={saving}
          onUpdate={(body) => patchQuote(body)}
          onFinalize={handleFinalize}
          onConvert={handleConvert}
        />
      </div>

      <CustomerPicker
        open={customerPickerOpen}
        onClose={() => setCustomerPickerOpen(false)}
        onSelect={handleCustomerSelect}
      />

      <SavedPricePicker
        open={savedPickerOpen}
        onClose={() => setSavedPickerOpen(false)}
        customerId={customerId}
        customerName={customerName}
        onApply={handleApplySavedPrices}
        applying={applyingSaved}
      />
    </AdminLayout>
  );
}
