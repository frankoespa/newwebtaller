import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <img src="static/newlogo.svg" alt="Mecánica Esparza"/>
                            <p className="has-text-white has-text-weight-light has-text-centered">Centro integral de reparación y mantenimiento de vehículos</p>
                            <p className="has-text-white has-text-weight-light has-text-centered">Lamadrid 2424</p>
                            <p className="has-text-white has-text-weight-light has-text-centered">(341) 155889498</p>
                            <p className="has-text-white has-text-weight-light has-text-centered">(341) 4610836</p>
                            <p className="has-text-white has-text-weight-light has-text-centered">Rosario (Santa Fe)</p>
                            
                        </div>
                        <div className="column has-text-centered">
                            <p className="has-text-white has-text-weight-light has-text-centered">Seguinos en facebook</p>
                            <a href="https://www.facebook.com/mecanicaLResparza">
                                <i className="fab fa-facebook has-text-white"></i>
                            </a>
                        </div>
                        <div className="column">

                        </div>
                    </div>
                </div>
                <style jsx>{`
                    img {
                        width: 10rem
                    }
                    footer {
                        padding: 2rem 1.5rem 
                    }
                    i {
                        font-size: 2rem
                    }
                    `}</style>
            </footer>
        );
    }
}

export default Footer;