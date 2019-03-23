import React, { Component } from 'react';
import Link from 'next/link';

class Servicios extends Component {
	render() {
		return (
			<section className='section is-medium has-background-dark-2'>
				<div className='container'>
					<div className='columns is-multiline'>
						<div className='column is-5'>
							<h2 className='title is-2 has-text-weight-normal has-text-white family2 this-reveal'>Múltiples servicios</h2>
							<p className='is-size-5 has-text-weight-light has-text-grey-light this-reveal'>
								Ofrecemos servicios variados de mecánica integral automotriz apoyándonos en el diagnóstico computarizado y las últimas
								herramientas para llevar a cabo un proceso de reparación exitoso y en el menor tiempo posible
							</p>
							<br />
							<p className='is-size-5 has-text-weight-bold has-text-grey-light item is-hidden-touch this-reveal'>Mecánica General</p>
							<p className='is-size-5 has-text-weight-bold has-text-grey-light item is-hidden-touch this-reveal'>Diagnósis</p>
							<p className='is-size-5 has-text-weight-bold has-text-grey-light item is-hidden-touch this-reveal'>Mantenimiento</p>
							<p className='is-size-5 has-text-weight-bold has-text-grey-light item is-hidden-touch this-reveal'>Motor</p>
							<p className='is-size-5 has-text-weight-bold has-text-grey-light item is-hidden-touch this-reveal'>Frenos</p>
							<p className='is-size-5 has-text-weight-bold has-text-grey-light item is-hidden-touch this-reveal'>Suspensión</p>
							<p className='is-size-5 has-text-weight-bold has-text-grey-light item is-hidden-touch this-reveal'>Aceite y Filtros</p>
							<p className='is-size-5 has-text-weight-bold has-text-grey-light item is-hidden-touch this-reveal'>Pre ITV</p>
							<p className='is-size-5 has-text-weight-bold has-text-grey-light item is-hidden-touch this-reveal'>Transmisión</p>
							<br />
							<Link href='/servicios'>
								<a className='button has-text-weight-bold is-hidden-desktop'>Saber más</a>
							</Link>
						</div>
						<div className='column is-7 has-text-centered this-reveal'>
							<img id='servicios' src='/static/iconservices.svg' />
						</div>
						<div className='column is-12 has-text-centered'>
							<Link href='/servicios'>
								<a className='button has-text-weight-bold is-hidden-touch'>Saber más</a>
							</Link>
						</div>
					</div>
				</div>
				<style jsx>{`
					#servicios {
						width: 100%;
					}
					.item {
						position: relative;
						border-left: 2px solid #2e4bdb;
						padding: 0.5rem 1rem;
					}
					.item::before {
						content: '';
						position: absolute;
						top: 50%;
						left: -5px;
						transform: translateY(-50%);
						border: 5px solid #2e4bdb;
						border-radius: 50%;
					}
				`}</style>
			</section>
		);
	}
}

export default Servicios;
