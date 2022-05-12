 const staticCacheName='site-static';
 const dynamicCache='site-dynamic';

 const assests=[
    '/',
    '/index.html',
    '/pages/Fallback.html',
    '/css/materialize.min.css',
    '/css/style.css',
    '/js/app.js',
    '/js/init.js',
    '/js/materialize.min.js',
    '/img/38522399-assistance-volunteer-support-give-help-donate-charity-concept.webp',
    '/img/Charity-Image-1200x900.png',
    '/img/charity.jpg',
    '/img/financials-header.jpg',
    '/img/Giving-to-charity-at-work-2.png',
    '/img/IMG-20220509-WA0001.jpg',
    '/img/IMG-20220509-WA0002.jpg',
    '/img/IMG-20220509-WA0003.jpg',
    '/img/IMG-20220509-WA0004.jpg',
    '/img/IMG-20220509-WA0005.jpg',
    'https://platform.linkedin.com/badges/js/profile.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v128/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
]
//installing service worker
self.addEventListener('install', evt=>{
  evt.waitUntil(
    caches.open(staticCacheName).then(cache=>{
        console.log('assests been added')
        cache.addAll(assets);
    })
  )
});

//activate service worker.
self.addEventListener('activate',evt=>{
    evt.waitUntil(
        caches.keys().then(keys=>{
            return Promise.all(keys.filter(key=> key !== staticCacheName && key !== dynamicCache).map(key=>caches.delete(key))
            )
        })
    )
});

//fetch event
self.addEventListener('fetch', evt=>{
    evt.respondWith(
        caches.match(evt.request).then(cacheRes=>{
            return cacheRes || fetch(evt.request).then(fetchRes=>{
                return cache.open(dynamicCache).then(cache=>{
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        }).catch(()=> caches.match('/pages/Fallback.html'))
    )
});