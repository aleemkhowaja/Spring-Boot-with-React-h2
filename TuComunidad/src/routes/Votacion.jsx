import React, {useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function Votacion(props) {

  const [votacion, setVotacion] = useState([]);
  const [title, setTitle] = useState('');

  console.log(title)

  let urlByTitulo = "http://localhost:8080/votaciones/votacionesBytitulo/"+title;

  

  useEffect(() => {
    fetch(urlByTitulo)
    .then(res =>res.json())
    .then(json => {setVotacion(json)})
  }, []);

  async function Submit(){
    for(let i=0; i<props.votaciones.length; i++){
      if(title == props.votaciones[i].titulo){
        await fetch(urlByTitulo)
          .then(res =>res.json())
          .then(json => {setVotacion(json)})
      }
    }
  }

  function votoFavor(){

    let urlVotoFavor = "http://localhost:8080/votaciones/aumentarVotosFavorById/"+votacion[0].idvotaciones+"/aumentarVotosFavor";

    fetch(urlVotoFavor, {
      method:'POST'
    })
    console.log(votacion[0])
    console.log(votacion[0].idvotaciones)
  }

  function votoContra(){
    let urlVotoContra = "http://localhost:8080/votaciones/aumentarVotosContraById/"+votacion[0].idvotaciones+"/aumentarVotosContra";
    fetch(urlVotoContra, {
      method:'POST'
    })  
  }


  if(votacion[0] == null){
    return(  
      <div>
        
        <p>Seleccione una votación por su título:</p>
        <input onChange={event => setTitle(event.target.value)} type="textfield" style={{width: '500px'} }/>
        <button onClick={Submit}>Seleccionar</button>
          {props.votaciones.map(elemento => {          
             return (
              <div>
                <ul><li><p>Titulo: {elemento.titulo}, Descripción: {elemento.descripcion}</p></li></ul>
              </div>
             ) 
          })} 
      </div>
  
    );
  }else{    
    return(  
      <div> 
            <p>{votacion[0].descripcion}</p>
            <p>Votos a Favor: {votacion[0].numeroVotosFavor}</p><button onClick={votoFavor}>Voto Favor</button>
            <p>Votos en Contra {votacion[0].numeroVotosContra}</p><button onClick={votoContra}>Voto Contra</button>
            <p>
            <Link to="/TuComunidad">TuComunidad</Link> 
            </p>
      </div>
  
    );
  }
}
