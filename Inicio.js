import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Inicio extends Component {
    render() {
	return (
		<div className="row ">
	<div className="medium-12 columns">


    <header>
        <h1>¿Quién desea ingresar?</h1>
    </header>
    <div  class="boton1">
        <button><Link to="administrador">Administrador</Link></button>
    </div>
    <div class="boton2">
        <button><Link to="usuario">Usuario</Link></button>
    </div>
    <footer>
        <h4>Smart Energy</h4>
    </footer>



    </div>
    </div>  
        );
    }
}
export default Inicio;