import React from 'react'
import App, { Container } from 'next/app'
import '../configstyle.scss'
import Head from 'next/head'
import Carga from '../components/elements/carga'

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carga:true
        }
    }
    
    componentDidMount(){
        setTimeout(()=> {
            this.setState({carga:false})
        },1000)
    }

    render() {
        const { children } = this.props
        return (
            <div className='layout'>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>Mecánica Esparza</title>
                    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700|Oswald:400,700" rel="stylesheet"/> 
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
                </Head>
                {this.state.carga == true && <Carga /> }
                {children}
            </div>
        )
    }
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Container>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Container>
    }
}