import React from 'react';
import ComponentTransition from '../componentTransition';
import { Link } from 'react-router';
import NewsletterApi from '../../utils/newsletterApi';
import NewsletterStore from '../../stores/newsletterStore';
import Utils from '../../utils/utils';
import AppStore from '../../stores/appStore';
let config = require('../../config');
let validator = require('validator');

export default class Unsubscribe extends ComponentTransition {

	componentWillMount() {

		this.state = {
			response: undefined
		};
		
		// binded
		this.onStoreChange = this.onStoreChange.bind(this);

		this.content = AppStore.getContent()
	}

	componentDidMount() {

		NewsletterStore.addChangeListener(this.onStoreChange);

		let id = Utils.getURLParameter('id');

		if (validator.isMongoId(id)) {
			NewsletterApi.unsubscribe(id);
		}

	}

	render() {

		let message;

		if (this.state.response) {
			message = this.state.response.message;
		}

		return (
			<div className='page page--result' ref='view'>
				<div className='result'>
					<div className='result__message'>
						<p className='text'>{message}</p>
					</div>
					<Link to={AppStore.getLink('')} className='button'>{this.content.unsubscribe_go_back}</Link>
				</div>
			</div>
		);

	}

	onStoreChange() {

		this.setState({
			response: NewsletterStore.getUnsubscribed()
		});

	}

}