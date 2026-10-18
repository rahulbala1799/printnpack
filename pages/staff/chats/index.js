import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';

function timeLabel(value) {
  if (!value) return '';
  return new Date(value).toLocaleString('en-IE', {
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'short',
  });
}

export default function StaffChatsPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [thread, setThread] = useState(null);
  const [draft, setDraft] = useState('');
  const [error, setError] = useState('');
  const [pane, setPane] = useState('chats');
  const [visitors, setVisitors] = useState([]);
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' });
        if (!res.ok) {
          router.replace('/staff/login');
          return;
        }
        const data = await res.json();
        if (data.user?.role !== 'staff' && data.user?.role !== 'admin') {
          router.replace('/staff/login');
          return;
        }
        setUser(data.user);
      } catch {
        router.replace('/staff/login');
      } finally {
        setLoading(false);
      }
    })();
  }, [router]);

  useEffect(() => {
    if (!user) return undefined;
    let stop = false;

    async function loadList() {
      const res = await fetch('/api/staff/chats', { credentials: 'include' });
      if (!res.ok || stop) return;
      const data = await res.json();
      setChats(data.chats || []);
    }

    loadList();
    const timer = setInterval(loadList, 3000);
    return () => {
      stop = true;
      clearInterval(timer);
    };
  }, [user]);

  useEffect(() => {
    if (!user || !activeId) return undefined;
    let stop = false;

    async function loadThread() {
      const res = await fetch(`/api/staff/chats/${activeId}`, { credentials: 'include' });
      if (!res.ok || stop) return;
      const data = await res.json();
      setThread(data);
    }

    loadThread();
    const timer = setInterval(loadThread, 2000);
    return () => {
      stop = true;
      clearInterval(timer);
    };
  }, [user, activeId]);

  useEffect(() => {
    if (!user || pane === 'chats') return undefined;
    let stop = false;
    async function loadPane() {
      const url = pane === 'visitors' ? '/api/staff/visitors' : '/api/staff/artwork';
      const res = await fetch(url, { credentials: 'include' });
      if (!res.ok || stop) return;
      const data = await res.json();
      if (pane === 'visitors') setVisitors(data.visitors || []);
      else setArtwork(data.artwork || []);
    }
    loadPane();
    const timer = setInterval(loadPane, 4000);
    return () => {
      stop = true;
      clearInterval(timer);
    };
  }, [user, pane]);

  async function act(action, text) {
    setError('');
    const res = await fetch(`/api/staff/chats/${activeId}`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, text }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(data.error || 'Could not update the chat.');
      return;
    }
    if (action === 'reply') setDraft('');
    const again = await fetch(`/api/staff/chats/${activeId}`, { credentials: 'include' });
    if (again.ok) setThread(await again.json());
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" aria-hidden />
      </div>
    );
  }

  const status = thread?.chat?.status;

  return (
    <StaffLayout user={user} title="Live chats">
      <Head>
        <title>Live chats — Staff — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="staff-body flex gap-2 pb-3">
        {['chats', 'visitors', 'artwork'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setPane(item)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${pane === item ? 'bg-slate-950 text-white' : 'bg-white text-slate-600'}`}
          >
            {item === 'chats' ? 'Live chats' : item === 'visitors' ? 'Live visitors' : 'Artwork'}
          </button>
        ))}
      </div>
      {pane === 'visitors' && (
        <div className="staff-body space-y-3 pb-8">
          {visitors.length === 0 && <p className="text-sm text-slate-500">Nobody on the site in the last 15 minutes.</p>}
          {visitors.map((visitor) => (
            <article key={visitor.id} className="rounded-2xl bg-white px-4 py-3">
              <p className="text-sm font-semibold text-slate-900">
                {visitor.city || visitor.country || 'Visitor'} · {visitor.device || 'desktop'}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Landed from {visitor.source}{visitor.referrer ? ` (${visitor.referrer})` : ''} on {visitor.landed || 'the site'}
                {visitor.next ? ` · next ${visitor.next}` : ''}
              </p>
              <p className="mt-1 text-sm text-slate-800">Now on {visitor.current || 'the site'}</p>
              {visitor.trail?.length > 0 && (
                <p className="mt-1 text-xs text-slate-500">{visitor.trail.join(' → ')}</p>
              )}
              {visitor.invite && <p className="mt-1 text-xs text-blue-700">Bubble: {visitor.invite}</p>}
            </article>
          ))}
        </div>
      )}
      {pane === 'artwork' && (
        <div className="staff-body space-y-2 pb-8">
          {artwork.length === 0 && <p className="text-sm text-slate-500">No artwork uploaded yet.</p>}
          {artwork.map((file) => (
            <a key={file.id} href={`/api/staff/artwork/${file.id}`} className="block rounded-2xl bg-white px-4 py-3 text-sm">
              <span className="font-semibold text-slate-900">{file.filename}</span>
              <span className="mt-1 block text-xs text-slate-500">{file.email || file.page || 'Website chat'} · {Math.ceil((file.size || 0) / 1024)} KB</span>
            </a>
          ))}
        </div>
      )}
      {pane === 'chats' && (
      <div className="staff-body grid gap-4 pb-8 md:grid-cols-[16rem_1fr]">
        <aside className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {chats.length === 0 && <p className="p-4 text-sm text-slate-500">No website chats yet.</p>}
          {chats.map((chat) => (
            <button
              key={chat.id}
              type="button"
              onClick={() => setActiveId(chat.id)}
              className={`block w-full border-b border-slate-100 px-4 py-3 text-left ${activeId === chat.id ? 'bg-slate-50' : ''}`}
            >
              <span className="flex items-center justify-between gap-2 text-xs text-slate-500">
                <span>{chat.status === 'human' ? 'You have this' : 'Assistant'}</span>
                <span>{timeLabel(chat.lastMessageAt)}</span>
              </span>
              <span className="mt-1 block truncate text-sm font-medium text-slate-900">
                {chat.visitorEmail || chat.page || 'Website visitor'}
              </span>
              <span className="mt-1 block truncate text-xs text-slate-500">{chat.preview}</span>
            </button>
          ))}
        </aside>

        <section className="flex min-h-[28rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {!thread && <p className="p-6 text-sm text-slate-500">Choose a chat to read it and reply.</p>}
          {thread && (
            <>
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{thread.chat.visitorEmail || 'Website visitor'}</p>
                  <p className="text-xs text-slate-500">{thread.chat.page}</p>
                </div>
                {status === 'human' ? (
                  <button type="button" onClick={() => act('release')} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium">
                    Hand back to assistant
                  </button>
                ) : (
                  <button type="button" onClick={() => act('takeover')} className="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white">
                    Take over
                  </button>
                )}
              </div>
              <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
                {(thread.messages || []).map((message) => (
                  <div key={message.id} className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                    <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${message.role === 'user' ? 'bg-blue-600 text-white' : message.role === 'staff' ? 'bg-emerald-50 text-slate-800' : 'bg-white text-slate-800'}`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              {error && <p className="px-4 text-xs text-red-600">{error}</p>}
              <form
                className="flex gap-2 border-t border-slate-100 p-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (draft.trim()) act('reply', draft.trim());
                }}
              >
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Reply as the team"
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none"
                />
                <button type="submit" className="rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white">
                  Send
                </button>
              </form>
            </>
          )}
        </section>
      </div>
      )}
    </StaffLayout>
  );
}
