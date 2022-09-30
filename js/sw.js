var PATH = '/cadastramento';
var APP_PREFIX = '3v3cad';
var VERSION = 'v20220930.1';
var CACHE_NAME = APP_PREFIX + VERSION;
var ASSETS = [    
  `${PATH}/manifest.webmanifest`,
  `${PATH}/js/jquery-3.6.1.js`,
  `${PATH}/js/jquery.mobile-1.4.5.js`,
  `${PATH}/js/app.js`,
  `${PATH}/css/jquery.mobile-1.4.5.min.css`,
  `${PATH}/css/jquery.mobile.icons-1.4.5.min.css`,
  `${PATH}/css/jquery.mobile.theme-1.4.5.min.css`,
  `${PATH}/img/icon.png`,
  `${PATH}/index.html`,
  `${PATH}/`
];

self.addEventListener('install', event => {
	console.log('Instalando cache: ' + CACHE_NAME);
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(cache => {
				return cache.addAll(ASSETS);
			})
			.catch(err => console.log(err));
	);
}); 

self.addEventListener('fetch', event => {
	console.log('Requisitando: ' + event.request.url);
	event.respondWith(
		fetch(event.request)
			.catch(err => {
				console.log(err);
				caches.match(event.request)
					.then(response => response);
				console.log(event.request.url + " obtido do cache");
			});
	);
});

/* self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      var cacheWhitelist = keyList.filter(key => {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map((key, i) => {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Apagando o cache: ' + keyList[i] );
          return caches.delete(keyList[i])
        }
      }))
    })
  )
}) */

