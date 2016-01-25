import React from 'react';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import ComponentTransition from '../componentTransition';
import Utils from '../../utils/utils';
let config = require('../../config');
import CartActions from '../../actions/cartActions';

export default class Result extends ComponentTransition {

    componentDidMount() {
        TweenMax = require('gsap/src/uncompressed/TweenMax');
    }

	render() {

		let seo = {
			title: 'Payment confirmation | Elliott Erwitt Havana Club 7 Fellowship',
			description: '',
			url: config.siteurl + '/payment-confirmation',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};
		let messages = [];

		switch(Utils.getURLParameter('result')) {
			case 'success':
				messages = [
					'Your order been validated.',
					'An email has been sent to you.'
				];
				break;
			case 'transaction-refused':
				messages = [
					'Transaction refused.',
					'Transaction rejected by the banking network.',
				];
				break;
			case 'insuffisiant-funds':
				messages = [
					'Insufficient funds.',
					'The wallet balance doesn’t allow to process transaction.',
				];
				break;
			case 'suspected-fraud':
				messages = [
					'The card is considered as fraudulent by the bank.',
					'Please use a different card.',
				];
				break;
			case 'lost-card':
				messages = [
					'Card reported as lost.',
					'Please use a different card or contact your card-issuing bank for more information.',
				];
				break;
			case 'stolen-card':
				messages = [
					'Card reported as stolen.',
					'Please use a different card or contact your card-issuing bank for more information.',
				];
				break;
			case 'echec-transaction':
				messages = [
					'Transaction failed.',
					'Please try again or ask your bank for more details.',
				];
				break;
			case 'invalid-card-information':
				messages = [
					'Invalid card information.',
					'Please verify the name, card number, expiration date and CVV.',
				];
				break;
			case 'expired-card':
				messages = [
					'Card reported as expired.',
					'Please contact your card-issuing bank for more information.',
				];
				break;
			case 'error':
				messages = [
					'An error occurred when ordering.',
					'Please try again',
				];
				break;
		}

		if (Utils.getURLParameter('result') === 'success') {
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
					<Link to='/shop' className='button'>Back to shop</Link>
				</div>
			</div>
		);

	}
}
