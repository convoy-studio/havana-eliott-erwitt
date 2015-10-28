import React from 'react';
import { Link } from 'react-router';
import ComponentTransition from '../componentTransition';
import Utils from '../../utils/utils';
let config = require('../../config');

export default class Result extends ComponentTransition {

	componentWillMount(){
		
	}

	render() {

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