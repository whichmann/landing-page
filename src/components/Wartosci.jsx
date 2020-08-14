import React from 'react';
import { motion } from 'framer-motion';


export default () => {
    return (

      <section className="bg-light page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <motion.h2 initial={{ opacity: 0 }} animate={{opacity: 1}} className="section-heading text-uppercase">Wartości</motion.h2>
              <motion.h3 className="section-subheading text-muted">Dlaczego warto nam zaufać?</motion.h3>
              <hr className="divider my-5" />
            </div>
          </div>
          <div className="row text-center justify-content-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary icons"></i>
                <i className="fa fa-user fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Indywidualne podejście</h4>
              <p className="text-muted">Traktujemy każdego indywiudalnie.<br />Na pierwszym miejscu jesteście Wy!</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary icons"></i>
                <i className="fa fa-fire fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Pasja</h4>
              <p className="text-muted">Tworzymy zajęcia profesjonalnie oraz z pasją.<br />Wkładamy serce w każdą minutę z wami!</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary icons"></i>
                <i className="fa fa-ravelry fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Elastyczność</h4>
              <p className="text-muted">Jesteśmy otwarci na nowe propozycje.<br />Nauczanie dostosujemy do Twoich poczeb.</p>
            </div>
          </div>
        </div>
      </section>

    )
}