import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaCommentDots, FaPaperPlane, FaTimes } from 'react-icons/fa';

const WELCOME = {
  local: true,
  role: 'assistant',
  content: 'Need any help? We are live until 12 AM and usually reply very fast. Ask your question, and share your details in case the chat disconnects.',
};

const PROMPT = 'Need any help? We usually reply very fast. We are live and answer queries until 12 AM.';

const SUGGESTIONS = ['I need a quote', 'Custom pizza boxes', 'Pop-up display stands', 'Plain packaging'];

function safeHref(href) {
  if (typeof href !== 'string') return '';
  if (href.startsWith('/') && !href.startsWith('//')) return href;
  if (href.startsWith('https://www.printnpack.ie/')) return href;
  if (href.startsWith('https://wa.me/')) return href;
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return href;
  return '';
}

function mergeThread(current, incoming) {
  const pending = current.filter((message) => {
    if (message.local || message.pending) return true;
    if (!message.id) {
      return !incoming.some((row) => row.role === message.role && row.content === message.content);
    }
    return false;
  });
  return [...pending.filter((message) => message.local), ...incoming, ...pending.filter((message) => !message.local)];
}

function MessageBody({ text, onNavigate }) {
  const parts = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match;
  let key = 0;
  const source = String(text || '');

  while ((match = pattern.exec(source))) {
    if (match.index > last) parts.push(source.slice(last, match.index));
    const href = safeHref(match[2]);
    const sitePath = href.startsWith('https://www.printnpack.ie/')
      ? href.slice('https://www.printnpack.ie'.length)
      : href;
    if (sitePath.startsWith('/')) {
      parts.push(
        <Link
          key={key}
          href={sitePath}
          className="font-semibold underline"
          onClick={(event) => {
            event.preventDefault();
            onNavigate?.(sitePath);
          }}
        >
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
  const [mode, setMode] = useState('ai');
  const [chatId, setChatId] = useState('');
  const [needsLead, setNeedsLead] = useState(false);
  const [lead, setLead] = useState({ name: '', email: '', phone: '' });
  const [nudge, setNudge] = useState(false);
  const listRef = useRef(null);
  const abortRef = useRef(null);
  const chatIdRef = useRef('');
  const openRef = useRef(false);
  const modeRef = useRef('ai');

  useEffect(() => {
    const saved = window.sessionStorage.getItem('printnpack-chat-id') || '';
    if (saved) {
      chatIdRef.current = saved;
      setChatId(saved);
    }
  }, []);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  useEffect(() => {
    const phoneQuery = window.matchMedia('(max-width: 767px)');
    const phone = phoneQuery.matches;
    const key = phone ? 'printnpack-ask-nudge-phone' : 'printnpack-ask-nudge';
    try {
      if (phone) {
        if (window.sessionStorage.getItem(key)) return undefined;
      } else if (window.localStorage.getItem(key) === new Date().toISOString().slice(0, 10)) {
        return undefined;
      }
    } catch {
      return undefined;
    }
    const delay = phone ? 6000 + Math.floor(Math.random() * 5000) : 12000;
    const timer = window.setTimeout(() => {
      if (openRef.current) return;
      setNudge(true);
    }, delay);
    return () => window.clearTimeout(timer);
  }, []);

  function dismissNudge() {
    setNudge(false);
    const phone = window.matchMedia('(max-width: 767px)').matches;
    try {
      if (phone) window.sessionStorage.setItem('printnpack-ask-nudge-phone', '1');
      else window.localStorage.setItem('printnpack-ask-nudge', new Date().toISOString().slice(0, 10));
    } catch {
      // The prompt can show again next visit.
    }
  }

  useEffect(() => {
    if (open && nudge) dismissNudge();
  }, [open, nudge]);

  useEffect(() => {
    if (!open) return undefined;
    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      overflow: style.overflow,
      position: style.position,
      top: style.top,
      width: style.width,
    };
    style.overflow = 'hidden';
    style.position = 'fixed';
    style.top = `-${scrollY}px`;
    style.width = '100%';
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      style.overflow = previous.overflow;
      style.position = previous.position;
      style.top = previous.top;
      style.width = previous.width;
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    modeRef.current = mode;
    if (mode === 'human') setNeedsLead(false);
  }, [mode]);

  useEffect(() => {
    if (!open || !chatId) return undefined;
    let stop = false;
    fetch(`/api/chat?chatId=${encodeURIComponent(chatId)}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!data || stop) return;
        const human = data.status === 'human';
        modeRef.current = human ? 'human' : 'ai';
        setMode(human ? 'human' : 'ai');
        const incoming = Array.isArray(data.messages) ? data.messages : [];
        setNeedsLead(!human && data.hasLead === false && incoming.some((row) => row.role === 'user'));
        setMessages((current) => mergeThread(current, incoming));
      })
      .catch(() => {});
    return () => {
      stop = true;
    };
  }, [open, chatId]);

  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!chatId || !supabaseUrl || !anonKey) return undefined;

    const socketUrl = `${supabaseUrl.replace(/^https:/, 'wss:').replace(/\/$/, '')}/realtime/v1/websocket?apikey=${encodeURIComponent(anonKey)}&vsn=1.0.0`;
    const socket = new WebSocket(socketUrl);
    let ref = 0;
    const send = (topic, event, payload) => {
      if (socket.readyState !== WebSocket.OPEN) return;
      ref += 1;
      socket.send(JSON.stringify({ topic, event, payload, ref: String(ref) }));
    };

    socket.onopen = () => {
      send(`realtime:live-chat-${chatId}`, 'phx_join', {
        config: {
          broadcast: { ack: false, self: false },
          presence: { enabled: false },
          private: false,
        },
        access_token: anonKey,
      });
    };

    socket.onmessage = (event) => {
      let data;
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }
      if (data.event !== 'broadcast') return;
      const payload = data.payload?.payload;
      if (!payload?.content) return;
      if (payload.status === 'human' || payload.status === 'ai') {
        modeRef.current = payload.status;
        setMode(payload.status);
      }
      if (payload.role === 'staff' && !openRef.current) setOpen(true);
      setMessages((current) => {
        if (payload.id && current.some((message) => message.id === payload.id)) return current;
        const pending = current.findIndex((message) => !message.id && message.role === payload.role && message.content === payload.content);
        if (pending >= 0) {
          const copy = [...current];
          copy[pending] = { ...copy[pending], id: payload.id };
          return copy;
        }
        return [...current, { id: payload.id, role: payload.role, content: payload.content }];
      });
    };

    const beat = setInterval(() => send('phoenix', 'heartbeat', {}), 25000);
    return () => {
      clearInterval(beat);
      socket.close();
    };
  }, [chatId]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const visitorSession = window.localStorage.getItem('analytics_session_id') || '';
    if (!visitorSession || !supabaseUrl || !anonKey) return undefined;

    const socketUrl = `${supabaseUrl.replace(/^https:/, 'wss:').replace(/\/$/, '')}/realtime/v1/websocket?apikey=${encodeURIComponent(anonKey)}&vsn=1.0.0`;
    const socket = new WebSocket(socketUrl);
    let ref = 0;
    const sendFrame = (topic, event, payload) => {
      if (socket.readyState !== WebSocket.OPEN) return;
      ref += 1;
      socket.send(JSON.stringify({ topic, event, payload, ref: String(ref) }));
    };
    socket.onopen = () => {
      sendFrame(`realtime:live-visitor-${visitorSession}`, 'phx_join', {
        config: {
          broadcast: { ack: false, self: false },
          presence: { enabled: false },
          private: false,
        },
        access_token: anonKey,
      });
    };
    socket.onmessage = (event) => {
      let data;
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }
      if (data.event !== 'broadcast') return;
      const payload = data.payload?.payload;
      if (!payload?.content || payload.role !== 'staff') return;
      if (payload.chatId) {
        chatIdRef.current = payload.chatId;
        window.sessionStorage.setItem('printnpack-chat-id', payload.chatId);
        setChatId(payload.chatId);
      }
      modeRef.current = 'human';
      setMode('human');
      setMessages((current) => {
        if (payload.id && current.some((message) => message.id === payload.id)) return current;
        return [...current, { id: payload.id, role: 'staff', content: payload.content }];
      });
      if (!openRef.current) {
        window.dispatchEvent(new CustomEvent('printnpack-staff-ping', { detail: { message: payload.content } }));
      } else {
        setOpen(true);
      }
    };
    const beat = setInterval(() => sendFrame('phoenix', 'heartbeat', {}), 25000);
    return () => {
      clearInterval(beat);
      socket.close();
    };
  }, []);

  useEffect(() => {
    const openWith = (event) => {
      const message = event.detail?.message;
      const role = event.detail?.role || 'assistant';
      const nextChatId = event.detail?.chatId;
      if (nextChatId) {
        chatIdRef.current = nextChatId;
        window.sessionStorage.setItem('printnpack-chat-id', nextChatId);
        setChatId(nextChatId);
        modeRef.current = 'human';
        setMode('human');
      }
      if (message) {
        setMessages((current) => {
          if (current.some((item) => item.content === message && item.role === role)) return current;
          return [...current, { role, content: message }];
        });
      }
      setOpen(true);
    };
    window.addEventListener('printnpack-open-chat', openWith);
    return () => window.removeEventListener('printnpack-open-chat', openWith);
  }, []);

  async function attachArtwork(file) {
    if (!file) return;
    setError('');
    const data = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || '').split(',')[1] || '');
      reader.onerror = () => reject(new Error('Could not read that file.'));
      reader.readAsDataURL(file);
    });
    const response = await fetch('/api/chat/artwork', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatId: chatIdRef.current || undefined,
        page: router.asPath || '/',
        filename: file.name,
        mime: file.type,
        data,
        sessionId: window.localStorage.getItem('analytics_session_id') || '',
      }),
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.message || 'Artwork was not saved.');
    if (body.chatId) {
      chatIdRef.current = body.chatId;
      window.sessionStorage.setItem('printnpack-chat-id', body.chatId);
      setChatId(body.chatId);
    }
    setMessages((current) => [...current, { role: 'user', content: `Artwork attached: ${file.name}` }]);
  }

  if (path.startsWith('/staff') || path.startsWith('/admin')) return null;

  function rememberChat(id) {
    if (!id) return;
    chatIdRef.current = id;
    window.sessionStorage.setItem('printnpack-chat-id', id);
    setChatId(id);
  }

  function applyReply(data) {
    if (data.chatId) rememberChat(data.chatId);
    if (data.mode === 'human') {
      modeRef.current = 'human';
      setMode('human');
      setNeedsLead(false);
    } else if (data.mode === 'lead') {
      setNeedsLead(true);
    } else if (data.hasLead) {
      setNeedsLead(false);
    }
    if (data.message?.content) {
      setMessages((current) => {
        if (data.message.id && current.some((message) => message.id === data.message.id)) return current;
        return [...current, data.message];
      });
    }
  }

  async function send(text) {
    const content = String(text || '').trim();
    if (!content || status === 'sending') return;

    setMessages((current) => [...current, { role: 'user', content }]);
    setDraft('');
    setError('');
    setStatus('sending');
    if (modeRef.current !== 'human') setNeedsLead(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: [{ role: 'user', content }],
          page: router.asPath || '/',
          chatId: chatIdRef.current || undefined,
          sessionId: window.localStorage.getItem('analytics_session_id') || '',
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || 'The team is unavailable. Call 089 415 7369.');
      applyReply(data);
    } catch (err) {
      if (err?.name === 'AbortError') return;
      setError(err.message || 'Something went wrong.');
    } finally {
      setStatus('idle');
    }
  }

  async function submitLead(event) {
    event.preventDefault();
    if (status === 'sending') return;
    setError('');
    setStatus('sending');
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead,
          page: router.asPath || '/',
          chatId: chatIdRef.current || undefined,
          sessionId: window.localStorage.getItem('analytics_session_id') || '',
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || 'Could not send your details.');
      applyReply(data);
      setLead({ name: '', email: '', phone: '' });
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setStatus('idle');
    }
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-end md:p-4">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/50"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-label="PrintNPack chat"
            className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-white md:h-[min(36rem,calc(100dvh-2rem))] md:w-[min(24rem,calc(100vw-2rem))] md:rounded-2xl md:border md:border-slate-200 md:shadow-2xl"
          >
          <header
            className="flex items-center justify-between gap-3 bg-slate-950 px-4 py-3 text-white"
            style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold">printNpack</p>
              <p className="text-xs text-slate-300">
                {mode === 'human' ? 'You are chatting with the team' : 'Live until 12 AM · we reply fast'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-slate-950"
              aria-label="Close chat"
            >
              <FaTimes aria-hidden="true" />
              Close
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-slate-50 px-3 py-3">
            {messages.map((message, index) => (
              <div key={message.id || `${message.role}-${index}`} className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : message.role === 'staff'
                        ? 'border border-emerald-200 bg-emerald-50 text-slate-800'
                        : 'border border-slate-200 bg-white text-slate-800'
                  }`}
                >
                  {message.role === 'staff' && (
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">PrintNPack team</p>
                  )}
                  {message.pending && !message.content ? (
                    <span className="text-slate-400">Typing…</span>
                  ) : (
                    <MessageBody
                      text={message.content}
                      onNavigate={(href) => {
                        setOpen(false);
                        router.push(href);
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {messages.filter((message) => !message.local).length === 0 && !needsLead && (
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

          {needsLead && (
            <form className="space-y-2 border-t border-slate-200 bg-white px-3 py-3" onSubmit={submitLead}>
              <p className="text-xs font-medium text-slate-600">Please share your details in case the chat disconnects.</p>
              <input
                value={lead.name}
                onChange={(event) => setLead((current) => ({ ...current, name: event.target.value }))}
                placeholder="Name"
                autoComplete="name"
                required
                maxLength={120}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-[16px] outline-none focus:border-blue-500"
              />
              <input
                type="email"
                value={lead.email}
                onChange={(event) => setLead((current) => ({ ...current, email: event.target.value }))}
                placeholder="Email"
                autoComplete="email"
                required
                maxLength={160}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-[16px] outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                value={lead.phone}
                onChange={(event) => setLead((current) => ({ ...current, phone: event.target.value }))}
                placeholder="Phone"
                autoComplete="tel"
                maxLength={40}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-[16px] outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={status === 'sending' || lead.name.trim().length < 2 || !lead.email.trim()}
                className="w-full rounded-xl bg-slate-950 px-3 py-2 text-sm font-semibold text-white disabled:opacity-40"
              >
                Send to the team
              </button>
            </form>
          )}

          <form
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
            onSubmit={(event) => {
              event.preventDefault();
              send(draft);
            }}
          >
            <label className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200 text-xs font-semibold text-slate-600" title="Attach artwork">
              Art
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp,application/pdf"
                className="sr-only"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  event.target.value = '';
                  attachArtwork(file).catch((err) => setError(err.message));
                }}
              />
            </label>
            <label htmlFor="site-chat-input" className="sr-only">Message</label>
            <input
              id="site-chat-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={needsLead ? 'Add anything else' : 'What do you need?'}
              maxLength={1000}
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2 text-[16px] outline-none focus:border-blue-500"
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
        </div>
      )}

      {!open && (
        <div
          className="fixed bottom-4 right-4 z-[65] flex max-w-[min(18rem,calc(100vw-2rem))] flex-col items-end gap-2"
          style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
        >
          {nudge && (
            <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-xl">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="text-left text-sm font-medium leading-snug text-slate-900"
              >
                <span className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  Live until 12 AM
                </span>
                {PROMPT}
              </button>
              <button
                type="button"
                onClick={dismissNudge}
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-500"
                aria-label="Dismiss"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
            aria-expanded={false}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
            <FaCommentDots />
            Ask us
          </button>
        </div>
      )}
    </>
  );
}
