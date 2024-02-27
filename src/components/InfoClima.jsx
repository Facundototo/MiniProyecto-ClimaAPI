import React from "react";
import './InfoClima.css'

export default function InfoClima({datos = null}){
    return(
        <section className="seccionInformacion">

            <article className="infoNombre">
                <h2>{datos.ciudad}</h2>
                <h4>{datos.pais}</h4>
            </article>

            <article className="infoDes">
                <p>{datos.clima.main} - {datos.clima.descripcion}</p>
            </article>

            <div className="infoMet">
                <article className="infoTemp">
                    <h2>{datos.main.temp.normal}</h2>
                    <p>{datos.main.temp.min} - {datos.main.temp.max}</p>
                    <p>Sensacion {datos.main.temp.sensacion}</p>
                </article>


                <div className="infoDatos">
                    <article className="infoHumedad">
                        <p>Humedad - {datos.main.humedad}</p>
                    </article>
                    <article className="infoViento">
                        <p>Viento - {datos.main.velocidadViento}</p>
                    </article>
                    <article className="infoNubes">
                        <p>Nubes - {datos.main.nubes}</p>
                    </article>
                </div>

            </div>
                
        </section>
    )
}