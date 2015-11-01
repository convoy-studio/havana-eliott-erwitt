import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import MailApi from '../../utils/mailApi';
let config = require('../../config');
let validator = require('validator');

export default class Contact extends ComponentTransition {

	componentWillMount() {

		this.state = {
			valid: true,
			sended: false
		};

		// binded
		this.sendMail = this.sendMail.bind(this);

	}

	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();
		let logo = document.querySelector('.header__logo');

		TweenMax.fromTo(logo, 0.3, {opacity:1}, {opacity:0, ease:Power2.easeIn});
		this.enterTl = new TimelineMax({delay:0.3, onComplete:()=>{
			logo.style.display = 'none';
		}});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn}, 0);
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
	
	}

	render() {

		let seo = {
			title: 'Contact | Elliott Erwitt Havana Club 7 Fellowship',
			description: 'Contact us here if you have any questions regarding the "Elliott Erwitt Havana Club 7 Fellowship", our brand or product range.',
			url: config.siteurl + '/contact',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		return (
			<div className='page page--contact page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content contact'>
					<h1 className='title title--center title--absolute'>Contact</h1>
					<div className='contact__content'>
						<div className='contact__column'>
							<p className='text'>Please use this contact form if you have questions about the fellowship.<br/><br/>Please note that Photographers wishing to be considered to join the Fellowship will not be able to apply using this form. The Photographers invited to join the Fellowship will be invited based on the merit of their past work by an independent group of Photography professionals.<br/><br/>Please be informed that any personal information collected through this form will be used for the sole purpose of answering your questions and will thereafter be deleted</p>
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
									<input className='form__submit button' type='submit' value='Submit' onClick={this.sendMail} />
								</div>
								<div className='feedback'>
									{(!this.state.valid) ? (<div className='text response--error'>The form contains errors.</div>) : null}
									{(this.state.sended) ? (<div className='text response--success'>Email sended.</div>) : null}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);

	}

	sendMail(e) {

		e.preventDefault();

		// let mail = validator.isEmail(document.getElementById('mail').value);
		let mail = document.getElementById('mail').value;
		let name = document.getElementById('name').value;
		let subject = document.getElementById('subject').value;
		let country = document.getElementById('country').value;
		let message = document.getElementById('message').value;
		let valid = validator.isEmail(mail) && name.length > 0 && subject.length > 0 && country.length > 0 && message.length > 0;
		
		if (valid) {
			this.setState({
				sended: true,
				valid: true
			});
			MailApi.sendMail({
				mail: mail,
				name: name,
				subject: subject,
				country: country,
				message: message.replace(/(\r\n|\n|\r)/g,'<br/>')
			});
		} else {
			this.setState({
				valid: false
			});
		}

	}
}