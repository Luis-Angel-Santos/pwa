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

//Descargar assets/Crear cache
self.addEventListener('install', event =>{
    console.log('Instalando SW');
    //self.skipWaiting();
    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Instalaciones terminadas');
            self.skipWaiting();
            resolve()
        });
    })
    event.waitUntil(instalacion);
});

//Borrar cache viejo
self.addEventListener('activate', event => {
    console.log('Nuevo SW activo y listo');
});

//fetch: manejo de peticiones http
self.addEventListener('fetch', event => {
    /*console.log(event.request.url);
    if(event.request.url.includes('https://reqres.in/api/users')){
        const resp = new Response(`{ok: false, mensaje: 'hola mundo'}`);
        event.respondWith(resp);
    }*/
});


//sync: recuperamos conexion a internet

self.addEventListener('sync', event => {
    console.log('Tenemos conexión!');
    console.log(event);
    console.log(event.tag);
});