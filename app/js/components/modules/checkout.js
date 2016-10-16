import React from 'react';
import _ from 'lodash';
import AppStore from '../../stores/appStore';
import CartStore from '../../stores/cartStore';
import CartActions from '../../actions/cartActions';
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
			action: 'http://havana.it-consultis.net/rpc/prepare-waitlist.php',

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
		let {method, action, button_text} = (this.state || this.props);
		let json = JSON.stringify(CartStore.getCartItems());
console.log(CartStore.getCartItems());

		return (
			<div>
				<a ref='button' className="button">{button_text}</a>
				<form ref='form' method={method} action={action} style={{'display': 'none'}}>
					<input type="hidden" name="json" value={json} />
				</form>
			</div>
		);
	}

	/**
	 * @param {Event} e
	 * @return void
	 */
	onClickSubmitButton (e) {
		e && e.preventDefault();
		this.form && this.form.submit();
	}
}

export default { CheckoutForm }

// vim: ts=2 sts=2 sw=2 noet
