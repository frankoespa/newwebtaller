import React, { Component } from 'react'

class Nosotros extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h2 className="title is-2 has-text-weight-normal has-text-centered family2">¿Quiénes <span className="has-text-weight-bold micolor1">Somos</span>?</h2>
                    <div className="columns is-multiline is-centered">
                        <div className="column is-12-tablet is-8-desktop">
                            <p className="is-size-4 has-text-weight-light has-text-centered-touch">Somos una empresa especializada en servicios de mecánica integral automotriz desde hace 30 años, contando con un equipo de profesionales experimentados, equipamiento y tecnología de vanguardia</p>
                            <p className="is-size-4 has-text-weight-light has-text-centered-touch">Nuestro personal se encuentra siempre en constante capacitación, manteniéndose completamente actualizados sobre las últimas técnicas y procesos de reparaciones y diagnósticos</p>
                        </div>
                        <div className="column is-6-tablet is-4-desktop">
                            <img src="static/teamtaller.svg" alt="" />
                        </div>
                        <div className="column is-6-tablet is-4-desktop">
                            <img src="static/scanncar.svg" alt=""/>
                        </div>
                        <div className="column is-12-tablet is-8-desktop">
                            <p className="is-size-4 has-text-weight-light has-text-centered-touch">Si se presenta un problema en su vehículo, lo eliminaremos de forma rápida y efectiva realizando todos los trabajos relacionados con la reparación de su vehículo, de manera eficiente y económica</p>
                            <p className="is-size-4 has-text-weight-light has-text-centered-touch">Estamos listos para ofrecerle una gama completa de servicios para el mantenimiento y reparación de su vehículo</p>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                        img {
                            width: 100%
                        }
                        .column {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center
                        }
                        @media only screen and  (min-width:500px) and (max-width:768px) {
                            img {
                                width: 60%
                            }
                        }
                        @media only screen and (min-width:769px) and (max-width:1087px) {
                            img {
                                width: 80%
                            }
                        }
                    `}</style>
            </section>
        );
    }
}

export default Nosotros;