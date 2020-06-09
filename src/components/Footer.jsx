import React from 'react';

export default () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <span className="copyright">Rozmaturzeni 2020</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/Rozmaturzeni-1172005829635509">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                                <address>
                                    <a href="mailto:rozmaturzeni@gmail.com">ROZMATURZENI@GMAIL.COM</a>
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}