var PATH = '/cadastramento';
var APP_PREFIX = '3v3cad';
var VERSION = 'v202209291549';
var CACHE_NAME = APP_PREFIX + VERSION;
var URLS = [    
  `${PATH}/`,
  `${PATH}/index.html`,
  `${PATH}/css/bulma.min.css`,
  `${PATH}/js/jquery-3.6.1.min.js`,
  `${PATH}/js/app.js`
]

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(cache => {
			console.log('Instalando cache: ' + CACHE_NAME);
			return cache.addAll(URLS)
		})
	)
}) 

self.addEventListener('fetch', event => {
	console.log('Requisitando: ' + event.request.url);
	event.respondWith(
		caches.match(event.request)
		.then(request => {
			if (request) {
				console.log('Respondendo com arquivo em cache: ' + event.request.url);
				return request
			} else {
				console.log('Arquivo não encontrado no cache, requisitando: ' + event.request.url);
				return fetch(event.request)
			}
		})
	)
})

self.addEventListener('activate', event => {
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
})

