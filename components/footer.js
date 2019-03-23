import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<div className='container'>
					<div className='columns'>
						<div className='column has-text-centered this-reveal'>
							<img src='/static/newlogo.svg' alt='Mecánica Esparza' />
							<p className='has-text-grey-light has-text-weight-light has-text-centered'>
								Centro integral de reparación y mantenimiento de vehículos
							</p>
							<p className='has-text-grey-light has-text-weight-light has-text-centered'>Lamadrid 2424</p>
							<p className='has-text-grey-light has-text-weight-light has-text-centered'>
								<span className='icon'>
									<i className='fab fa-whatsapp is-size-5 has-text-grey-light' />
								</span>
								(341) 5889498
							</p>
							<p className='has-text-grey-light has-text-weight-light has-text-centered'>
								<span className='icon'>
									<i className='fas fa-phone is-size-5 has-text-grey-light' />
								</span>
								(341) 4610836
							</p>
							<p className='has-text-grey-light has-text-weight-light has-text-centered'>Lu a Vi de 8 a 12 y 14:30 a 18</p>
							<p className='has-text-grey-light has-text-weight-light has-text-centered'>Rosario (Santa Fe)</p>
						</div>
						<div className='column has-text-centered this-reveal'>
							<p className='has-text-grey-light has-text-weight-light has-text-centered'>Seguinos en facebook</p>
							<a href='https://www.facebook.com/mecanicaLResparza'>
								<i className='fab fa-facebook' />
							</a>
						</div>
					</div>
				</div>
				<div className='columns is-multiline'>
					<div className='column is-12 has-text-centered has-background-dark this-reveal'>
						<p className='has-text-grey-light has-text-weight-light'>© 2019 Copyright Mecánica Esparza</p>
					</div>
					<div className='column is-12 has-text-centered has-background-primary this-reveal'>
						<p className='has-text-white has-text-weight-light'>
							Developed by{' '}
							<a href='https://www.linkedin.com/in/francoesparza' className='has-text-white has-text-weight-bold'>
								Franco Esparza
							</a>
						</p>
					</div>
				</div>
				<style jsx>{`
					img {
						width: 10rem;
					}
					footer {
						padding: 2rem 0rem 0rem 0rem;
					}
					i {
						color: white;
						font-size: 2rem;
						transition: color 0.3s linear 0s;
					}
					i:hover {
						color: #3b5998;
					}
					span {
						vertical-align: middle;
						margin-right: 0.3rem;
					}
				`}</style>
			</footer>
		);
	}
}

export default Footer;
