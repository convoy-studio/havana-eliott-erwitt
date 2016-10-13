import CheckoutActions from '../actions/checkoutActions';
import CartStore from '../stores/cartStore';
import AppStore from '../stores/appStore';

export default {

	/**
	 * JSON-serialize cart items, then POST the JSON payload to a server-side
	 * route handler. Expect the handler to dispatch an object that identifies
	 a remote cart (cart_id) on the PrestaShop domain.
	 * @async Promise
	 * @param void
	 * @return void
	 */
	acquireRemoteState: () => {
		let language = AppStore.Lang();

		return fetch(`/api/${language}/checkout/prepare`, {
			method: 'POST',
			redirect: 'manual',
			body: JSON.stringify({items: CartStore.getCartItems()}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})

		.then(response => response.json())

		.then((state) => CheckoutActions.receiveRemoteState(state))

		.catch((e) => {
			console.log(e.message);
			console.log(e.stack);
		});
	}
};