import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="static/newlogo.svg" alt="Bulma: a modern CSS framework based on Flexbox" />
                        </a>
                        <div className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </div>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">

                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item has-text-weight-bold" id="tel">
                                <span id="caja-tel">
                                    <span className="icon" id="icontel">
                                        <i className="fas fa-phone"></i>
                                    </span>
                                    <span>
                                        341-5889498
                                    </span>
                                </span>
                            </div>
                            <a className="navbar-item has-text-weight-bold">
                                Servicios
                                <span className="sub"></span>
                            </a>
                            <a className="navbar-item has-text-weight-bold">
                                Nosotros
                                <span className="sub"></span>
                            </a>
                            <a className="navbar-item has-text-weight-bold">
                                Contacto
                                <span className="sub"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                        #icontel {
                            margin-right: 10px
                        }
                        #caja-tel {
                           
	                        padding: 5px;
	                        border: solid 2px rgba(255, 255, 255, 0.3);
	                        border-radius: 6px

                        }
                        .sub {
                            visibility: hidden;
                            position: absolute;
                            bottom: 20%;
                            left: 50%;
                            width: 2px;
                            height: 2px;
                            background-color: #2e4bdb;
                            transform: translateX(-50%);
                            transition: transform .2s linear 0s
                        }
                        a.navbar-item:hover .sub  {
                            visibility: visible;
                            transform: scaleX(20)
                        }
                        a.navbar-item:hover  {
                            color: #2e4bdb
                        }
                    `}</style>
            </nav>
        );
    }
}

export default Menu