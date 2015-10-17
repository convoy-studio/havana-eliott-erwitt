import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
let config = require('../../config');

export default class Contact extends ComponentTransition {

	componentWillMount() {

	}

	render() {

		let seo = {
			title: 'Elliott Erwitt Havana Club 7 Fellowship | Contact',
			description: 'Lorem ipsum dolor sit amet',
			url: config.siteurl + '/contact',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		return (
			<div className='page page--contact page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content contact'>
					<h1 className='title title--center'>Contact</h1>
					<div className='contact__content'>
						<div className='contact__column'>
							<p className='text'>Please use the contact form below for any questions regarding our brand and product range. Kindly note that commercial solicitations will not be answered.<br/><br/>Thank you for your understanding.</p>
						</div>
						<div className='contact__column'>
							<form className='form'>
								<div className='form__row'>
									<label className='form__label' htmlFor='mail'>Enter your email address*</label>
									<input className='form__input form__input--text' type='mail' id='mail' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='name'>Name*</label>
									<input className='form__input form__input--text' type='text' id='name' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='subject'>Subject*</label>
									<input className='form__input form__input--text' type='text' id='subject' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='country'>Country*</label>
									<input className='form__input form__input--text' type='text' id='country' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='message'>Message*</label>
									<textarea className='form__input form__input--text form__input--textarea' rows='4' cols='50' id='message' required></textarea>
								</div>
								<div className='form__row form__row--center'>
									<input className='form__submit button' type='submit' value='Submit' />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);

	}
}