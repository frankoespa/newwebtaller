import React from 'react';
import App, { Container } from 'next/app';
import '../configstyle.scss';
import '../node_modules/odometer/themes/odometer-theme-minimal.css';
import Carga from '../components/elements/carga';
import Footer from '../components/footer';
import LiveChat from 'react-messenger-customer-chat';
import Router from 'next/router';
import SideMenu from '../components/sidemenu';

Router.events.on('routeChangeComplete', () => {
	document.getElementsByClassName('layout')[0].scrollTo(0, 0);
});

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			carga: true
		};
	}

	componentDidMount() {
		window.ScrollReveal().reveal('.this-reveal', {
			container: '.layout',
			duration: 1500
		});
		this.setState({ carga: false });
	}

	render() {
		const { children } = this.props;
		return (
			<div className='layout'>
				{this.state.carga == true && <Carga />}
				<LiveChat
					pageId='1312661855504776'
					appId='341667103096684'
					language='es_LA'
					shouldShowDialog={true}
					loggedInGreeting='Hola, ¿en qué podemos ayudarlo?'
					loggedOutGreeting='Hola, ingresa para hablar con nosotros'
					greetingDialogDisplay='show'
					greetingDialogDelay={5}
				/>
				<SideMenu />
				{children}
				<Footer />
			</div>
		);
	}
}

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Container>
		);
	}
}
