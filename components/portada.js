import React, { Component } from 'react'
import Menu from './menu';

class Portada extends Component {

    constructor(props) {
        super(props);
        this.portada = React.createRef();
        this.tria = React.createRef()
    }

    componentDidMount() {
        var anchoPortada = this.portada.current.clientWidth;
        var altoPortada = this.portada.current.clientHeight;
        var altoTria = altoPortada / 5;
        this.tria.current.style.borderLeftWidth = `${anchoPortada}px`;
        this.tria.current.style.borderTopWidth = `${altoTria}px`;
        window.onresize = () => {
            anchoPortada = this.portada.current.clientWidth;
            altoPortada = this.portada.current.clientHeight;
            altoTria = altoPortada / 5;
            this.tria.current.style.borderLeftWidth = `${anchoPortada}px`;
            this.tria.current.style.borderTopWidth = `${altoTria}px`
        }

    }

    render() {
        return (
            <section id="portada" ref={this.portada}>
                <Menu></Menu>
                <div id="caja">
                    <p className="title has-text-white has-text-weight-light has-text-centered is-1 family2">MECÁNICA AUTOMOTRIZ <span className="micolor1 has-text-weight-bold">PROFESIONAL</span></p>
                    <p className="subtitle has-text-white has-text-weight-light is-4 has-text-centered">CENTRO INTEGRAL DE REPARACIÓN Y MANTENIMIENTO DE VEHÍCULOS</p>
                    <a href="#" className="button is-medium is-primary has-text-weight-bold">Saber Más</a>
                </div>
                <div id="tri-1" ref={this.tria}></div>
                <style jsx>{`
                    #portada {
                        position: relative;
                        height: 600px;
                        width: 100%;
                        background-image: url("static/portada.jpg");
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: cover
                        
                    }
                    #caja {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        background-color: rgba(50, 46, 56, 0.6);
                        padding: 0px 20px 0px 20px
                    }
                    #tri-1 {
                        position: absolute;
                        bottom: 0;
                        width: 0px;
                        height: 0px;
                        border-top: 0px solid transparent;
                        border-right: 0px solid #ffffff;
                        border-bottom: 0px solid transparent;
                        border-left: 0px solid #ffffff
                    }
                    @media only screen and (max-width:768px) {
                        #portada {
                            height: 100vh
                        }
                    }
                    `}</style>
            </section>
        );
    }
}

export default Portada