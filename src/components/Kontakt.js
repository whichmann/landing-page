import React from 'react';
import map from './../assets/img/map-min.jpg'

export default () => {
    return (

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-heading text-uppercase padded-up">Skontaktuj się z nami!</h2>
              <hr className="divider my-4" />
              <p className="text-muted whitey contact-text">Chcesz umówić się na spotkanie? Masz pytanie dotyczące naszej oferty?<br />Skontaktuj się z nami mailowo, przez facebooka, bądź telefonicznie</p><br /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 ml-auto text-center mb-5 mb-lg-0">
              <i className="fa fa-phone fa-3x mb-3 text-muted whitey"></i>
              <div className="text-muted whitey">+48 530 466 680</div>
            </div>
            <div className="col-lg-3 mr-auto text-center mb-5 mb-lg-0 no-right-marg">
              <i className="fa fa-envelope fa-3x mb-3 text-muted whitey"></i><a className="d-block text-muted whitey" href="mailto:rozmaturzeni@gmail.com">rozmaturzeni@gmail.com</a>
            </div>
            <div className="col-lg-3 mr-auto text-center mb-5 mb-lg-0">
              <i className="fa fa-facebook fa-3x mb-3 text-muted whitey"></i><a className="d-block text-muted whitey" href="https://www.facebook.com/Rozmaturzeni-1172005829635509" rel="noopener noreferrer" target="_blank">Nasz Fanpage</a>
            </div>
          </div>
          <div className="text-muted whitey padded-up padded-down">Nasze zajęcia prowadzone są online oraz stacjonarnie w Tczewie, przy ulicy Topolowej 23. 
          W przyszłości, planujemy rozszerzyć działalność na terenie Gdańska, Gdyni, Starogardu Gdańskiego oraz Malborka.</div>
          <img className="map-dojazd" src={map} alt={"mapa dojazdu"}></img>
          <div className="padded-up"></div>
        </div>
      </section>

    )
}