import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*
      

      top nav
      
      
      */}
      <nav className="transparent z-depth-0">
        <section className="container">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo a-brand-logo">
            {/* <b className="font-sifonn">emprendennial</b>
            <small>asesores en red</small> */}
            <img src="emprendennial-logo.jpeg" alt="empreendennial" className="icon-logo" height="90"/>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#!">
                <img src="022-instagram.svg" alt="insta logo" className="icon-social"/>
              </a>
            </li>
            <li>
              <a href="#!">
                <img src="014-facebook.svg" alt="face logo" className="icon-social"/>
              </a>
            </li>
            <li>
              <a href="#!">
                <img src="049-youtube.svg" alt="youtube logo" className="icon-social"/>
              </a>
            </li>
          </ul>
        </div>
        </section>
      </nav>

      <section class="row hide-on-large-only" Style="
    margin-top: 22px;
">
  <div class="col s12 center-align">
  <img Style="display: inline;/* margin-left: 10px; */" src="022-instagram.svg" alt="insta logo" class="icon-social" />
  <img Style="display: inline;margin-left: 15px;margin-right: 15px;" src="014-facebook.svg" alt="face logo" class="icon-social" />
  <img Style="display: inline" src="049-youtube.svg" alt="youtube logo" class="icon-social" />
    </div>
  </section>


      <header className="App-header spacing-v">
        <article className="container">
        <section className="row">
          <div className="col s12 m6">
          <img src="/top-image.png" alt="youtube logo" className="responsive-img"/>
          </div>
          <div className="col s12 m6" style={{textAlign: "justify"}}>
            <p className="font-size-1">
            Somos una red de consultores especializados en guiar a emprendedores jóvenes con sus proyectos para que puedan transformarlos en negocios exitosos. 
            </p>
            <p className="font-size-1">
            Ofrecemos contenidos y capacitaciones gratuitas y también asesorías personalizadas con un equipo interdisciplinario de profesionales distribuido en diferentes puntos de Iberoamérica.
            </p>
          </div>
        </section>
        </article>
      </header>


      <article className="container spacing-v">
        <section className="row">
          <div className="col s12 m6">

          


  <div id="modal1" className="modal modal-fixed-footer">
    <div className="modal-content">
      <div className="row">
            <iframe title="form" src="https://arrobalewi.typeform.com/to/Nlfe2K" frameborder="0" Style="width: 100%;height: 300px;"></iframe>
      </div>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
    </div>
  </div>


            <p className="spacing-v">
              <h4>
                <b className="color-deafult">
                  Tengo un proyecto o emprendimiento
                </b>
              </h4>
              <a href="#modal1" className="modal-trigger button-click-here">¡Quisiera ser asesorado!</a>
            </p>

            <p className="spacing-v">
              <h4>
                <b className="color-deafult">
                  Quisiera colaborar con emprendedores
                </b>
              </h4>
              <a href="#modal1" className="modal-trigger button-click-here">¡Me gustaría ser asesor!</a>
            </p>
          </div>
          <div className="col s12 m6">
          <img src="/bot-image.png" alt="bot " className="responsive-img"/>
          </div>
        </section>
      </article>


      <footer className="page-footer grey lighten-5">
          <div className="container">
            <div className="row">
              <div className="col s12 m6 offset-m3 center-align">
                <h5 className="grey-text font-sifonn">emprendennial</h5>
                <p className="grey-text">somos una comunidad destinada a impactar positivamente a nivel social, 
                económico y ambiental con cada startup de la red.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container grey-text">
            © 2020 Copyright
            </div>
          </div>
        </footer>


    </div>
  );
}

export default App;
