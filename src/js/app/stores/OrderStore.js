import AppDispatcher from 'AppDispatcher'
import OrderConstants from 'OrderConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'
let _ = require('lodash')

const CHANGE_EVENT = 'change';

let _order = {};

let OrderStore = assign({}, EventEmitter2.prototype, {
	getCreated: function() {
		return _order
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
			case OrderConstants.CREATED:
				_order = action.item;
				OrderStore.emitChange();
				break;
		}
		return true
	})
})

export default OrderStore

