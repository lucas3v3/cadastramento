if (navigator.serviceWorker) {
    navigator.serviceWorker.register (
        '/cadastramento/sw.js',
        { scope: '/cadastramento/' }
    ).then(() => console.log("Service Worker registrado"));
}