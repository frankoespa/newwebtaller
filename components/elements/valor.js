import React, { Component } from 'react';
import Link from 'next/link';

class Valor extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<div className='hero is-medium'>
					<div className='hero-body'>
						<div className='container this-reveal'>
							<p className='title has-text-white has-text-weight-normal is-2 family2'>
								{this.props.tit1} <span className='micolor1 has-text-weight-bold'>{this.props.tit2}</span>
							</p>
							<p className='subtitle has-text-grey-light has-text-weight-normal is-5'>{this.props.sub}</p>
							{this.props.bot == '' ? null : (
								<Link href={this.props.bot}>
									<a className='button has-text-weight-bold'>Saber más</a>
								</Link>
							)}
						</div>
					</div>
				</div>
				<style jsx>{`
					section {
						background: #322e38 url(${this.props.fondo});
						background-position: center center;
						background-repeat: no-repeat;
						background-size: cover;
						background-attachment: fixed;
					}
					.hero {
						background-color: rgba(30, 30, 36, 0.7);
					}
				`}</style>
			</section>
		);
	}
}

export default Valor;
