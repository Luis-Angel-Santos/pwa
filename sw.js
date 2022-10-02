self.addEventListener('fetch', event => {
    /*if(event.request.url.includes('main.jpg')){
        event.respondWith(fetch('img/main-patas-arriba.jpg'));
    }*/
    const respuesta = fetch(event.request)
                        .then(resp => {
                            if(resp.ok){
                                return resp;
                            }else{
                                return fetch('img/main.jpg');
                            }
                        });
    event.respondWith(respuesta);
});