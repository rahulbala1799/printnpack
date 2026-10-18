import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const SKIP = new Set([
  '/',
  '/about',
  '/services',
  '/blog',
  '/products',
  '/search',
  '/plain-packaging',
  '/login',
  '/contact',
  '/quote',
]);

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function sessionId() {
  try {
    return window.localStorage.getItem('analytics_session_id') || '';
  } catch {
    return '';
  }
}

function alreadyToday() {
  try {
    return window.localStorage.getItem('printnpack-agent-invite') === todayKey();
  } catch {
    return false;
  }
}

function markToday() {
  try {
    window.localStorage.setItem('printnpack-agent-invite', todayKey());
  } catch {
    // The server still blocks a second invite from this connection.
  }
}

function isProduct(path) {
  if (!path || SKIP.has(path) || path.startsWith('/blog') || path.startsWith('/staff') || path.startsWith('/admin')) {
    return false;
  }
  return true;
}

function isQuote(path) {
  return path === '/contact' || path === '/quote' || path.startsWith('/quote/');
}

export default function AgentInvite() {
  const router = useRouter();
  const path = router.asPath?.split('?')[0] || '/';
  const [line, setLine] = useState('');
  const history = useRef([]);
  const fired = useRef(false);

  useEffect(() => {
    if (path.startsWith('/staff') || path.startsWith('/admin') || path.startsWith('/login')) return undefined;
    if (alreadyToday() || fired.current) return undefined;

    if (history.current[history.current.length - 1] !== path) history.current.push(path);
    const productVisits = history.current.filter((item) => isProduct(item));
    const uniqueProducts = new Set(productVisits).size;
    let delay = 0;
    if (isQuote(path)) delay = 10000;
    else if (uniqueProducts >= 2 && isProduct(path)) delay = 8000;
    else if (isProduct(path)) delay = 15000;
    if (!delay) return undefined;

    let stop = false;
    const show = async () => {
      if (stop || fired.current || alreadyToday()) return;
      fired.current = true;
      try {
        const response = await fetch('/api/chat/invite', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: path, sessionId: sessionId() }),
        });
        const data = await response.json();
        if (data.skip) {
          markToday();
          return;
        }
        if (!data.message) {
          fired.current = false;
          return;
        }
        markToday();
        setLine(data.message);
      } catch {
        fired.current = false;
      }
    };

    const timer = setTimeout(show, delay);
    const onLeave = (event) => {
      if (!window.matchMedia('(pointer:fine)').matches) return;
      if (event.relatedTarget || event.clientY > 0 || !isProduct(path)) return;
      clearTimeout(timer);
      show();
    };
    document.addEventListener('mouseout', onLeave);
    return () => {
      stop = true;
      clearTimeout(timer);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [path]);

  if (!line || path.startsWith('/staff') || path.startsWith('/admin')) return null;

  return (
    <button
      type="button"
      onClick={() => {
        setLine('');
        window.dispatchEvent(new CustomEvent('printnpack-open-chat', { detail: { message: line } }));
      }}
      className="fixed bottom-24 right-4 z-[64] flex max-w-[min(20rem,calc(100vw-2rem))] items-start gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-left shadow-xl sm:bottom-24"
    >
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">P</span>
      <span className="text-sm font-medium leading-snug text-slate-900">{line}</span>
    </button>
  );
}
