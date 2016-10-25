import React, { Component } from 'react';
import { translate } from '../../utils/translation';
import AppStore from '../../stores/appStore';
import config from '../../config';

export default class Customer extends Component {

	get_customer_url() {
		let language = AppStore.Lang();
		return `${config.prestashop.url}/${language}/my-account`
	}

	render() {

		return (
			<li className="customer">
				<a href={this.get_customer_url()}><h5>{translate('my_account')}</h5></a>
			</li>
		);

	}

}

// vim: ts=2 sts=2 sw=2 noet
