window.addEventListener('load', ()=> {
    let lon
    let lat
    let apikey="7a1914c7d87964b688e7e99d661b81ea"

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
    
    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('Viento-velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion =>{
           // console.log(posicion.coords.latitude);
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude
           console.log(lon);
           console.log(lat);

           const url= `https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&lat=${lat}&lon=${lon}&appid=${apikey}`
           //console.log(url);

           //peticiones
           fetch(url)
           .then( response => {return response.json() })
           .then( datos =>{
            console.log(datos)
            let temp = Math.round(datos.main.temp)
            temperaturaValor.textContent = `${temp} °C`
            console.log(datos.weather[0].description)
            let desc = datos.weather[0].description
            temperaturaDescripcion.textContent = desc.toUpperCase()

            console.log(datos.name)
            ubicacion.textContent = datos.name

            console.log(datos.wind.speed)
            vientoVelocidad.textContent = `${datos.wind.speed} m/s`

            console.log(datos.weather[0].main)
            switch (datos.weather[0].main){
                case 'Clear':
                    iconoAnimado.src = 'assets/calor.png'
                    console.log("limpio")
                break;
                case 'Cloud':
                    iconoAnimado.src = 'assets/nieve.png'
                    console.log("limpio")
                break;
                case 'Rain':
                    iconoAnimado.src = 'assets/lluvia.png'
                    console.log("limpio")
                break;
            }

           })
           .catch( error =>{
            console.log(error)
           })
        })
    }
})