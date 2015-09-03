import AppDispatcher from 'AppDispatcher'
import CartConstants from 'CartConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'
let _ = require('lodash')

const CHANGE_EVENT = 'change';

// Define initial data points
let _products = [], _cartVisible = true, _cartEnabled = false, _form;

// Add product to cart
function _add(printId, update) {
	// update.quantity = printId in _products ? _products[printId].quantity + 1 : 1;
	// _products[printId].push = _.extend({}, _products[printId], update)
	// if (_products[printId]) {
	// 	_products[printId].push(update)
	// } else {
	// 	_products[printId] = []
	// 	_products[printId].push(update)
	// }
	// console.log(_products)

	_products.push(update)
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
function _removeItem(index) {
	_products.splice(index, 1);
}

function _addForm(data) {
	_form = data;
}

let CartStore = assign({}, EventEmitter2.prototype, {
	getCartItems: function() {
		return _products;
	},
	getCartCount: function() {
		// let count = 0
		// _(_products).forEach((product, index) => {
		// 	// count += product.quantity
		// 	count += product.length
		// }).value()
		// return count;
		return Object.keys(_products).length;
	},
	getCartTotal: function() {
		let total = 0;
		_(_products).forEach((product, index) => {
			total += product.price
		}).value()

		// for(let product in _products){
		// 	if(_products.hasOwnProperty(product)){
		// 		total += _products[product].price * _products[product].quantity;
		// 	}
		// }
		return total.toFixed(2);
	},
	getCartVisible: function() {
		return _cartVisible;
	},
	getCartEnabled: function() {
		return _cartEnabled;
	},
	getForm: function() {
		return _form;
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
				_removeItem(action.index)
				CartStore.emitChange()
				break
			case CartConstants.RECEIVE_FORM:
				_addForm(action.data)
				CartStore.emitChange()
				break
			case CartConstants.RECEIVE_CHECK:
				_addForm(action.data)
				CartStore.emitChange()
				break
		}

		return true
	})
})

export default CartStore

