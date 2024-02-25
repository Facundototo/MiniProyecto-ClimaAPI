import {REACT_API_KEY} from '../key.js'

export const API_KEY = REACT_API_KEY;

export function getDatosObjeto(json){       //Arme un objeto que guarda solo los datos que me interesan de la API para despues mostrarlos.
    console.log(json);
    return {                
        ciudad: json.name,
        pais: json.sys.country,
        clima: {
            main: json.weather[0].main,
            descripcion: json.weather[0].description
        },
        main:{
            temp: {
                normal: `${json.main.temp}C°`,
                max: `${json.main.temp_max}C°`,
                min: `${json.main.temp_min}C°`,
            },
            sensacion: `${json.main.feels_like}C°`,
            humedad: `${json.main.humidity}%`,
            velocidadViento: `${json.wind.speed} m/s`,
            nubes: `${json.clouds.all}%`
        }
    }
}

export const getDatosJSON = (URL) => {      //Retorna el objeto que me dio la API. Este se usa tanto para GEOCODING API y CURRENT WEATHER API.
    return fetch(URL)
        .then(res => res.json())
        .then(json => {return json})
        .catch(err => console.error(err));
}