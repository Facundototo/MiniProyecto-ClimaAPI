import React from "react";

function CardCiudad({ciudad,pais}){
    return(
        <div>
            <h2>{ciudad}</h2>
            <h4>{pais}</h4>
        </div>
    )
}

export default function ListaCiudades({opciones}){
    return(
        <>
            {opciones.map((opcion,index) => (            
                <CardCiudad 
                    name="buscar-ciudad" 
                    type="submit" 
                    key={index}
                    ciudad={opcion.name}
                    pais={opcion.country}
                />
            ))}
        </>
    )
}