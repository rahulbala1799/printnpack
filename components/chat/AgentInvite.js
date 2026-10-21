import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AgentInvite() {
  const router = useRouter();
  const path = router.asPath?.split('?')[0] || '/';
  const [line, setLine] = useState('');

  useEffect(() => {
    const onTeam = (event) => {
      const message = event.detail?.message;
      if (!message) return;
      setLine(message);
    };
    window.addEventListener('printnpack-staff-ping', onTeam);
    return () => window.removeEventListener('printnpack-staff-ping', onTeam);
  }, []);

  if (!line || path.startsWith('/staff') || path.startsWith('/admin')) return null;

  return (
    <button
      type="button"
      onClick={() => {
        setLine('');
        window.dispatchEvent(new CustomEvent('printnpack-open-chat', {
          detail: { chatId: window.sessionStorage.getItem('printnpack-chat-id') || '' },
        }));
      }}
      className="fixed bottom-24 right-4 z-[64] flex max-w-[min(20rem,calc(100vw-2rem))] items-start gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-left shadow-xl sm:bottom-24"
    >
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">P</span>
      <span className="text-sm font-medium leading-snug text-slate-900">{line}</span>
    </button>
  );
}
