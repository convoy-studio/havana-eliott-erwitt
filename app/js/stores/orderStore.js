import AppDispatcher from '../dispatchers/appDispatcher';
import OrderConstants from '../constants/orderConstants';
import assign from 'object-assign';
let EventEmitter = require('events').EventEmitter;
let _ = require('lodash')

const CHANGE_EVENT = 'change';

let _orders = {};
let _order = {};
let _orderCreated = {};

let OrderStore = assign({}, EventEmitter.prototype, {
	getAll: function() {
		return _orders
	},
	getOne: function() {
		return _order
	},
	getCreated: function() {
		return _orderCreated
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
			case OrderConstants.RECEIVE_ALL_ORDERS:
				_orders = action.item;
				OrderStore.emitChange();
				break
			case OrderConstants.RECEIVE_ORDER:
				_order = action.item;
				OrderStore.emitChange();
				break
			case OrderConstants.CREATED:
				_orderCreated = action.item;
				OrderStore.emitChange();
				break;
		}
		return true
	})
})

export default OrderStore

