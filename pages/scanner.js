import Head from 'next/head';

const Scanner = () => (
	<div className='page has-text-centered'>
		<Head>
			<title>Diagnóstico Computarizado</title>
			<meta name='description' content='¿Qué es el diagnóstico computarizado y para qué sirve?' />
		</Head>
		<img src='/static/worksection.svg' />
		<a href='/' className='button has-text-weight-bold'>
			Inicio
		</a>
		<style jsx>{`
			img {
				width: 20rem;
			}
			.page {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		`}</style>
	</div>
);

export default Scanner;
