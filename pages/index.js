import React from 'react'
import Portada from '../components/portada'
import Servicios from '../components/servicios'
import Nosotros from '../components/nosotros'
import Valor from '../components/elements/valor'
import Map from '../components/map'
import Clientes from '../components/clientes'
import Vision from '../components/vision'
import Mision from '../components/mision'
import Footer from '../components/footer'

const Home = () => (
    <div className="page">
        <Portada/>
        <Nosotros/>
        <Valor tit1="Diagnósticos por" tit2="SOFTWARE" sub="Contamos con equipo para escanear y encontrar fallas rápidamente en su vehículo" bot="link" fondo="static/diagnosis.jpg"/>
        {/* <Servicios></Servicios> */}
        <Clientes/>
        <Mision/>
        <Valor tit1="Responsabilidad y" tit2="COMPROMISO" sub="Siempre pensando en el cliente para brindar servicios de calidad" bot="" fondo="static/motor.jpg"/>
        <Vision/>
        <Valor tit1="30 años de" tit2="EXPERIENCIA" sub="Personal altamente experimentado y en constante capacitación y perfeccionamiento" bot="" fondo="static/3.jpg"/>
        <Map />
        <Footer/>
    </div>
)

export default Home
