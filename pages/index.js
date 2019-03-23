import Head from 'next/head';
import apiMap from '../secret';
import Portada from '../components/portada';
import Nosotros from '../components/nosotros';
import Valor from '../components/elements/valor';
import Map from '../components/map';
import Clientes from '../components/clientes';
import Mision from '../components/mision';
import Servicios from '../components/servicios';
import Reviews from '../components/reviews';

const Home = ({ reviews }) => (
	<div className='page'>
		<Head>
			<title>Mecánica Esparza | Mecánica Integral Automotriz</title>
			<meta
				name='description'
				content='Somos una empresa de Rosario especializada en servicios de mecánica integral automotriz desde hace 30 años, contando con un equipo de profesionales experimentados, equipamiento y tecnología de vanguardia'
			/>
		</Head>
		<Portada />
		<Servicios />
		<Nosotros />
		<Valor
			tit1='Diagnósticos por'
			tit2='SOFTWARE'
			sub='Contamos con equipo para escanear y encontrar fallas rápidamente en su vehículo'
			bot='/scanner'
			fondo='static/diagnosis.jpg'
		/>
		<Mision />
		<Valor
			tit1='Responsabilidad y'
			tit2='COMPROMISO'
			sub='Siempre pensando en el cliente para brindar servicios de calidad'
			bot=''
			fondo='static/motor.jpg'
		/>
		<Clientes />
		<Valor
			tit1='30 años de'
			tit2='EXPERIENCIA'
			sub='Personal altamente experimentado y en constante capacitación y perfeccionamiento'
			bot=''
			fondo='static/3.jpg'
		/>
		<Reviews reviews={reviews} />
		<Map />
	</div>
);

Home.getInitialProps = async ({ req }) => {
	if (req) {
		const axios = require('axios');
		const datos = await axios.get(
			`https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ5eDTRPGrt5URTq156neafV8&key=${apiMap.mapapi}&language=es`
		);
		const reviews = datos.data.result.reviews;
		return {
			reviews
		};
	} else {
		return {
			reviews: window.reviews
		};
	}
};

export default Home;
