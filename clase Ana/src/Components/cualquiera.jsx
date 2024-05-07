import React from "react";
import ana from "./cualquieraDesign.module.scss"
// Para homologar es el nombre del proyecto para las clases scss
function Cualquiera(props) {
    return (
        <div className={ana.contenedor_prin}>
            <img
            className={ana.imagen} 
            src={props.imagen} 
            alt="Buenas tardes banda" />
            <div className={ana.nombre}>
                <p className={ana.main}> {props.nombre} en {props.pais}</p>
                <p className={ana.cargoE}> {props.cargo} en {props.empresa}</p>
                <p className={ana.test}> "{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Cualquiera;