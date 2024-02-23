import React from "react";
import { getDatosJSON } from "../tools";

export default function Buscador({setCoords}){

    const handleBuscarCiudad = async (e) => {
        e.preventDefault();     //Para que no se envie el form.

        const valorInput = e.target.querySelector('input').value;       //Valor del input del form.
        const API_KEY = '0a2947df9ef2b682caa476412aa8da26';
        const URL_GEO = `http://api.openweathermap.org/geo/1.0/direct?q=${valorInput}&limit=1&appid=${API_KEY}`;

        const data = await getDatosJSON(URL_GEO);

        setCoords({lat:data[0].lat,lon:data[0].lon});       //Seteo el estado de App latitud y longitud.
    }


    return(
        <div>
            <form action="submit" onSubmit={(e) => handleBuscarCiudad(e)}>
                <input type="text" placeholder="Busca una ciudad"/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}