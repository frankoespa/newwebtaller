import React, { Component } from 'react';

class Clientes extends Component {
	render() {
		return (
			<section className='section is-medium has-background-dark-2'>
				<div className='container'>
					<p className='title has-text-white has-text-weight-semibold has-text-centered is-3 family2 this-reveal'>
						MÁS DE <span className='is-size-1 my-text-color-2'>150</span> CLIENTES CONFÍAN EN NOSOTROS
					</p>
				</div>
				<style jsx>{`
					p {
						border: solid 5px #2e4bdb;
						padding: 1rem;
					}
					span {
						padding: 3rem 1rem 3rem 1rem;
						background-color: #2e4bdb;
					}
				`}</style>
			</section>
		);
	}
}

export default Clientes;
