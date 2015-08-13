import AppDispatcher from 'AppDispatcher'
import CartConstants from 'CartConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'
let _ = require('lodash')

const CHANGE_EVENT = 'change';

// Define initial data points
let _products = {}, _cartVisible = true, _cartEnabled = false;

// Add product to cart
function _add(printId, update) {
	update.quantity = printId in _products ? _products[printId].quantity + 1 : 1;
	_products[printId] = _.extend({}, _products[printId], update)
}

// Set cart visibility
function _setCartVisible(cartVisible) {
	_cartVisible = cartVisible;
}

// Set cart enabled
function _setCartEnabled(cartEnabled) {
	_cartEnabled = cartEnabled;
}

// Remove item from cart
function _removeItem(printId) {
	delete _products[printId];
}

let CartStore = assign({}, EventEmitter2.prototype, {
	getCartItems: function() {
		return _products;
	},
	getCartCount: function() {
		return Object.keys(_products).length;
	},
	getCartTotal: function() {
		let total = 0;
		for(let product in _products){
			if(_products.hasOwnProperty(product)){
				total += _products[product].price * _products[product].quantity;
			}
		}
		return total.toFixed(2);
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
			case CartConstants.CART_ADD:
				_add(action.printId, action.update)
				CartStore.emitChange()
				break
			case CartConstants.CART_VISIBLE:
				_setCartVisible(action.cartVisible)
				CartStore.emitChange()
				break
			case CartConstants.CART_ENABLED:
				_setCartEnabled(action.cartEnabled)
				CartStore.emitChange()
				break
			case CartConstants.CART_REMOVE:
				_removeItem(action.printId)
				CartStore.emitChange()
				break
		}

		return true
	})
})

export default CartStore

