import Head from 'next/head';

const Contacto = () => (
	<div className='page has-text-centered'>
		<Head>
			<title>Contacto</title>
			<meta name='description' content='Nuestra ubicación, teléfonos y social media' />
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

export default Contacto;
