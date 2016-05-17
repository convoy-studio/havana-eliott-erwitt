import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import OpeningShopApi from '../../utils/openingShopApi';
import OpeningShopStore from '../../stores/openingShopStore';
import MailApi from '../../utils/mailApi';
import AppStore from '../../stores/appStore';
let config = require('../../config');
let validator = require('validator');

export default class ShopTemp extends ComponentTransition {

    componentWillMount() {
		this.state = {
			error: false,
			response: undefined
		}

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.subscribe = this.subscribe.bind(this);
		this.content = AppStore.getContent()
	}

	componentDidMount() {
		OpeningShopStore.addChangeListener(this.onStoreChange);
	}

    componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');
	}

    componentWillUnmount() {
        OpeningShopStore.removeChangeListener(this.onStoreChange);
    }

	render() {

		let seo = {
			title: this.content.shop_temp_title,
			description: this.content.shop_temp_description,
			url: config.siteurl + '/shop-temp',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return (
			<div className='page page--shop-temp' ref='view'>
				<Seo seo={seo} />
				<div className='shopTemp'>
					<h2 className='shopTemp__title title'>{this.content.shop_temp_thank}</h2>
					<p className='text'>{this.content.shop_temp_register}</p>
					<form className='form'>
						<div className='form__row'>
							<label className='form__label' htmlFor='mail'>{this.content.shop_temp_email}*</label>
							<input className='form__input form__input--text' type='mail' id='mail' required/>
							{(this.state.error) ? (<div className='text response--error'>{this.content.shop_temp_invalid_email}</div>) : null}
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
			OpeningShopApi.create({
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
			response: OpeningShopStore.getCreated()
		}, () => {
			if (this.state.response.success) {
				MailApi.sendTemplate('havana-opening-shop', this.mail, 'support@havana-fellowship.com');
			}
		});

	}

}
