import React, { Component } from 'react';
import Link from 'next/link';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.toogleSideMenu = this.toogleSideMenu.bind(this);
	}

	toogleSideMenu() {
		document.getElementById('sidemenu').classList.toggle('opensidemenu');
	}

	render() {
		return (
			<nav className='navbar is-transparent' role='navigation' aria-label='main navigation'>
				<div className='container'>
					<div className='navbar-brand'>
						<a href='/'>
							<div className='navbar-item my-item'>
								<img src='/static/newlogo.svg' alt='Mecánica Esparza' />
							</div>
						</a>
						<div className='navbar-burger' role='button' aria-label='menu' aria-expanded='false' onClick={this.toogleSideMenu}>
							<span aria-hidden='true' />
							<span aria-hidden='true' />
							<span aria-hidden='true' />
						</div>
					</div>
					<div className='navbar-menu'>
						<div className='navbar-start' />

						<div className='navbar-end'>
							<div className='navbar-item has-text-weight-normal family2' id='tel'>
								<span id='caja-tel'>
									<span className='icon' id='icontel'>
										<i className='fab fa-whatsapp' />
									</span>
									<span>341-5889498</span>
								</span>
							</div>
							<Link href='/servicios' prefetch>
								<div className='navbar-item has-text-weight-normal my-item family2'>
									SERVICIOS
									<span className='sub' />
								</div>
							</Link>
							<Link href='/nosotros' prefetch>
								<div className='navbar-item has-text-weight-normal my-item family2'>
									NOSOTROS
									<span className='sub' />
								</div>
							</Link>
							<Link href='/contacto' prefetch>
								<div className='navbar-item has-text-weight-normal my-item family2'>
									CONTACTO
									<span className='sub' />
								</div>
							</Link>
						</div>
					</div>
				</div>
				<style jsx>{`
					#icontel {
						margin-right: 10px;
					}
					#caja-tel {
						padding: 5px;
						border: solid 2px rgba(255, 255, 255, 0.3);
						border-radius: 6px;
					}
					.sub {
						visibility: hidden;
						position: absolute;
						bottom: 20%;
						left: 50%;
						width: 2px;
						height: 2px;
						background: rgb(46, 75, 219);
						background: linear-gradient(90deg, rgba(46, 75, 219, 1) 0%, rgba(0, 206, 247, 1) 100%);
						transform: translateX(-50%);
						transition: transform 0.2s linear 0s;
					}
					div.my-item:hover .sub {
						visibility: visible;
						transform: scaleX(20);
					}
					div.my-item:hover {
						color: #bababa;
					}
					.my-item {
						cursor: pointer;
						transition: color 0.3s linear 0s;
					}
					.navbar-item {
						letter-spacing: 1px;
					}
				`}</style>
			</nav>
		);
	}
}

export default Menu;
