import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import NewsletterApi from '../../utils/newsletterApi';
import AppStore from '../../stores/appStore';
import NewsletterStore from '../../stores/newsletterStore';
import MailApi from '../../utils/mailApi';
let config = require('../../config');
let validator = require('validator');

export default class Newsletter extends ComponentTransition {

	componentWillMount() {

		this.state = {
			error: false,
			response: undefined,
			consent: true
		}

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.subscribe = this.subscribe.bind(this);

		this.content = AppStore.getContent()

	}

	componentDidMount() {

		NewsletterStore.addChangeListener(this.onStoreChange);

	}

	render() {

		let seo = {
			title: this.content.newsletter_title,
			description: this.content.newsletter_description,
			url: config.siteurl + '/newsletter',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return (
			<div className='page page--newsletter' ref='view'>
				<Seo seo={seo} />
				<div className='newsletter'>
					<h2 className='newsletter__title title'>{this.content.newsletter_main_title}</h2>
					<p className='text'>{this.content.newsletter_main_subscribe}</p>
					<form className='form'>
						<div className='form__row newsletter__consent'>
							<input className='form__input form__input--checkbox' type='checkbox' id='consent'/>
							<label className='form__label form__label--pointer' htmlFor='consent'><p className='form__text'>{this.content.newsletter_consent}</p></label>
						</div>
						<div className='form__row newsletter__mail'>
							<label className='form__label' htmlFor='mail'>{this.content.contact_email}*</label>
							<input className='form__input form__input--text' type='mail' id='mail' required/>
							{(() => {
								if (this.state.response) { 
									if (this.state.response.success) { return (
										<div className='text response--success'>{this.state.response.message}</div>
									)} else { return (
										<div className='text response--error'>{this.state.response.message}</div>
									)}
								} else {
									if (this.state.error) { return (
										<div className='text response--error'>{this.content.shop_temp_invalid_email}.</div>
									)} 
									if (this.state.consent===false) { return (
										<div className='text response--error'>{this.content.newsletter_response}</div>
									)}
								}
							}.bind(this))()}
						</div>
						<div className='form__row form__row--center'>
							<input className='form__submit button' type='submit' value='Register' onClick={this.subscribe} />
						</div>
					</form>
				</div>
			</div>
		);

	}

	subscribe(e) {

		e.preventDefault();

		if (document.getElementById('consent').checked) {
			this.mail = document.getElementById('mail').value;

			if (validator.isEmail(this.mail)) {
				NewsletterApi.create({
					mail: this.mail
				});
			} else {
				this.setState({
					error: true,
					consent: true
				});
			}
		} else {
			this.setState({
				consent: false
			});
		}

	}

	onStoreChange() {

		this.setState({
			response: NewsletterStore.getCreated()
		}, () => {
			if (this.state.response.success) {
				// MailApi.sendTemplate('havana-subscribe-newsletter', this.mail);
				MailApi.sendDynamicTemplate({
					template: 'havana-subscribe-newsletter',
					recipients: [this.state.response.data],
					from: 'contact@havana-fellowship.com'
				});
			}
		});

	}

}