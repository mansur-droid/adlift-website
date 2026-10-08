export function trackEvent(event, source = 'audit') {
  if (typeof window === 'undefined') return;
  const body = JSON.stringify({ event, source });
  fetch('/api/events/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {});
}
