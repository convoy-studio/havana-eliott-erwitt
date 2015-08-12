import AppDispatcher from 'AppDispatcher'
import PrintConstants from 'PrintConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'

const CHANGE_EVENT = 'change';

let _prints = {};

function _addPrints(prints) {
	prints.forEach(function(print) { // change forEach to lodash
		if (!_prints[print._id]) {
			_prints[print._id] = print;
		}
	});
}

let PrintStore = assign({}, EventEmitter2.prototype, {
	getAll: function() {
		return _prints
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
			case PrintConstants.RECEIVE_ALL_PRINTS:
				_addPrints(action.item);
				PrintStore.emitChange();
				// PrintStore.emitChange(action.actionType)
				break
		}
		return true
	})
})

export default PrintStore

