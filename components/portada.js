import React, { Component } from 'react';
import Menu from './menu';
import Link from 'next/link';

class Portada extends Component {
	constructor(props) {
		super(props);
		this.portada = React.createRef();
		this.tria = React.createRef();
		this.makeCalc = this.makeCalc.bind(this);
	}

	componentDidMount() {
		this.makeCalc();
		window.addEventListener('resize', this.makeCalc);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.makeCalc);
	}

	makeCalc() {
		this.anchoPortada = this.portada.current.clientWidth;
		this.altoPortada = this.portada.current.clientHeight;
		this.altoTria = this.altoPortada / 5;
		this.tria.current.style.borderLeftWidth = `${this.anchoPortada}px`;
		this.tria.current.style.borderTopWidth = `${this.altoTria}px`;
	}

	render() {
		return (
			<section id='portada' ref={this.portada}>
				<Menu main={true} />
				<div id='caja'>
					<p className='title has-text-white has-text-weight-normal has-text-centered is-1 family2 this-reveal'>
						MECÁNICA AUTOMOTRIZ <span className='micolor1 has-text-weight-semibold'>PROFESIONAL</span>
					</p>
					<p className='subtitle has-text-grey-light has-text-weight-light is-4 has-text-centered'>
						Centro integral de reparación y mantenimiento de vehículos
					</p>
					<Link href='/nosotros'>
						<a className='button has-text-weight-bold'>Saber más</a>
					</Link>
				</div>
				<div id='tri-1' ref={this.tria} />
				<style jsx>{`
					#portada {
						position: relative;
						height: 600px;
						width: 100%;
						background-image: url('static/portada.jpg');
						background-position: center center;
						background-repeat: no-repeat;
						background-size: cover;
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
						background-color: rgba(30, 30, 36, 0.7);
						padding: 0px 20px 0px 20px;
					}
					#tri-1 {
						position: absolute;
						bottom: 0;
						width: 0px;
						height: 0px;
						border-top: 0px solid transparent;
						border-right: 0px solid #15151a;
						border-bottom: 0px solid transparent;
						border-left: 0px solid #15151a;
					}
					@media only screen and (max-width: 768px) {
						#portada {
							height: 100vh;
						}
					}
				`}</style>
			</section>
		);
	}
}

export default Portada;
