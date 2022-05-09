import React, { useRef,useState, useEffect } from 'react';
import Votacion from "./Votacion"

const urlVotaciones = "http://localhost:8080/votaciones/all";

export default function Votaciones(props) {
  const [votaciones, setVotaciones] = useState([]);
  useEffect(() => {
    fetch(urlVotaciones)
     .then(res =>res.json())
     .then(json => {setVotaciones(json)});
   }, []);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Votaciones</h2>
      <Votacion 
        votaciones={votaciones}
        />
    </main>
  );
}
