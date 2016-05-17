import AppDispatcher from '../dispatchers/appDispatcher';
import CartConstants from '../constants/cartConstants';
import assign from 'object-assign';
let EventEmitter = require('events').EventEmitter;
let _ = require('lodash');

const CHANGE_EVENT = 'change';

// Define initial data points
let _products = [];
let _cartVisible = true, _cartEnabled = false;

// Init products
function _init() {
	const cart = window.localStorage.getItem('cart');
	if (cart) {
		_products = JSON.parse(cart);
	}
}

// Add product to cart
function _add(update) {
	_products.push(update);
    if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('cart', JSON.stringify(_products));
    }
}

// Set cart visibility
function _setCartVisible(cartVisible) {
	_cartVisible = cartVisible;
}

// Set cart enabled
function _setCartEnabled(data) {
	_cartEnabled = data;
}

// Remove item from cart
function _removeItem(index) {
	_products.splice(index, 1);
    if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('cart', JSON.stringify(_products));
    }
}

function _clearItem() {
	_products = [];
	if (typeof window.localStorage !== 'undefined') {
        window.localStorage.removeItem('cart');
    }
}

let CartStore = assign({}, EventEmitter.prototype, {
	getCartItems: function() {
		return _products;
	},
	getCartCount: function() {
		return _products.length;
	},
	getCartTotal: function() {
		return _products.reduce(function (total, product) {
			return total += product.price;
		}, 0).toFixed(2);
	},
	getCartVisible: function() {
		return _cartVisible;
	},
	getCartEnabled: function() {
		return _cartEnabled;
	},
	// Emit Change event
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	// Add change listener
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	// Remove change listener
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	dispatcherIndex: AppDispatcher.register(function(payload){
		let action = payload.action

		switch(action.actionType) {
			case CartConstants.CART_INIT:
				_init();
				CartStore.emitChange()
				break
			case CartConstants.CART_ADD:
				_add(action.update)
				CartStore.emitChange()
				break
			case CartConstants.CART_VISIBLE:
				_setCartVisible(action.cartVisible)
				CartStore.emitChange()
				break
			case CartConstants.CART_ENABLED:
				_setCartEnabled(action.data)
				CartStore.emitChange()
				break
			case CartConstants.CART_REMOVE:
				_removeItem(action.index)
				CartStore.emitChange()
				break
			case CartConstants.CART_CLEAR:
				_clearItem()
				CartStore.emitChange()
				break
		}

		return true
	})
})

export default CartStore
