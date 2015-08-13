import CartConstants from 'CartConstants'
import AppDispatcher from 'AppDispatcher'
import 'fetch'

var CartActions = {

	// Receive inital product data
	receiveProduct: function(data) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.RECEIVE_DATA,
			data: data
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
	addToCart: function(printId, update) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.CART_ADD,
			printId: printId,
			update: update
		})
	},

	// Remove item from cart
	removeFromCart: function(printId) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.CART_REMOVE,
			printId: printId
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
	updateCartEnabled: function(cartEnabled) {
		AppDispatcher.handleServerAction({
			actionType: CartConstants.CART_ENABLED,
			cartEnabled: cartEnabled
		})
	}

}

export default CartActions


	  
