import React from "react";

function CardCiudad({onClick,opcion}){
    return(
        <div onClick={() => onClick(opcion)}>
            <h2>{opcion.name}</h2>
            <h4>{opcion.country}</h4>
        </div>
    )
}

export default function ListaCiudades({elegirCiudad,opciones}){
    return(
        <>
            {opciones.map((opcion,index) => (            
                <CardCiudad
                    onClick={ciudad => elegirCiudad(ciudad)}
                    key={index}
                    opcion={opcion}
                />
            ))}
        </>
    )
}