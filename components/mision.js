import React, { Component } from 'react';

class Mision extends Component {
	render() {
		return (
			<section className='section is-medium'>
				<div className='container has-text-centered'>
					<div className='columns'>
						<div className='column this-reveal'>
							<img src='/static/ourmision.svg' alt='' />
							<h2 className='title is-3 has-text-weight-semibold has-text-centered family2'>
								NUESTRA <span className='micolor1'>MISIÓN</span>
							</h2>
							<p className='is-size-5 has-text-weight-normal has-text-centered'>
								Ofrecer un servicio mecánico de calidad y variado, creando valor para nuestros clientes desde nuestra experiencia y
								tecnología
							</p>
						</div>
						<div className='column this-reveal'>
							<img src='/static/ourvision.svg' alt='' />
							<h2 className='title is-3 has-text-weight-semibold has-text-centered family2'>
								NUESTRA <span className='has-text-weight-bold micolor1'>VISIÓN</span>
							</h2>
							<p className='is-size-5 has-text-weight-normal has-text-centered'>
								Posicionarnos como uno de los mejores centros de reparación y mantenimiento de vehículos de Rosario apoyándonos en el{' '}
								<span className='has-text-weight-bold'>trabajo en equipo</span>, el{' '}
								<span className='has-text-weight-bold'>respeto</span> hacia el cliente, la{' '}
								<span className='has-text-weight-bold'>innovación</span>, el <span className='has-text-weight-bold'>compromiso</span>{' '}
								y el <span className='has-text-weight-bold'>esfuerzo</span>
							</p>
						</div>
					</div>
				</div>
				<style jsx>{`
					img {
						width: 5rem;
					}
				`}</style>
			</section>
		);
	}
}

export default Mision;
