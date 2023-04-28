const PATH = "/cadastramento";
const APP_PREFIX = "3V3-CAD";
const VERSION = "v20230428.1";
const CACHE_NAME = APP_PREFIX + VERSION;
const ASSETS = [
  `${PATH}/manifest.webmanifest`,
  `${PATH}/js/jquery.slim.min.js`,
  `${PATH}/js/jquery.mask.min.js`,
  `${PATH}/js/bootstrap.bundle.min.js`,
  `${PATH}/js/autocomplete.min.js`,
  `${PATH}/js/app.js`,
  `${PATH}/css/bootstrap.min.css`,
  `${PATH}/img/icon.png`,
  `${PATH}/img/3v3.svg`,
  `${PATH}/index.html`,
  `${PATH}/`,
];

console.log("Versão do SW: " + VERSION);

self.addEventListener("install", (event) => {
  console.log("Instalando cache: " + CACHE_NAME);
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .catch((err) => console.log(err))
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Enviando do cache: " + event.request.url);
  event.respondWith(
    fetch(event.request).catch((err) =>
      caches.match(event.request).then((response) => response)
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("Apagando cache: " + cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
