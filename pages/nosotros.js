import React, { Fragment } from 'react';
import Head from 'next/head';
import Menu from '../components/menu';

const Nosotros = () => (
	<Fragment>
		<Head>
			<title>Nosotros</title>
			<meta name='description' content='¿Quiénes somos y cómo trabajamos?' />
		</Head>
		<Menu main={false} />
		<section className='section is-medium'>
			<div className='container'>
				<div className='columns is-multiline'>
					<div className='column is-6'>
						<h1 className='title is-2 has-text-weight-normal has-text-centered family2'>
							¿Quiénes <span className='has-text-weight-bold micolor1'>somos</span>?
						</h1>
						<p className='is-size-5 has-text-weight-light has-text-centered'>
							Somos una empresa especializada en servicios de mecánica integral automotriz desde hace 30 años, contando con un equipo de
							profesionales experimentados, equipamiento y tecnología de vanguardia
						</p>
					</div>
					<div className='column is-6'>
						<img src='/static/fotos/4-compressor.jpg' />
					</div>
					<div className='column is-6'>
						<img src='/static/fotos/8-compressor.jpg' />
					</div>
					<div className='column is-6'>
						<img src='/static/fotos/5-compressor.jpg' />
					</div>
				</div>
			</div>
		</section>
	</Fragment>
);

export default Nosotros;
