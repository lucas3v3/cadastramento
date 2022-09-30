var PATH = '/cadastramento';
var APP_PREFIX = '3V3-CAD';
var VERSION = 'v20220930.5';
var CACHE_NAME = APP_PREFIX + VERSION;
var ASSETS = [    
  `${PATH}/manifest.webmanifest`,
  `${PATH}/js/jquery-3.6.1.js`,
  `${PATH}/js/app.js`,
  `${PATH}/css/bulma.min.css`,
  `${PATH}/img/icon.png`,
  `${PATH}/index.html`,
  `${PATH}/`
];

console.log("Versão do SW: " + VERSION);

self.addEventListener('install', event => {
	console.log('Instalando cache: ' + CACHE_NAME);
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(cache => cache.addAll(ASSETS))
			.catch(err => console.log(err))
	);
}); 

self.addEventListener('fetch', event => {
	console.log('Enviando do cache: ' + event.request.url);
	event.respondWith(
		fetch(event.request)
			.catch(err => caches.match(event.request)
			.then(response => response))
	);
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      var cacheWhitelist = keyList.filter(key => key.indexOf(APP_PREFIX));
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map((key, i) => {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Apagando cache: ' + keyList[i]);
          return caches.delete(keyList[i]);
        }
      }))
    })
  )
})

