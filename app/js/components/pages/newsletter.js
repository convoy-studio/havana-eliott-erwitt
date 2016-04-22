import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import NewsletterApi from '../../utils/newsletterApi';
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

	}

    componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');

		NewsletterStore.addChangeListener(this.onStoreChange);

	}

    componentWillUnmount() {
        NewsletterStore.removeChangeListener(this.onStoreChange);
    }

	render() {

		let seo = {
			title: 'Elliott Erwitt Havana Club 7 Fellowship | Newsletter',
			description: 'Subscribe to the newsletter',
			url: config.siteurl + '/newsletter',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return (
			<div className='page page--newsletter' ref='view'>
				<Seo seo={seo} />
				<div className='newsletter'>
					<h2 className='newsletter__title title'>Subscribe to our Fellowship news</h2>
					<p className='text'>Subscribe to be informed of the latest fellowship news and be notified when new photos are available for sale</p>
					<form className='form'>
						<div className='form__row newsletter__consent'>
							<input className='form__input form__input--checkbox' type='checkbox' id='consent'/>
							<label className='form__label form__label--pointer' htmlFor='consent'><p className='form__text'>I consent to receive news and promotional information about the Elliot Erwitt Havana Club 7 Fellowship from the foundation Elliot Erwitt Havana Club 7 Fellowship</p></label>
						</div>
						<div className='form__row newsletter__mail'>
							<label className='form__label' htmlFor='mail'>Enter your email address*</label>
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
										<div className='text response--error'>Invalid mail.</div>
									)}
									if (this.state.consent===false) { return (
										<div className='text response--error'>Please tick the box to subscribe.</div>
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
