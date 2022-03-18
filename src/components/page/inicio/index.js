import React from 'react'
import Portada from "images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio"> 
        <div>
            <h2>
                bienvendios a FourActive la mejor tienda de zapatos que puedes encontrar
                </h2>
                </div> 
            <img src={Portada} alt=""/>
        </div>
    )
}
