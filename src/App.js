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
            <img src="epn.png" alt="empreendennial" className="icon-logo"/>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/emprendennial/">
                <img src="022-instagram.svg" alt="insta logo" className="icon-social"/>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/emprendennial">
                <img src="014-facebook.svg" alt="face logo" className="icon-social"/>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCgNnYgTlwyg1AmCp1gW_KyQ">
                <img src="049-youtube.svg" alt="youtube logo" className="icon-social"/>
              </a>
            </li>
          </ul>
        </div>
        </section>
      </nav>

      <section className="row hide-on-large-only" Style="
    margin-top: 22px;
">
  <div className="col s12 center-align">
  <img Style="display: inline;/* margin-left: 10px; */" src="022-instagram.svg" alt="insta logo" className="icon-social" />
  <img Style="display: inline;margin-left: 15px;margin-right: 15px;" src="014-facebook.svg" alt="face logo" className="icon-social" />
  <img Style="display: inline" src="049-youtube.svg" alt="youtube logo" className="icon-social" />
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
            Nuestro propósito es ayudar a empresas y a emprendedores a transformarse para crecer.
            </p>
            <p className="font-size-1">
            Contamos con una red de asesores jóvenes que trabajan de forma remota en Latinoamérica.
            </p>
            <p className="font-size-1">
            Queremos impactar positivamente en la sociedad y el medio ambiente con nuestros servicios.
            </p>
          </div>
        </section>
        </article>
      </header>


      <article className="container spacing-v">
      <section className="row">
        <div className="col s12 m6 offset-m3 center-align breack-text">
          <h4>
            Ofrecemos <b>asesorías personalizadas sin costo</b> para encontrar las soluciones que su negocio necesita.
          </h4>
        </div>
      </section>

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
                <h5 className="grey-text darken-4 font-sifonn">emprendennial</h5>
                <p className="grey-text darken-4">Negocios sostenibles, globales y adaptados a la era digital</p>
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
