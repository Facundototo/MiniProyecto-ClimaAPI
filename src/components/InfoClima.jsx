import React from "react";

export default function InfoClima({datos = null}){
    return(
        <section>
            <h1>{datos.ciudad}</h1>
            <h1>{datos.pais}</h1>
            <h1>{datos.main.humedad}</h1>
        </section>
    )
}