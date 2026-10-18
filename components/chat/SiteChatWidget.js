import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaCommentDots, FaPaperPlane, FaTimes } from 'react-icons/fa';

const WELCOME = {
  local: true,
  role: 'assistant',
  content: 'Ask about printing, packaging, or a price. I can send your enquiry straight to the PrintNPack team.',
};

const SUGGESTIONS = ['I need a quote', 'Custom pizza boxes', 'Pop-up display stands', 'Plain packaging'];

function safeHref(href) {
  if (typeof href !== 'string') return '';
  if (href.startsWith('/') && !href.startsWith('//')) return href;
  if (href.startsWith('https://www.printnpack.ie/')) return href;
  if (href.startsWith('https://wa.me/')) return href;
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return href;
  return '';
}

function MessageBody({ text }) {
  const parts = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match;
  let key = 0;
  const source = String(text || '');

  while ((match = pattern.exec(source))) {
    if (match.index > last) parts.push(source.slice(last, match.index));
    const href = safeHref(match[2]);
    if (href.startsWith('/')) {
      parts.push(
        <Link key={key} href={href} className="font-semibold underline">
          {match[1]}
        </Link>
      );
    } else if (href) {
      parts.push(
        <a key={key} href={href} className="font-semibold underline" target="_blank" rel="noreferrer">
          {match[1]}
        </a>
      );
    } else {
      parts.push(match[0]);
    }
    key += 1;
    last = match.index + match[0].length;
  }
  if (last < source.length) parts.push(source.slice(last));

  return <p className="whitespace-pre-wrap">{parts}</p>;
}

export default function SiteChatWidget() {
  const router = useRouter();
  const path = router.pathname || '';
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([WELCOME]);
  const listRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  if (path.startsWith('/staff') || path.startsWith('/admin')) return null;

  async function send(text) {
    const content = String(text || '').trim();
    if (!content || status === 'sending') return;

    const history = [
      ...messages.filter((message) => !message.local).map(({ role, content: body }) => ({ role, content: body })),
      { role: 'user', content },
    ];

    setMessages((current) => [
      ...current,
      { role: 'user', content },
      { role: 'assistant', content: '', pending: true },
    ]);
    setDraft('');
    setError('');
    setStatus('sending');

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: history,
          page: router.asPath || '/',
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'The assistant is unavailable.');
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('The assistant is unavailable.');
      const decoder = new TextDecoder();
      let full = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        const next = full;
        setMessages((current) => {
          const copy = [...current];
          copy[copy.length - 1] = { role: 'assistant', content: next, pending: true };
          return copy;
        });
      }

      setMessages((current) => {
        const copy = [...current];
        copy[copy.length - 1] = {
          role: 'assistant',
          content: full.trim() || 'Sorry, I missed that. Call 089 415 7369 or email info@printnpack.ie.',
        };
        return copy;
      });
    } catch (err) {
      if (err?.name === 'AbortError') return;
      setError(err.message || 'Something went wrong.');
      setMessages((current) => current.filter((message) => !message.pending || message.content));
    } finally {
      setStatus('idle');
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[65] flex flex-col items-end">
      {open && (
        <section
          className="mb-3 flex h-[min(34rem,calc(100dvh-6rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          aria-label="PrintNPack chat"
        >
          <header className="flex items-center justify-between bg-slate-950 px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">printNpack</p>
              <p className="text-xs text-slate-300">Quotes and product questions</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-3 py-3">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'border border-slate-200 bg-white text-slate-800'
                  }`}
                >
                  {message.pending && !message.content ? (
                    <span className="text-slate-400">Typing…</span>
                  ) : (
                    <MessageBody text={message.content} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 border-t border-slate-100 bg-white px-3 py-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => send(suggestion)}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {error && <p className="px-3 pb-1 text-xs text-red-600">{error}</p>}

          <form
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
            onSubmit={(event) => {
              event.preventDefault();
              send(draft);
            }}
          >
            <label htmlFor="site-chat-input" className="sr-only">Message</label>
            <input
              id="site-chat-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about a product or price"
              maxLength={1000}
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={status === 'sending' || !draft.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white disabled:opacity-40"
              aria-label="Send message"
            >
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
        aria-expanded={open}
      >
        <FaCommentDots />
        {open ? 'Close' : 'Ask us'}
      </button>
    </div>
  );
}
