import React from 'react';
import closeSvg from './../assets/img/close-icon.svg';

export default ({ portfolioUslug }) => {
  return (
    <>
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Usługi</h2>
              <h3 className="section-subheading text-muted">Jaka jest nasza recepta na sukces?<br /><u>Kliknij w zdjęcie by dowiedzieć się wiecej</u></h3>
              <hr className="divider my-6" />
            </div>
          </div>
          <div className="row justify-content-center">
            {
              portfolioUslug && portfolioUslug.map(({ tytul, opis, zdjecie }, index) =>
                <div className="col-md-4 col-sm-6 portfolio-item" key={index}>
                  <a className="portfolio-link" data-toggle="modal" href={`#portfolioModal${index}`}>
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={zdjecie} alt="portfolio_img" />
                  </a>
                  <div className="portfolio-caption">
                    <h5 className="text-uppercase">{tytul}</h5>
                    <p className="text-muted">{opis}</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>

      </section>

      {portfolioUslug.map(({ tytul, cena, zdjecie, opis, dluzszyOpis }, index) =>
        <div className="portfolio-modal modal fade" id={`portfolioModal${index}`} key={index} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img width="42px" src={closeSvg} alt="Zamknij okno" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">

                      <h2 className="text-uppercase">{tytul}</h2>
                      <p className="item-intro text-muted">{opis}</p>
                      <p className="item-intro text-muted">Cena: {cena} zł/zajęcia</p>

                      <div className="row">
                        <div className="col-md-8 col-sm-12 text-justify">
                          <p>{dluzszyOpis}</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <img className="img-fluid d-block mx-auto img-little" src={zdjecie} alt={tytul} /></div>
                      </div>


                      <button className="btn btn-primary" data-dismiss="modal" type="button"><i className="fa fa-times mr-1"></i>Zamknij</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}