import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
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
			response: undefined
		}

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.subscribe = this.subscribe.bind(this);

	}

	componentDidMount() {

		NewsletterStore.addChangeListener(this.onStoreChange);

	}

	render() {

		let seo = {
			title: 'Elliott Erwitt Havana Club 7 Fellowship | Newsletter',
			description: 'Subscribe to the newsletter',
			url: config.siteurl + '/newsletter',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		return (
			<div className='page page--shop-temp' ref='view'>
				<Seo seo={seo} />
				<div className='submenu'><Link to='/shop' className='button'>Back to shop page</Link></div>
				<div className='shopTemp'>
					<h2 className='shopTemp__title title'>THANK YOU FOR YOUR INTEREST TO SUPPORT DOCUMENTARY PHOTOGRAPHY. UNFORTUNATELY OUR SHOP IS CLOSED TEMPORARILY</h2>
					<p className='text'>If you are interested in being contacted when we open again, please register your email below. Your email given here will be used only once to announce that the shop has re-opened.</p>
					<form className='form'>
						<div className='form__row'>
							<label className='form__label' htmlFor='mail'>Enter your email address*</label>
							<input className='form__input form__input--text' type='mail' id='mail' required/>
							{(this.state.error) ? (<div className='text response--error'>Invalid mail.</div>) : null}
							{(() => {
								if (this.state.response) { 
									if (this.state.response.success) { return (
										<div className='text response--success'>{this.state.response.message}</div>
									)} else { return (
										<div className='text response--error'>{this.state.response.message}</div>
									)}
								}
							}.bind(this))()}
						</div>
						<div className='form__row form__row--center'>
							<input className='form__submit button' type='submit' value='Submit' onClick={this.subscribe} />
						</div>
					</form>
				</div>
			</div>
		);

	}

	subscribe(e) {

		e.preventDefault();

		this.mail = document.getElementById('mail').value;

		if (validator.isEmail(this.mail)) {
			NewsletterApi.create({
				mail: this.mail
			});
		} else {
			this.setState({
				error: true
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
					recipients: [this.state.response.data]
				});
			}
		});

	}

}