import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Bienvenida extends Component {
    render() {
	return (
		<div className="row ">
	<div className="medium-12 columns">

        <header class="header">
        <div class="divh1header">
            <h1 class="div1header__h1">
                <img class="Imagen_menu" src="../images/Smart Energy2.png" width="100px" height="100px"></img>Smart Energy
            </h1>
        </div>
        <nav class="menu_menu">
        <div class="divmenu">
            <ul class="menu">
                <li class="menu__items"><Link class="menu_link" to="inicio">Iniciar Sesion</Link></li>
                <li class="menu__items"><a class="menu_link" href="#quees-section">¿Qué es?</a></li>
                <li class="menu__items"><a class="menu_link" href="#Beneficios">Beneficios</a></li>
                <li class="menu__items"><a class="menu_link" href="#Nosotros">Nosotros</a></li>
                <li class="menu__items"><a class="menu_link" href="#contacto--section">Contáctenos</a></li>
            </ul>
        </div>
        </nav>
    </header>
    <section class="nombre">
        <div class="nombre-texto">
            <h2 class="nombre__titulo2">Energía solar para tu empresa u hogar</h2>
        </div>
        <div class="nombreimg">
            <img class="nombre-img__1 nombreimg-area" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmp973NvgwKwSmfiaO94JkfT82JGqMy_h5Ow&usqp=d"></img>
        </div>
        <div class="vacio"></div>
    </section>
    <section class="Nombre_significado_section">
        <article class="nombre_box">
        <div class="nombre_significado__card">
        <img class="nombre_significado_img" src="https://www.metropol.gov.co/ambiental/PublishingImages/Paginas/Consumo-sostenible/Energias-Renovables/energias-renovables.jpg"></img> 
        </div>
        </article>
    </section>
    <section class="quees-proyecto" id="quees-section">
        <div class="container">
            <div class="left-1 left-1--quees">
                <h1 class="quees__titulo1 quees__titulo1--proyecto">¿Qué es?</h1>
                <p class="quees__parrafo">
                    Smart Energy es un aplicativo web, en el cual directivas de las empresas o personas del común requieran
                    el servicio de energía solar en su empresa u hogar, puedan analizar y mantenerse al tanto de todo lo que pasa 
                    con su energía; El servicio le ofrece un panel solar y la información necesaria para ingresar a la página, ya que
                    en esta se podran garantizar todas las estádisticas, ya sean de cuanta energía recoge el panel en el día, cuanta consume
                    la empresa u hogar, etc. 

                </p>
            </div>
            <div class="right-1 right-1--quees">
                <img class="container__img" src="https://www.ecoticias.com/userfiles/extra/GGBZ_94.jpg"></img>
            </div>
        </div>
        <div class="container" id="Beneficios">
            <div class="left-1 left-1--Beneficios">
                <img class="container__img" src="https://www.cambio16.com/wp-content/uploads/2018/05/REnovables.jpg"></img>
            </div>
            <div class="right-1 right-1--Beneficios">
                <h1 class="quees__titulo1 quees__titulo1--beneficios">
                    Beneficios.
                </h1>
                <h2 class="quees__titulo2 quees__titulo2--beneficios">
                    Energías renovables.
                </h2>
                <img class="img-right__beneficios" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiFzWgqU7nSgGH2puu_y52S1a3YARKN8t3gg&usqp=CAU" width="400" height="300"></img>
            </div>
        </div>
        <div class="container">
            <div class="left-1 left-1--Beneficios2">
                <ul class="lista__Beneficios">
                    <li class="Beneficios-items">
                        <img class="viñetaimg1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7sf8oVJ79apmcBxusXu2NZAOF49UGG24utQ&usqp=CAU"></img>  Ayudas al medio ambiente.
                    </li>
                    <li class="Beneficios-items">
                        <img class="viñetaimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7sf8oVJ79apmcBxusXu2NZAOF49UGG24utQ&usqp=CAU"></img> Disminución de la energía por medio de combustibles fósiles.
                    </li>
                    <li class="Beneficios-items">
                        <img class="viñetaimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7sf8oVJ79apmcBxusXu2NZAOF49UGG24utQ&usqp=CAU"></img> Ahorros económicos
                    </li>
                </ul>
            </div>
            <div class="right-1 right-1--Beneficios2">
                <ul class="lista__Beneficios">
                    <li class="Beneficios-items">
                        <img class="viñetaimg2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7sf8oVJ79apmcBxusXu2NZAOF49UGG24utQ&usqp=CAU"></img> Análisis y estádisticas controladas por usted mismo.
                    </li>
                    <li class="Beneficios-items">
                        <img class="viñetaimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7sf8oVJ79apmcBxusXu2NZAOF49UGG24utQ&usqp=CAU"></img> Se evitaría muchos problemas de salud.
                    </li>
                    <li class="Beneficios-items">
                        <img class="viñetaimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7sf8oVJ79apmcBxusXu2NZAOF49UGG24utQ&usqp=CAU"></img> Mejoras tecnólogicas e integración de la quinta revolución industrial.
                    </li>
                </ul>
            </div>
    </div>
    </section>
    <header class="Titulonosotros">
        <h1 class="Titulonosotros_h1">Nosotros</h1>
    </header>
    <section class="Nosotros--us" id="Nosotros">
        <div class="container-us container--nosotros">
            <div class="left-us left-1--nosotros3">
                <div class="infonosotros">
                    <div class="img-box">
                        <img class="containernosotros__img1" src="https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg"></img>
                    </div>
                    <div class="contenido">
                        <h2 class="contenido__titulo">
                            Johan David Murillo Ossa
                        </h2>
                        <h3 class="titulo-h3__nosotros">I.E. Federico Ozanam</h3>
                        <ul class="lista__nosotros">
                            <li class="items__nosotros">
                                Programador.
                            </li>
                            <li class="items__nosotros">
                                Documentador.
                            </li>
                            <li class="items__nosotros">
                                Diseñador.
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        <div class="container-us container--nosotros">
            <div class="right-us right-1--nosotros2">
                <div class="infonosotros">
                    <div class="img-box">
                        <img class="containernosotros__img2" src="https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg"></img>
                    </div>
                    <div class="contenido">
                        <h2 class="contenido__titulo">
                            Juan José Giraldo Molina.
                        </h2>
                        <h3 class="titulo-h3__nosotros">I.E. Federico Ozanam</h3>
                    <ul class="lista__nosotros">
                        <li class="items__nosotros">
                            Lider.
                        </li>
                        <li class="items__nosotros">
                            Programador.
                        </li>
                        <li class="items__nosotros">
                            Documentador.
                        </li>
                        <li class="items__nosotros">
                            Diseñador.
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-us container--nosotros">
            <div class="left-us left-1--nosotros3">
                <div class="infonosotros">
                    <div class="img-box">
                        <img class="containernosotros__img1" src="https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg">

                        </img>
                    </div>
                    <div class="contenido">
                        <h2 class="contenido__titulo">
                            Felipe Collante Rivera
                        </h2>
                        <h3 class="titulo-h3__nosotros">I.E. Federico Ozanam</h3>
                        <ul class="lista__nosotros">
                            <li class="items__nosotros">
                                Programador.
                            </li>
                            <li class="items__nosotros">
                                Documentador.
                            </li>
                            <li class="items__nosotros">
                                Diseñador.
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div class="container-us container--nosotros">
                <div class="left-us left-1--nosotros3">
                    <div class="infonosotros">
                        <div class="img-box">
                            <img class="containernosotros__img1" src="https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg"></img>
                        </div>
                        <div class="contenido">
                            <h2 class="contenido__titulo">
                                Santiago Osorio Zuleta
                            </h2>
                            <h3 class="titulo-h3__nosotros">I.E. Federico Ozanam</h3>
                            <ul class="lista__nosotros">
                                <li class="items__nosotros">
                                    Programador.
                                </li>
                                <li class="items__nosotros">
                                    Documentador.
                                </li>
                                <li class="items__nosotros">
                                    Diseñador.
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="container-us container--nosotros">
                    <div class="right-us right-1--nosotros2">
                        <div class="infonosotros">
                            <div class="img-box">
                                <img class="containernosotros__img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ-N3xCWZ34W7fdX17PcmONyOuB2lA-_li9Q&usqp=CAU"></img>
                            </div>
                            <div class="contenido">
                                <ul class="lista__nosotros">
                                <p class="info">
                                    Nosotros estamos buscando la manera de potenciar los paneles solares y 
                                    ayudar al medio ambiente, impulsando el consumo de energía solar en las empresas, 
                                    instalaremos paneles solares en una zona abierta en Medellín donde se pueda recoger 
                                    bastante energía para ser llevada a las empresas por medio de baterias. 
                                </p>
                                </ul>
                            </div>
                        </div>
                    </div> 

    <section/>
    <section class="contactenos" id="contacto--section">
        <div class="container container--contacto">
            <div class="left-1 left-1--contacto">
                <h1 class="quees__titulo1 quees__titulo1--contacto">
                    Contacto.
                </h1>
                <div class="iconos-contacto">
                    <i class="fas fa-phone-alt icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">3103228042-5887092</h3>
                </div>
                <div class="iconos-contacto">
                    <i class="fab fa-facebook icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">Smart Energy</h3>
                </div>
                <div class="iconos-contacto">
                    <i class="fab fa-instagram icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">@Smart_Energy</h3>
                </div>
                <div class="iconos-contacto">
                    <i class="fas fa-envelope icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">SmartEnergy@gmail.com</h3>
                </div>
                <div class="iconos-contacto">
                    <i class="fas fa-clock icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">Lunes a viernes de 8am a 10pm</h3>
                </div>
            </div>
            <div class="right-1 right-1--contacto">
                <img class="img-contacto" src="https://oroinformacion.com/wp-content/uploads/2019/04/paneles-solares-fotovoltaicos.jpg"></img>


            </div>
        </div>
    </section>
        </div>
    </section>
    <footer class="footer" id="footer">
            <div class="container-footer">
                <h4>Smart Energy</h4>
            </div>
    </footer>

            </div>
        </div>  
        );
    }
}
export default Bienvenida;