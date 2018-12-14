import React, { Component } from 'react';

class Clientes extends Component {
    render() {
        return (
            <section className="section is-medium has-background-dark">
                <div className="container">
                    <p className="title has-text-white has-text-weight-light has-text-centered is-2">MÁS DE <span className="has-text-weight-bold">250</span> CLIENTES CONFÍAN EN NOSOTROS</p>
                </div>
                <style jsx>{`
                        p {
                            border: solid 5px #2e4bdb;
                            padding: 1rem
                        }
                        span {
                            padding: 3rem 1rem 3rem 1rem;
                            background-color: #2e4bdb
                        }
                    `}</style>
            </section>
        );
    }
}

export default Clientes;