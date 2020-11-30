import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Usuario extends Component {
    render() {
	return (
		<div className="row ">
	<div className="medium-12 columns">
    
    <header>
        <h1>Bienvenido</h1>
    </header>
    <div class="container">
        <div class="card-container">
            <div class="headerM">
                
                    <img src="../imagesM/Energia Recolectada.png" width="100" height="100" alt=""></img>
                
                <h2>
                    Energia Recolectada por el Panel Solar
                </h2>
                <h4>Por la Empresa</h4>
            </div>

            <div class="descripcion">
                <p></p>
                <img src="" alt=""></img>
                <div class="social">
                    <a href=""></a>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="card-container">
            <div class="headerM">
                
                    <img src="../imagesM/Empresa.png" width="100" height="100" alt=""></img>
                
                <h2>
                    Energía Invertida en la Empresa
                </h2>
                <h4>Por la Empresa</h4>
            </div>

            <div class="descripcion">
                <p></p>
                <img src="" alt=""></img>
                <div class="social">
                    <a href=""></a>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="card-container">
            <div class="headerM">
                
                <img src="../imagesM/Factura.png" width="100" height="100" alt=""></img>
                
                <h2>
                    Comparación con la Factura
                </h2>
                <h4></h4>
            </div>

            <div class="descripcion">
                <p></p>
                <img src="" alt=""></img>
                <div class="social">
                    <a href=""></a>
                </div>
            </div>

        </div>

    </div>


    <div class="container">
        <div class="card-container">
            <div class="headerM">
                
                    <img src="../imagesG/panelsolar.jpg" width="200px" ></img>
                
                <h2>
                    Información del Panel
                </h2>
                <h4>Por la Empresa</h4>
            </div>

            <div class="descripcion">
                <p>Tamaño: 100 cms</p>
                <p>Capacidad: 10 kwh</p>
                <p>número de paneles: 200</p>
                <img src="" alt=""></img>
                <div class="social">
                    <a href=""></a>
                </div>
            </div>
        </div>
    </div>


    <footer>
        <h5>Smart Energy</h5>
    </footer>

    </div> 
    </div>
	);
}
}
export default Usuario;