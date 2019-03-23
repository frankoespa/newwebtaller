import Head from 'next/head';

const Nosotros = () => (
	<div className='page has-text-centered'>
		<Head>
			<title>Nosotros</title>
			<meta name='description' content='¿Quiénes somos y cómo trabajamos?' />
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

export default Nosotros;
