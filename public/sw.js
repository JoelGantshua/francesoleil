const CACHE_NAME = 'alg-riesoleil-cache-v1';
const OFFLINE_URL = '/offline.html';

// Fichiers à mettre en cache lors de l'installation
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  '/manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Precaching assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
          return null;
        }).filter(Boolean)
      );
    })
  );
  
  // Prendre le contrôle immédiatement
  return self.clients.claim();
});

// Stratégie de mise en cache : Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') return;

  // Ignorer les requêtes vers des API externes qui ne sont pas des polices
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.includes('fonts.googleapis.com') &&
      !event.request.url.includes('fonts.gstatic.com')) {
    return;
  }

  event.respondWith(handleFetch(event));
});

async function handleFetch(event) {
  const cachedResponse = await caches.match(event.request);
  
  // Essayer de récupérer depuis le réseau
  try {
    const networkResponse = await fetch(event.request);
    
    // Si la réponse est valide, la mettre en cache
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(event.request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // En cas d'erreur réseau, retourner la réponse en cache si disponible
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Si pas de cache et navigation, retourner la page hors ligne
    if (event.request.mode === 'navigate') {
      return caches.match(OFFLINE_URL);
    }
    
    return new Response('Ressource non disponible hors ligne', { 
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
