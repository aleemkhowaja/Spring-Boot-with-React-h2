import { useState, useEffect} from 'react';
import React from 'react';
import Correspondencia from './Correspondencia';

let urlCorrespondencias="http://localhost:8080/correspondencias/all";
export default function Conserjeria(props) {
const [correspondencias, setCorrespondencias] = useState([]);

useEffect(() => {
  fetch(urlCorrespondencias)
   .then(res =>res.json())
   .then(json => {setCorrespondencias(json)})
 }, []);

  return (
    <div>
      <main style={{ padding: '1rem 0' }}>
      <h2>Conserjeria</h2>
      <Correspondencia
      correspondencias={correspondencias}
      />
      </main>
    </div>
  );


}