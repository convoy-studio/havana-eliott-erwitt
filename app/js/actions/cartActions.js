import CartConstants from '../constants/cartConstants';
import AppDispatcher from '../dispatchers/appDispatcher';

let CartActions = {

	// Receive inital product data
	initCart: function() {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.CART_INIT
		})
	},

	// Set currently selected product variation
	selectProduct: function(index) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.SELECT_PRODUCT,
			data: index
		})
	},

	// Add item to cart
	addToCart: function(update) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.CART_ADD,
			update: update
		})
	},

	// Remove item from cart
	removeFromCart: function(index) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.CART_REMOVE,
			index: index
		})
	},

    clearCart: function() {
        AppDispatcher.handleServerAction({
			actionType: CartConstants.CART_CLEAR
		})
    },

	// Update cart visibility status
	updateCartVisible: function(cartVisible) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.CART_VISIBLE,
			cartVisible: cartVisible
		})
	},

	// Update cart enabled status
	updateCartEnabled: function(cartEnabled, autoclose = false) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.CART_ENABLED,
			// cartEnabled: cartEnabled
			data: {
				cartEnabled: cartEnabled,
				autoclose: autoclose
			}
		})
	},

	// Receive be2bill form
	receiveForm: function(data) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.RECEIVE_FORM,
			data: data
		})
	},

	// Receive be2bill result verification
	receiveCheck: function(data) {
		// AppDispatcher.handleServerAction({
		// 	actionType: CartConstants.RECEIVE_CHECK,
		// 	data: data
		// })
    }
};

export default CartActions;
