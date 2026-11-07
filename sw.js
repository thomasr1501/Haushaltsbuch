// Minimaler Pass-Through Service Worker für den PWA Install Prompt
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Lässt alle Netzwerk-Requests normal durchlaufen. 
  // Das Caching der Daten übernimmt Firebase Firestore.
});
