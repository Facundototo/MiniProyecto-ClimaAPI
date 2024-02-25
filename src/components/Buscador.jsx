import React, { useEffect,useState } from "react";
import { getDatosJSON,API_KEY } from "../tools";


export default function Buscador({setCoords}){

    const [opciones,setOpciones] = useState(null);
    const [valorInput,setValorInput] = useState('');

    const handleSubmitCiudad = async (e) => {
        e.preventDefault();     //Para que no se envie el form.
        const valorInput = e.target.querySelector('input').value;       //Valor del input del form.

        if(valorInput){
            const URL_GEO = `http://api.openweathermap.org/geo/1.0/direct?q=${valorInput}&limit=4&appid=${API_KEY}`;
            const data = await getDatosJSON(URL_GEO);
            setCoords({lat:data[0].lat,lon:data[0].lon});       //Seteo el estado de App latitud y longitud.
        }else{
            alert('Ingresa algo en el campo');
        }
    }

    const handleChange = (e) => {
        setValorInput(e.target.value);
    }

    useEffect(() => {

        console.log('ejecutando ' + valorInput) 

        async function filtrarBusqueda() {
            if(valorInput){
                const URL_GEO = `http://api.openweathermap.org/geo/1.0/direct?q=${valorInput}&limit=4&appid=${API_KEY}`;
                console.log(valorInput)     
                const data = await getDatosJSON(URL_GEO);
                setOpciones(data);
                console.log(opciones);      //Me quede que me tira null en la primer vuelta. debe ser algo con el useEffect.       
            }
        }

        const timerId = setTimeout(filtrarBusqueda,3000);
        
        return () => {
            console.log('limpiando ' + valorInput);
            clearTimeout(timerId);
        };

    },[valorInput])

   
        

    return(
        <div>
            <form action="submit" name="buscar-ciudad" onSubmit={(e) => handleSubmitCiudad(e)}>
                <input type="text" list="lista-ciudad" placeholder="Busca una ciudad" onChange={(e) => handleChange(e)}/>
                <datalist id="lista-ciudad">
                    
                </datalist>
                <button name="buscar-ciudad" type="submit">Buscar</button>
            </form>
        </div>
    )
}