import { useEffect, useState } from 'react';
import { getDatosJSON,getDatosObjeto,API_KEY } from './tools';
import './App.css'
import Buscador from './components/Buscador';
import InfoClima from './components/InfoClima';

export default function App() {

  const [coords,setCoords] = useState({lat:0,lon:0});   //Estado para usar el useEffect para ver si cambio la latitud y longitud.
  const [datos,setDatos] = useState(null);

  useEffect(() => {
    const setData = async () => {
        const URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=es`
      
        const data = await getDatosJSON(URL_WEATHER);   //Funcion de tools.js que hace el fetch y retorna un Objeto.
        setDatos(getDatosObjeto(data));   //Funcion de tools.js que retorna un objeto con los datos que necesito de la API.
    }

    if(coords.lat && coords.lon){setData()}   //El useEffect(), como se llama al inicio, en ese caso no quiero que se llame a setData().

  },[coords.lat,coords.lon]);  

  return (
    <>
      <Buscador setCoords={setCoords}/> 
      {(datos)?<InfoClima datos={datos}/>:null} 
    </>
  )
}
