import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import MailApi from '../../utils/mailApi';
import AppStore from '../../stores/appStore';
let config = require('../../config');
let validator = require('validator');
let TweenMax;

export default class Contact extends ComponentTransition {

	componentWillMount() {

		this.state = {
			valid: true,
			sended: false
		};

		// binded
		this.sendMail = this.sendMail.bind(this);

		this.content = AppStore.getContent()
	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');
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
			title: this.content.contact_title,
			description: this.content.contact_description,
			url: config.siteurl + '/contact',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		const countries = []
		const selectedCountryId = 'spain'
		for (var key in this.content.countries) {
			let country = this.content.countries[key]
			let html = (key == selectedCountryId) ? <option value={country} selected='selected'>{country}</option> : <option value={country}>{country}</option>
			countries.push(html)
		}

		return (
			<div className='page page--contact page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content contact'>
					<h1 className='title title--center title--absolute'><span>{this.content.contact_main_title}</span></h1>
					<div className='contact__content'>
						<div className='contact__column'>
							<p className='text' dangerouslySetInnerHTML={{__html: this.content.contact_main_text}}></p>
						</div>
						<div className='contact__column'>
							<form className='form'>
								<div className='form__row'>
									<label className='form__label' htmlFor='mail'>{this.content.contact_email}*</label>
									<input className='form__input form__input--text' type='mail' id='mail' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='name'>{this.content.contact_name}*</label>
									<input className='form__input form__input--text' type='text' id='name' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='subject'>{this.content.contact_subject}*</label>
									<input className='form__input form__input--text' type='text' id='subject' required/>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='country'>{this.content.contact_country}*</label>
									<div className='form__select'><select id='country' name='country'>
										{countries}
									</select></div>
								</div>
								<div className='form__row'>
									<label className='form__label' htmlFor='message'>{this.content.contact_message}*</label>
									<textarea className='form__input form__input--text form__input--textarea' rows='4' cols='50' id='message' required></textarea>
								</div>
								<div className='form__row form__row--center'>
									<input className='form__submit button' type='submit' value={this.content.contact_submit} onClick={this.sendMail} />
								</div>
								<div className='feedback'>
									{(!this.state.valid) ? (<div className='text response--error'>{this.content.contact_errors}</div>) : null}
									{(this.state.sended) ? (<div className='text response--success'>{this.content.contact_sent}</div>) : null}
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
