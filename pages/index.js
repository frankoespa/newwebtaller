import React from 'react'
import Portada from '../components/portada'
import Servicios from '../components/servicios'
import Nosotros from '../components/nosotros'
import Valor from '../components/elements/valor'
import Clientes from '../components/clientes'

const Home = () => (
    <div className="page">
        <Portada></Portada>
        <Nosotros></Nosotros>
        <Valor tit1="Diagnósticos por" tit2="SOFTWARE" sub="Contamos con equipo para escanear y encontrar fallas rápidamente en su vehículo" bot="link" fondo="static/diagnosis.jpg"></Valor>
        {/* <Servicios></Servicios> */}
        <Clientes></Clientes>
        <Valor tit1="Responsabilidad y" tit2="COMPROMISO" sub="Siempre pensando en el cliente para brindar servicios de calidad" bot="" fondo="static/motor.jpg"></Valor>
    </div>
)

export default Home
