// Card Room 21 service worker: lets the app install and opens a friendly page when you're offline.
// Everything else goes straight to the network, so updates show up right away.
const OFFLINE = '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>Card Room 21</title><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#0D1222;color:#E8EAF2;font:16px system-ui,sans-serif;text-align:center;padding:24px"><div><p style="font:500 30px Georgia,serif;margin:0 0 8px">Card Room 21</p><p style="margin:0;color:#9AA2B8">You\'re offline. Reconnect to get back to the table.</p></div>';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(OFFLINE, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
