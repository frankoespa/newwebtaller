import React, { Component } from 'react';
import SliderReviews from 'react-slick';

class Reviews extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		window.reviews = this.props.reviews;
	}

	render() {
		let { reviews } = this.props;
		return (
			<section className='section has-background-dark-2'>
				<div className='container has-text-centered'>
					<div className='columns'>
						<div className='column is-half is-offset-one-quarter this-reveal'>
							<SliderReviews
								speed={300}
								fade={true}
								arrows={false}
								dots={true}
								infinite={true}
								slidesToShow={1}
								slidesToScroll={1}
								autoplay={true}
								autoplaySpeed={5000}>
								{reviews.map((persona, i) => {
									var stars = [];
									for (let index = 0; index < persona.rating; index++) {
										stars.push(<i key={index} className='fas fa-star' />);
									}

									return (
										<div id='slide-container' key={i} className='has-text-centered has-background-dark box'>
											<div id='caja-cita' className='has-background-dark-2'>
												<img id='cita' src='/static/cita.svg' alt='review' />
											</div>
											<img src={persona.profile_photo_url} alt={persona.author_name} />
											<p className='is-size-6 has-text-white has-text-weight-bold'>{persona.author_name.toUpperCase()}</p>
											<div>{stars}</div>
											<p id='cita-text' className='is-size-5 has-text-grey-light'>
												" {persona.text} "
											</p>
										</div>
									);
								})}
							</SliderReviews>
						</div>
					</div>
					<br />
					<br />
					<a href='https://goo.gl/Z4u9p6' className='button has-text-weight-bold this-reveal'>
						Dejá tu opinión
					</a>
				</div>
				<style jsx>{`
					#cita {
						width: 5rem;
						margin: 0rem auto 0rem auto;
					}
					#caja-cita {
						position: relative;
						top: -2.5rem;
						display: inline-block;
						padding: 0.5rem;
						border-radius: 50%;
					}
					#cita-text {
						display: inline-block;
						margin-top: 1rem;
					}
					img {
						width: 4rem;
						margin: auto;
					}
					i {
						color: #e7711b;
					}
					#slide-container {
						width: 50%;
						padding-left: 2rem;
						padding-right: 2rem;
						padding-top: 0px;
						overflow-y: visible;
					}
				`}</style>
			</section>
		);
	}
}

export default Reviews;
