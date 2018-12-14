import React, { Component } from 'react';

class Carga extends Component {

    render() {
        return (
            <div className="has-background-dark">
                <img src="static/icon-carga.svg" alt=""/>
                <style jsx>{`
                        div {
                            position: absolute;
                            z-index: 100;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center
                            
                        }

                        img {
                            width: 15rem;
                            animation-name: carga;
                            animation-duration: 3s;
                            animation-iteration-count: infinite;
                            animation-timing-function: linear
                        }

                        @keyframes carga {
                            0% {
                                transform: rotateZ(0deg)
                            }
                            15% {
                                transform: rotateZ(72deg)
                            }
                            20% {
                                transform: rotateZ(72deg)
                            }
                            35% {
                                transform: rotateZ(144deg)
                            }
                            40% {
                                transform: rotateZ(144deg)
                            }
                            55% {
                                transform: rotateZ(216deg)
                            }
                            60% {
                                transform: rotateZ(216deg)
                            }
                            75% {
                                transform: rotateZ(288deg)
                            }
                            80% {
                                transform: rotateZ(288deg)
                            }
                            95% {
                                transform: rotateZ(360deg)
                            }
                            100% {
                                transform: rotateZ(360deg)
                            }
                        }
                    `}</style>
            </div>
        );
    }
}

export default Carga;