import AppDispatcher from 'AppDispatcher'
import PrintConstants from 'PrintConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'

const CHANGE_EVENT = 'change';

let _prints = {};
let _artistPrints = {};
let _print = {};

function _addPrints(prints) {
	prints.forEach(function(print) { // change forEach to lodash
		if (!_prints[print._id]) {
			_prints[print._id] = print;
		}
	});
}

function _addArtistPrints(prints) {
	prints.forEach(function(print) { // change forEach to lodash
		if (!_artistPrints[print._id]) {
			_artistPrints[print._id] = print;
		}
	});
}

let PrintStore = assign({}, EventEmitter2.prototype, {
	getAll: function() {
		return _prints
	},
	getArtistPrints: function() {
		return _artistPrints
	},
	getOne: function() {
		return _print
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
				break
			case PrintConstants.RECEIVE_ARTIST_PRINTS:
				_addArtistPrints(action.item);
				PrintStore.emitChange();
				break
			case PrintConstants.RECEIVE_PRINT:
				_print = action.item;
				PrintStore.emitChange();
				break;
		}
		return true
	})
})

export default PrintStore

