import React, { Component } from 'react';

class Valor extends Component {

    constructor(props) {
        super(props);
        
    }
    

    render() {
        return (
            <section className="has-background-dark">
                <div className="caja">
                    <div className="container">
                        <p className="title has-text-white has-text-weight-light is-1 family2">{this.props.tit1} <span className="micolor1 has-text-weight-bold">{this.props.tit2}</span></p>
                        <p className="subtitle has-text-white has-text-weight-light is-4">{this.props.sub}</p>
                        {this.props.bot == "" ? null : <a href="#" className="button is-medium is-primary">¿Qué es?</a> }
                        
                    </div>                 
                </div>
                <style jsx>{`
                        section {
                        position: relative;
                        height: 400px;
                        width: 100%;
                        background: #322e38 url(${this.props.fondo});
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed;
                        box-shadow: inset 0 0 10px #000000
                        
                    }
                    .caja {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        background-color: rgba(50, 46, 56, 0.6);
                        padding: 0px 20px 0px 20px
                    }
                    `}</style>
            </section>
        );
    }
}

export default Valor;