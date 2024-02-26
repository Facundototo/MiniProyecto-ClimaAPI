import React, { useEffect,useState } from "react";
import { getDatosJSON,API_KEY } from "../tools";
import ListaCiudades from "./ListaCiudades";

export default function Buscador({setCoords}){

    const [opciones,setOpciones] = useState([]);        //Estado para las opciones de busqueda.
    const [valorInput,setValorInput] = useState('');        //Estado para lo que escribe el usuario, en eso se basan las opciones.

    const handleEleccionCiudad = (ciudadElegida) => {
        setCoords({     //Seteo el estado de App latitud y longitud.
            lat:ciudadElegida.lat,  
            lon:ciudadElegida.lon,
            ciudad:ciudadElegida.name       //Cree este atributo porque la api cuando rastrea las coords me tira el nombre de una localidad de esa ciudad, yo quiero que me tire el de la ciudad.
        });       
    }

    useEffect(() => {
        if(valorInput){
            async function filtrarBusqueda() {
                const URL_GEO = `http://api.openweathermap.org/geo/1.0/direct?q=${valorInput}&limit=4&appid=${API_KEY}`;  
                const data = await getDatosJSON(URL_GEO);
                
                const atrVistos = new Set();        //Con el Set chequeo que las ciudades no se repitan.
                const opcionesNoRepetidas = data.filter((opcion) => {
                    const clave = `${opcion.name}-${opcion.country}`;       //La API no se repite igual pero te busca diferentes coords dentro de la ciudad y no quiero eso.
                    if(atrVistos.has(clave)){
                        return false;
                    }else{
                        atrVistos.add(clave);
                        return true;
                    }
                });
                setOpciones(opcionesNoRepetidas);
            }
            filtrarBusqueda();
        }
    },[valorInput])

    return(
        <div>
            <input name="input-busqueda" type="text" placeholder="Busca una ciudad" onChange={(e) => setValorInput(e.target.value)}/>
            <ListaCiudades elegirCiudad={handleEleccionCiudad} opciones={opciones}/>
        </div>
    )
}