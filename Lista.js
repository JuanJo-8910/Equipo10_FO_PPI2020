import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Lista extends Component {
render() {
	return (
<div className="row ">
<div className="medium-12 columns"></div>

    <header>
        <h1>Usuarios registrados</h1>
    </header>
    <div class="img">
        <img src="/public/registroA/images/lista.png" alt=""></img>
    </div>
    <section class="registros">
        <ol class="listas">
            <li><Link to="grafica">Carlos Giraldo</Link><ul>wer345</ul></li>
            <li>Alfonso López<ul>raw874</ul></li>
            <li>María zapata<ul>tip654</ul></li>
            <li>Edwin Gil<ul>cev864</ul></li>
            <li>Mercedes Rivas<ul>tab323</ul></li>
            <li>Enrique Lozano<ul>lol471</ul></li>
            <li>Tatiana Nuñes<ul>sub675</ul></li>
        </ol>
    </section>
    <footer>
        <h4>Smart Energy</h4>
    </footer>
</div>
    );
}
}
export default Lista;