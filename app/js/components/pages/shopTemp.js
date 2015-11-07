import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import OpeningShopApi from '../../utils/openingShopApi';
import OpeningShopStore from '../../stores/openingShopStore';
import MailApi from '../../utils/mailApi';
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

	}

	componentDidMount() {

		OpeningShopStore.addChangeListener(this.onStoreChange);

	}

	render() {

		let seo = {
			title: 'Temporary Shop | Elliott Erwitt Havana Club 7 Fellowship',
			description: 'If you are interested in being contacted when the shop has re-open, please register your email here.',
			url: config.siteurl + '/shop-temp',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return (
			<div className='page page--shop-temp' ref='view'>
				<Seo seo={seo} />
				<div className='shopTemp'>
					<h2 className='shopTemp__title title'>THANK YOU FOR YOUR INTEREST TO SUPPORT DOCUMENTARY PHOTOGRAPHY. OUR SHOP WILL OPEN IN A FEW WEEKS!</h2>
					<p className='text'>Register below to be informed as soon as Elliott Erwitt’s limited editions are available for sale.Your email will be used only for this purpose.</p>
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