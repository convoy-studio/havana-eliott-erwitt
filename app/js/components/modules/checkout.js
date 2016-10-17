import React from 'react';
import _ from 'lodash';
import AppStore from '../../stores/appStore';
import CartStore from '../../stores/cartStore';
import { translate } from '../../utils/translation';

import config from '../../config';

/**
 * This form sends the browser to the PrestaShop checkout RPC URL via
 * HTTP POST.
 */
export class CheckoutForm extends React.Component {

	/**
	 * @inheritdoc
	 */
	componentWillMount() {
		let language = AppStore.Lang();

		this.state = {

			// ISO language code
			language: language,

			// HTTP method
			method: 'POST',

			// the form action
			// FIXME: look up the base prestashop url from configuration
			action: `${config.prestashop.url}/rpc/prepare-waitlist.php`,

			// submit button text
			button_text: translate('proceed_to_checkout') || 'Proceed to checkout',

			...this.props,
		};
	}

	/**
	 * @inheritdoc
	 */
	componentDidMount() {
		this.form = this.refs.form.getDOMNode();
		this.button = this.refs.button.getDOMNode();
		this.button.addEventListener('click', (e) => this.onClickSubmitButton(e));
	}

	/**
	 * @inheritdoc
	 */
	render() {
		let {method, action, button_text, items} = (this.state || this.props);
console.log(action);

		return (
			<div>
				<a ref='button' className="button">{button_text}</a>
				<form ref='form' method={method} action={action} style={{'display': 'none'}}>
					<input type="hidden" name="json" value="" />
				</form>
			</div>
		);
	}

	/**
	 * @param {Event} e
	 * @return void
	 */
	onClickSubmitButton(e) {
		e && e.preventDefault();

		let {form} = this;

		if (form) {
			form.elements.json.value = JSON.stringify(this.createJsonPayload());
			console.log(this.createJsonPayload());
			form.submit();
		}
	}

	/**
	 * @param void
	 * @return {Object}
	 */
	createJsonPayload() {
		return {
			language: this.state.language,
			items: CartStore.getCartItems().map((item) => {
				return {
					product_id: item.product.id,
					combination_id: item.combination.id,
					quantity: item.quantity,
				};
			}),
		};
	}
}

export default { CheckoutForm }

// vim: ts=2 sts=2 sw=2 noet
