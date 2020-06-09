import React from 'react';

export default ({ opisZespolu }) => {
    return (
        <>
            <section className="bg-light page-section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Nasz zespół</h2>
                            <h3 className="section-subheading text-muted">Osiągnijmy cel razem</h3>
                            <hr className="divider my-5" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {
                            opisZespolu.map(({ imie, opis, zdjecie, doswiadczenie }, index) =>
                                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                                    <div className="team-member">
                                        <img className="mx-auto rounded-circle" src={zdjecie} alt="" />
                                        <h4>{imie}</h4>
                                        <p className="text-muted">{opis}</p>
                                        <p className="text-muted"><i>{doswiadczenie}</i></p>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">
                                Jesteśmy grupą przyjaciół, rzetelnych i ambitnych prekursorów przekazywania wiedzy młodszym, nauka od najmłodszych lat była naszą pasją, którą chcemy się dzielić właśnie z Wami.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}