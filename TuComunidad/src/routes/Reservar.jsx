import React from 'react';
import {Button} from 'react-bootstrap';

export default function Reservar(props) {
  return(
    <input type="button" value={"Reservar"} disabled={props.reservado == true} onClick={props.reservar} />
  );
    
}