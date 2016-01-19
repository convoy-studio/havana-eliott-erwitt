import React from 'react';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import ComponentTransition from '../componentTransition';
import Utils from '../../utils/utils';
let config = require('../../config');

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
		let message = [];

		switch(Utils.getURLParameter('result')) {
			case 'success':
				message = [
					'Your order been validated.',
					'An email has been sent to you.'
				];
				break;
			case 'transaction-refused':
				message = [
					'Transaction refused.',
					'Transaction rejected by the banking network.',
				];
				break;
			case 'insuffisiant-funds':
				message = [
					'Insufficient funds.',
					'The wallet balance doesn’t allow to process transaction.',
				];
				break;
			case 'suspected-fraud':
				message = [
					'The card is considered as fraudulent by the bank.',
					'Please use a different card.',
				];
				break;
			case 'lost-card':
				message = [
					'Card reported as lost.',
					'Please use a different card or contact your card-issuing bank for more information.',
				];
				break;
			case 'stolen-card':
				message = [
					'Card reported as stolen.',
					'Please use a different card or contact your card-issuing bank for more information.',
				];
				break;
			case 'echec-transaction':
				message = [
					'Transaction failed.',
					'Please try again or ask your bank for more details.',
				];
				break;
			case 'invalid-card-information':
				message = [
					'Invalid card information.',
					'Please verify the name, card number, expiration date and CVV.',
				];
				break;
			case 'expired-card':
				message = [
					'Card reported as expired.',
					'Please contact your card-issuing bank for more information.',
				];
				break;
			case 'error':
				message = [
					'An error occurred when ordering.',
					'Please try again',
				];
				break;
		}

		if (Utils.getURLParameter('result') === 'success') {
			message = [
				'Votre commande à bien été validée.',
				'Un email vient de vous être envoyé.'
			];

			// vider le panier
			localStorage.setItem('cart', undefined);
		}
		if (Utils.getURLParameter('result') === 'error') {
			message = [
				'Une erreur s\'est produite lors de la commande.',
				'Veuillez réessayer ultérieurement.',
			];
		}

		return (
			<div className='page page--result' ref='view'>
				<Seo seo={seo} />
				<div className='result'>
					<div className='result__message'>
						{Object.keys(message).map((index) => {
							return (
								<p key={index} className='text'>{message[index]}</p>
							)
						}.bind(this))}
					</div>
					<Link to='/' className='button'>Revenir au site</Link>
				</div>
			</div>
		);

	}
}
