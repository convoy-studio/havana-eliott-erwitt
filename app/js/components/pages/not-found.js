import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
let config = require('../../config');

export default class NotFound extends ComponentTransition {

		render() {

			const { authentication, dispatch } = this.props;
			const { router } = this.context;

			let seo = {
				title: 'Elliott Erwitt Havana Club 7 Fellowship | 404',
				description: 'Lorem ipsum dolor sit amet',
				url: config.siteurl + '/not-found',
				image: config.siteurl + '/static/img/elliott-erwitt.jpg'
			};

			return (
				<div className='page page--notfound page--classic' ref='view'>
					<Seo seo={seo} />
					<div className='page__content notfound'>
						<h1 className='title title--center'>Page not found</h1>
						<p className='paragraph text text--center'>We're sorry but we couldn't find the page you're looking for.</p>
					</div>
				</div>
			);
		}
}