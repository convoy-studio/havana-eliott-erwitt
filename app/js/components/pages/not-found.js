import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import AppStore from '../../stores/appStore';
let config = require('../../config');

export default class NotFound extends ComponentTransition {

		render() {

			this.content = AppStore.getContent()

			const { authentication, dispatch } = this.props;
			const { router } = this.context;

			let seo = {
				title: this.content.not_found_title,
				description: '',
				url: config.siteurl + '/not-found',
				image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
			};

			return (
				<div className='page page--notfound page--classic' ref='view'>
					<Seo seo={seo} />
					<div className='page__content notfound'>
						<h1 className='title title--center'>{this.content.not_found_main_title}</h1>
						<p className='paragraph text text--center'>{this.content.not_found_subtitle}</p>
					</div>
				</div>
			);
		}
}