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
            <img src="emprendennial-logo.png" alt="empreendennial" className="icon-logo"/>
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

    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/emprendennial/">
    <img Style="display: inline;/* margin-left: 10px; */" src="022-instagram.svg" alt="insta logo" className="icon-social" />
    </a>

    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/emprendennial">
    <img Style="display: inline;margin-left: 15px;margin-right: 15px;" src="014-facebook.svg" alt="face logo" className="icon-social" />
    </a>

    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCgNnYgTlwyg1AmCp1gW_KyQ">
    <img Style="display: inline" src="049-youtube.svg" alt="youtube logo" className="icon-social" />
    </a>

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
              <b>emprendennial es una plataforma online destinada a facilitar pasantías universitarias internacionales para que los estudiantes puedan trabajar de forma remota contribuyendo con el crecimiento de empresas y emprendedores.</b>
            </p>
            <p className="font-size-1">
            Ofrecemos pasantias que promueven igualdad de oportunidades e inclusión para los jóvenes que apuntan a desarrollarse en un ámbito laboral multicultural. 
            </p>
            <p className="font-size-1">
            Favorecemos el crecimiento económico de las empresas y emprendedores a través de una solución accesible para que puedan adaptar sus negocios y optimizar sus procesos a la era digital. Nuestra red de pasantes aportará diversidad y actitud emprendedora a sus equipos. Con el trabajo remoto internacional, se favorece la apertura de mercados y se estimulan metodologías ágiles y colaborativas, aumentando la competitividad.
            </p>
            <p className="font-size-1">
            A través del teletrabajo podemos contribuir positivamente con la naturaleza disminuyendo la contaminación y generando conciencia medioambiental.  
            </p>
            <p className="font-size-1">
            De esta manera nos comprometemos con un triple impacto que contribuya con la generación de valor en nuestro ámbito de influencia.
            </p>
          </div>
        </section>
        </article>
      </header>


      <article className="container spacing-v">
      <section className="row">
        <div className="col s12 m6 offset-m3 center-align breack-text">
          <h4>
          Guiados por la innovación, buscamos que quienes participen de nuestra iniciativa sean parte de este cambio del modelo de trabajo tradicional y puedan <b Style="color:#73bb51 !important;">transformarse para crecer.</b>
          </h4>
        </div>
      </section>

        <section className="row">
          <div className="col s12 m6">

          


  {/* <div id="!" className="modal modal-fixed-footer">
    <div className="modal-content">
      <div className="row">
            <iframe id="modal-iframe" src="https://forms.gle/zSQcbhTygWNhWwJs6/?output=embed" title="form" frameborder="0" Style="width: 100%;height: 300px;"></iframe>
      </div>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
    </div>
  </div> */}


            <div className="spacing-v">
              <h4>
                <b className="color-deafult">
                  Tengo una empresa
                </b>
              </h4>
              <a
              onClick={() => {window.open("https://forms.gle/zSQcbhTygWNhWwJs6", "", "width=600,height=800")}}
              href="#!"
              className="modal-trigger button-click-here">Busco pasantes</a>
            </div>

            <div className="spacing-v">
              <h4>
                <b className="color-deafult">
                  Soy estudiante
                </b>
              </h4>
              <a
              onClick={() => {window.open("https://forms.gle/KzHC4ta6JiYs5VPq5 ", "", "width=600,height=800")}}
               href="#!" className="modal-trigger button-click-here">Busco una pasantía</a>
            </div>
          </div>
          <div className="col s12 m6">
          <img src="/bot-image.png" alt="bot " className="responsive-img"/>
          </div>
        </section>
      </article>



      <section className="row">
        <div className="col s12 center-align spacing-v">
          <a onClick={() => {window.open("https://forms.gle/fQN1GietpJgAcQgv9", "", "width=600,height=800")}}
               href="#!" className="modal-trigger button-click-here">¡Hacer una consulta!</a>
        </div>
      </section>


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
