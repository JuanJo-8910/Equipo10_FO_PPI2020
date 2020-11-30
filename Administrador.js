import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Administrador extends Component {
render() {
	return (
		<div className="row ">
	<div className="medium-12 columns">

               <header>
                    <h1>Administradores</h1>
               </header>
                    <section class="registro">
                    <div>
                    <h1>Registros del usuario</h1>
                    </div>
                    <div>
                    <button><Link to="lista"><img src="../imagesA/registro.png" width="300" height="200" alt=""></img></Link>
                    </button>
                    </div>
                    <section class="anexo">
                    <div>
                    <h1>Anexar nuevo usuario</h1>
                    </div>
                    <div>
                    <button><Link to="anexar"><img src="../imagesA/anexo.png" width="300" height="200" alt=""></img></Link>
                    </button>
                    </div>
                    <footer class="footer">
                    <div>
                    <h4>Smart Energy</h4>
                    </div>
                    </footer>
                    </section>
          </section>
     </div> 
     </div>
	);
}
}
export default Administrador;