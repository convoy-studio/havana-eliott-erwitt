import React from 'react';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import ComponentTransition from '../componentTransition';
import Utils from '../../utils/utils';
import AppStore from '../../stores/appStore';
let config = require('../../config');
import CartActions from '../../actions/cartActions';

export default class Result extends ComponentTransition {

	componentWillMount(){
		this.content = AppStore.getContent()
	}
    componentDidMount() {
        TweenMax = require('gsap/src/uncompressed/TweenMax');
    }

	render() {

		let seo = {
			title: this.content.payment_result_title,
			description: '',
			url: config.siteurl + '/payment-confirmation',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};
		let messages = [];

		switch(Utils.getURLParameter('result')) {
			case 'success':
				message = [
					this.content.payment_result_success_1,
					this.content.payment_result_success_2
				];
				break;
			case 'transaction-refused':
				message = [
					this.content.payment_result_transaction_refused_1,
					this.content.payment_result_transaction_refused_2,
				];
				break;
			case 'insuffisiant-funds':
				message = [
					this.content.payment_result_insuffisiant_funds_1,
					this.content.payment_result_insuffisiant_funds_2,
				];
				break;
			case 'suspected-fraud':
				message = [
					this.content.payment_result_suspected_fraud_1,
					this.content.payment_result_suspected_fraud_2,
				];
				break;
			case 'lost-card':
				message = [
					this.content.payment_result_lost_card_1,
					this.content.payment_result_lost_card_2,
				];
				break;
			case 'stolen-card':
				message = [
					this.content.payment_result_stolen_card_1,
					this.content.payment_result_stolen_card_2,
				];
				break;
			case 'echec-transaction':
				message = [
					this.content.payment_result_echec_transaction_1,
					this.content.payment_result_echec_transaction_2,
				];
				break;
			case 'invalid-card-information':
				message = [
					this.content.payment_result_invalid_card_information_1,
					this.content.payment_result_invalid_card_information_2,
				];
				break;
			case 'expired-card':
				message = [
					this.content.payment_result_expired_card_1,
					this.content.payment_result_expired_card_2,
				];
				break;
			case 'error':
				message = [
					this.content.payment_result_error_1,
					this.content.payment_result_error_2,
				];
				break;
		}

		if (Utils.getURLParameter('result') === 'success') {
			message = [
				this.content.payment_result_validated_1,
				this.content.payment_result_validated_2,
			];

			// vider le panier
			localStorage.setItem('cart', undefined);
		}
		if (Utils.getURLParameter('result') === 'error') {
			message = [
				this.content.payment_result_validated_error_1,
				this.content.payment_result_validated_error_2,
			];
			CartActions.clearCart();
		}

		return (
			<div className='page page--result' ref='view'>
				<Seo seo={seo} />
				<div className='result'>
					<div className='result__message'>
						{messages.map((message, index) => {
							return (
								<p key={index} className='text'>{message}</p>
							)
						}.bind(this))}
					</div>
					<Link to={AppStore.getLink('')} className='button'>{this.content.unsubscribe_go_back}</Link>
				</div>
			</div>
		);

	}
}
