import React from "react";
import './ListaCiudades.css'

function CardCiudad({onClick,opcion}){
    return(
        <div className="containerCiudad" onClick={() => onClick(opcion)}>
            <h2>{opcion.name}</h2>
            <h4>{opcion.country}</h4>
        </div>
    )
}

export default function ListaCiudades({elegirCiudad,opciones}){
    return(
        <div className="containerCiudades">
            {opciones.map((opcion,index) => (            
                <CardCiudad
                    onClick={ciudad => elegirCiudad(ciudad)}
                    key={index}
                    opcion={opcion}
                />
            ))}
        </div>
    )
}