import React, { Component } from 'react';

class Servicios extends Component {
    render() {
        return (
            <section className="container">
                <div className="columns is-multiline is-centered">
                    <div className="column has-text-centered is-3">
                        <div className="box">
                            <img src="static/icon-freno.svg" alt="frenos" />
                            <p className="title is-5 has-text-weight-bold">FRENOS</p>
                        </div>
                    </div>
                    <div className="column has-text-centered is-3">
                        <div className="box">
                            <img src="static/icon-mec.svg" alt="frenos" />
                            <p className="title is-5 has-text-weight-bold">GENERAL</p>
                        </div>
                    </div>
                    <div className="column has-text-centered is-3">
                        <div className="box">
                            <img src="static/icon-mant.svg" alt="frenos" />
                            <p className="title is-5 has-text-weight-bold">MANTENIMIENTO</p>
                        </div>
                    </div>
                    <div className="column has-text-centered is-3">
                        <div className="box">
                            <img src="static/icon-motor.svg" alt="frenos" />
                            <p className="title is-5 has-text-weight-bold">MOTOR</p>
                        </div>
                    </div>
                    <div className="column has-text-centered is-3">
                        <div className="box">
                            <img src="static/icon-oil.svg" alt="frenos" />
                            <p className="title is-5 has-text-weight-bold">ACEITE Y FILTROS</p>
                        </div>
                    </div>
                    <div className="column has-text-centered is-3">
                        <div className="box">
                            <img src="static/icon-pc.svg" alt="frenos" />
                            <p className="title is-5 has-text-weight-bold">DIAGNÓSIS</p>
                        </div>
                    </div>
                    <div className="column has-text-centered is-3">
                        <div className="box">
                            <img src="static/icon-pre.svg" alt="frenos" />
                            <p className="title is-5 has-text-weight-bold">PRE ITV</p>
                        </div>
                    </div>
                    <div className="column has-text-centered is-3">
                        <div className="box">
                            <img src="static/icon-susp.svg" alt="frenos" />
                            <p className="title is-5 has-text-weight-bold">SUSPENSIÓN</p>
                        </div>
                    </div>
                    <div className="column has-text-centered is-3">
                        <div className="box">
                            <img src="static/icon-trans.svg" alt="frenos" />
                            <p className="title is-5 has-text-weight-bold">TRANSMISIÓN</p>
                        </div>
                    </div>

                </div>
                <style jsx>{`
                        img {
                            width: 5rem
                        }
                        
                    `}</style>
            </section>
        );
    }
}

export default Servicios;