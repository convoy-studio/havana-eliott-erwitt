import React from 'react';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import ComponentTransition from '../componentTransition';
import Utils from '../../utils/utils';
let config = require('../../config');

export default class Result extends ComponentTransition {

	componentWillMount(){
		
	}

	render() {

		let seo = {
			title: 'Payment confirmation | Elliott Erwitt Havana Club 7 Fellowship',
			description: '',
			url: config.siteurl + '/payment-confirmation',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		let message = [];
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