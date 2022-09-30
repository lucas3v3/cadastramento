if (navigator.serviceWorker) {
    navigator.serviceWorker.register (
        '/cadastramento/js/sw.js',
        { scope: '/cadastramento/' }
    ).then(() => console.log("Service Worker registrado"));
}