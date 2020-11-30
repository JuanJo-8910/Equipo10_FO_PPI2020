import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
class Grafica extends Component {
render() {
    const data={
        labels: ['Abril','Mayo','Junio','Julio','Agosto','Septiembre'],
        datasets:[{
            label: 'Kv (Kilovatios)',
            backgroundColor:'rgba(0,255,0,1)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor:'rgba(0,255,0,0.2)',
            hoverBorderColor: '#FFFF00',
            data:[5000, 3500, 4350, 5150, 2450, 6000]
        }]
    };
    const opciones={
        maintainAspectRatio: false,
        responsive: true
    }

	return (
<div className="row ">
<div className="medium-12 columns">

<header>
        <h1>Juan Carlos Giraldo</h1>
</header>
    <h5>wer345</h5>
    <div class='gra'>
        <h5>Energía almacenada en (Kv) por mes</h5>
        <Bar data={data} options={opciones}></Bar>

    </div>
    <footer>
        <div>
        <h5>Smart Energy</h5>
        </div>
    </footer>
</div>
</div>
    );
}
}
export default Grafica;