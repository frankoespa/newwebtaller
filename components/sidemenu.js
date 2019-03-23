import React, { Component } from 'react';
import Link from 'next/link';

export default class SideMenu extends Component {
	constructor(props) {
		super(props);
		this.toogleSideMenu = this.toogleSideMenu.bind(this);
	}

	toogleSideMenu() {
		document.getElementById('sidemenu').classList.toggle('opensidemenu');
	}

	render() {
		return (
			<div id='sidemenu'>
				<div className='has-text-right'>
					<a className='button has-text-weight-normal family2 is-size-6 botclose' onClick={this.toogleSideMenu}>
						<i className='fas fa-times' />
					</a>
				</div>
				<div className='boxbotones'>
					<Link href='/'>
						<a className='button has-text-weight-normal family2 is-size-5 botside' onClick={this.toogleSideMenu}>
							Inicio
						</a>
					</Link>
					<Link href='/servicios'>
						<a className='button has-text-weight-normal family2 is-size-5 botside' onClick={this.toogleSideMenu}>
							Servicios
						</a>
					</Link>
					<Link href='/nosotros'>
						<a className='button has-text-weight-normal family2 is-size-5 botside' onClick={this.toogleSideMenu}>
							Nosotros
						</a>
					</Link>
					<Link href='/contacto'>
						<a className='button has-text-weight-normal family2 is-size-5 botside' onClick={this.toogleSideMenu}>
							Contacto
						</a>
					</Link>
				</div>

				<style jsx>{`
					#sidemenu {
						position: fixed;
						z-index: 1000;
						top: 0;
						left: 0;
						height: 100%;
						width: auto;
						background: #15151a;
						transform: translateX(-100%);
						transition: transform 0.3s linear 0s;
					}
					.boxbotones {
						display: flex;
						flex-direction: column;
					}
					.botside {
						background: transparent;
						padding: 1.5rem 4rem;
					}
					.botclose {
						background: #15151a;
					}
				`}</style>
			</div>
		);
	}
}
