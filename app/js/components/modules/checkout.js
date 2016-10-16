import React from 'react';
import _ from 'lodash';
import AppStore from '../../stores/appStore';
import CheckoutStore from '../../stores/checkoutStore';
import CheckoutApi from '../../utils/checkoutApi';
import { translate } from '../../utils/translation';

/**
 * This form sends the browser to the PrestaShop checkout RPC URL via
 * HTTP POST.
 */
export class CheckoutForm extends React.Component {

	/**
	 * @inheritdoc
	 */
	constructor (...args) {
		super(...args);
		this.onStoreChange = () => this.handleStoreChange();
	}

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
			next_rpc_url: null,

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

		CheckoutStore.on('change', this.onStoreChange);
	}

	/**
	 * @inheritdoc
	 */
	componentWillUnmount() {
		CheckoutStore.removeListener('change', this.onStoreChange);
	}

	/**
	 * @inheritdoc
	 */
	render() {
		let {method, next_rpc_url, button_text,
				 cart_id, language_id, token} = (this.state || this.props);

		return (
			<div>
				<a ref='button' className="button">{button_text}</a>
				<form ref='form' method={method} action={next_rpc_url} style={{'display': 'none'}}>
					<input type="hidden" name="cart_id" value={cart_id}/>
					<input type="hidden" name="language_id" value={language_id}/>
					<input type="hidden" name="token" value={token}/>
				</form>
			</div>
		);
	}

	/**
	 * Populate form values, then submit the form
	 * @param void
	 * @return void
	 */
	handleStoreChange () {
		this.setState(CheckoutStore.getRemoteState());
		this.state.ready && this.form.submit();
	}

	/**
	 * @param {Event} e
	 * @return void
	 */
	onClickSubmitButton (e) {
		e && e.preventDefault();
		CheckoutApi.acquireRemoteState();
	}
}

export default { CheckoutForm }

// vim: ts=2 sts=2 sw=2 noet
