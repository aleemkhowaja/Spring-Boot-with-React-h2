import React from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import TimePicker from "react-time-picker";
import Reservar from "./Reservar"

registerLocale("es", es);


export default class Reservas extends React.Component {

state={
	fecha: new Date(),
	time:"0:00",
	reservado:false
}

onChange = fecha => {
	this.setState({fecha:fecha});
}
onChangeTimeHandler = time => {
    this.setState({ time });
  };
reservar (){
	let newReservado = true;
	this.setState({reservado:newReservado});
	console.log(this.state.reservado);
}
  render (){
	console.log(this.state.fecha);
	console.log(this.state.time);
	  return(
		  <>
		  	<div className='contenedor'>
			<div className='center'>
			<main style={{ padding: '1rem 0' }}>
      			<h2>Reservas</h2>
			</main>
				<p>Seleccione la fecha en la que desea reservar:</p>
				<DatePicker selected={this.state.fecha} onChange={this.onChange} locale="es" dateFormat={"dd-MM-yyyy"}/>
				<p>La fecha seleccionada ha sido: {this.state.fecha.getDate()}/{this.state.fecha.getMonth()+1}/{this.state.fecha.getFullYear()}</p>
				<TimePicker selected={this.state.time} onChange={this.onChangeTimeHandler} />
				<p>La hora seleccionada ha sido: {this.state.time}</p>
				<Reservar 
					reservado={this.state.reservado}
					reservar={this.reservar}
				/>
			</div>
			  </div>
		  </>
	  )
	}
}