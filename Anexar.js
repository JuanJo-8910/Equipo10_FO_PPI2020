import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Button,Modal, ModalHeader,ModalBody, ModalFooter} from 'reactstrap';
class Anexar extends Component {
    state={
        abierto: false,
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
    }

render() {
    const modalStyles={
        position: "absolute",
        top: '50%',
        left: '60%',
        transform: 'translate(-50%, -600%)'
    }
	return (
<div className="row ">
<div className="medium-12 columns">

<form method="put">

    <header>
        <h1>Nuevo usuario</h1>
    </header>
    <div><h2>Datos del usuario</h2></div>

    <div>
        <h3>Nombre</h3>
        <p>*<input type="text" size="15" maxlength="30"  name="nombre" required="required"></input></p>
    </div>
    <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
            ¡En horabuena!
        </ModalHeader>
        <ModalBody>
            Se ha anexado correctamente un nuevo usuario
        </ModalBody>
        <ModalFooter>
            <Button onClick={this.abrirModal}><Link to="administrador">Aceptar</Link></Button>
        </ModalFooter>
    </Modal>
    <div>
        <h3>Apellido</h3>
        <p>*<input type="text" size="15" maxlength="30"  name="apellido" required="required"></input></p>
    </div>
    <div>
        <h3>Edad</h3>
        <p>*<input type="number" name="edad"  min="18" max="90"  required="required"></input></p>
    </div>
    <div>
        <h3>Documento de identidad</h3>
        <p>*<select name="documento" required="required">
            <option value="1">Tipo de documento</option>
            <option value="2">Cédula de ciudadanía</option>
            <option value="3">Cédula extranjera</option>
            <option value="4">Permiso de permanencia</option>
            </select>
            </p>
    </div>
    <div>
        <h3>Número de identidad</h3>
        <p>*<input type="number" name="ndocumento" required="required"></input></p>
    </div>
    <div>
        <h3>Usuario</h3>
        <p>*<input type="text" size="15" maxlength="30"  name="usuario" required="required"></input></p>
    </div>
    <div>
        <h3>Contraseña</h3>
        <p>*<input type="password" required="required" name="contraseña"></input></p>
    </div>

    </form>

    <div class="panel"><h2>Panel solar</h2></div>

    <div class="panel">
        <h3>Id panel</h3>
        <p>*<input type="text" size="15" maxlength="30"  name="usuario" required="required"></input></p>
    </div>
    <div class="panel">
        <h3>Tamaño panel (cm2)</h3>
        <p>*<input type="number" name="ndocumento" required="required"></input></p>
    </div>
    <div class="panel">
        <h3>Capacidad (Kv)</h3>
        <p>*<input type="number" name="ndocumento" required="required"></input></p>
    </div>
    <div class="panel">
        <h3>Cantidad de paneles</h3>
        <p>*<input type="number" name="edad"  min="1" max="100"  required="required"></input></p>
    </div>
    <div class="anexar">
        <button onClick={this.abrirModal}><img src="https://th.bing.com/th/id/OIP.BsRT2NsAaWavUCAkgw1fyQAAAA?pid=Api&rs=1" width="80" height="80" alt=""></img></button>
        <h3>Anexar</h3>
        <input type="submit" name="registrar"></input>
    </div>
    <footer>
        <h5>Smart Energy</h5>
    </footer>
</div>
</div>
);
}
}
export default Anexar;
