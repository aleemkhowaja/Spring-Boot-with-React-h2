import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function Correspondecia(props) {


  return(
    <div>
    {props.correspondencias.map((elemento) => {                   
       return (
         <div>
        <input type="text" size={40} value={elemento.texto}/>
        <input type="button" value="Recibida" onClick={() => {
          let urlCorrespondencia = "http://localhost:8080/correspondencias/deleteCorrespondenciaById/"+elemento.idcorrespondencia;

          fetch(urlCorrespondencia, {
            method:'DELETE'
          })
          window.location.reload(true)
        }} />
        </div>
       ) 
    })} 
        <p>
        <Link to="/TuComunidad">TuComunidad</Link> 
        </p>
</div>
  );
    
}