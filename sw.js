//Seccion 4 Service Worker y Fetch Event

/*self.addEventListener('fetch', event => {
    if(event.request.url.includes('main.jpg')){
        event.respondWith(fetch('img/main-patas-arriba.jpg'));
    }
    const respuesta = fetch(event.request)
                        .then(resp => {
                            if(resp.ok){
                                return resp;
                            }else{
                                return fetch('img/main.jpg');
                            }
                        });
    event.respondWith(respuesta);
});*/

//Seccion 5 Ciclo de vida de un SW

//Desacrgar assets/Crear cache
self.addEventListener('install', event =>{
    console.log('Instalando SW');
    self.skipWaiting();
});

//Borrar cache viejo
self.addEventListener('activate', event => {
    console.log('Nuevo SW activo y listo');
});
