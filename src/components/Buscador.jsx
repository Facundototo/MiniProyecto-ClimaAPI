import React, { useEffect,useState } from "react";
import { getDatosJSON,API_KEY } from "../tools";
import ListaCiudades from "./ListaCiudades";

export default function Buscador({setCoords}){

    const [opciones,setOpciones] = useState([]);
    const [valorInput,setValorInput] = useState('');

    const handleSubmitCiudad = async (e) => {
        e.preventDefault();     //Para que no se envie el form.

        valorBoton = e.target.querySelector('button').value;    //Hacer un div que tenga por separado el pais asi es mas facil, mejor hacerlo en otro componente.

        const URL_GEO = `http://api.openweathermap.org/geo/1.0/direct?q=${valorInput}&limit=5&appid=${API_KEY}`;
        const data = await getDatosJSON(URL_GEO);
        setCoords({lat:data[0].lat,lon:data[0].lon});       //Seteo el estado de App latitud y longitud.
    }

    useEffect(() => {
        async function filtrarBusqueda() {
            if(valorInput){
                const URL_GEO = `http://api.openweathermap.org/geo/1.0/direct?q=${valorInput}&limit=4&appid=${API_KEY}`;  
                const data = await getDatosJSON(URL_GEO);
                setOpciones(data);
            }
        }
        filtrarBusqueda();
    },[valorInput])

    return(
        <div>
            <form action="submit" name="buscar-ciudad" onSubmit={(e) => handleSubmitCiudad(e)}>
                <input type="text" list="lista-ciudad" placeholder="Busca una ciudad" onChange={(e) => setValorInput(e.target.value)}/>
                <ListaCiudades opciones={opciones}/>
            </form>
        </div>
    )
}