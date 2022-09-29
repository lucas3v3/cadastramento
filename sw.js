var PATH = '/cadastramento';
var APP_PREFIX = '3v3cad';
var VERSION = 'v202209291423';
var CACHE_NAME = APP_PREFIX + VERSION;
var URLS = [    
  `${PATH}/`,
  `${PATH}/index.html`,
  `${PATH}/css/bulma.min.css`,
  `${PATH}/js/jquery-3.6.1.min.js`,
  `${PATH}/js/app.js`
]

self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log('Instalando cache: ' + CACHE_NAME);
			return cache.addAll(URLS)
		})
	)
}) 

self.addEventListener('fetch', function(e) {
	console.log('Requisitando: ' + e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(request) {
			if (request) {
				console.log('Respondendo com arquivo em cache: ' + e.request.url);
				return request
			} else {
				console.log('Arquivo não encontrado no cache, requisitando: ' + e.request.url);
				return fetch(e.request)
			}
		})
	)
})

