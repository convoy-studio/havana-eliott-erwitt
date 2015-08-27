import AppDispatcher from 'AppDispatcher'
import PrintConstants from 'PrintConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'
let _ = require('lodash')

const CHANGE_EVENT = 'change';

let _prints = {};
let _printsForSale = {};
let _printsSlideshow = {};
let _artistPrints = {};
let _print = {};
let _printZoomed;

function _addPrints(prints) {
	_(prints).forEach((print) => {
		if (!_prints[print._id]) {
			_prints[print._id] = print;
		}
	}).value()
}

function _addPrintsForSale(prints) {
	_(prints).forEach((print) => {
		if (!_printsForSale[print._id]) {
			_printsForSale[print._id] = print;
		}
	}).value()
}

function _addPrintsSlideshow(result) {
	_printsSlideshow = result
}

function _addArtistPrints(prints) {
	_(prints).forEach((print) => {
		if (!_artistPrints[print._id]) {
			_artistPrints[print._id] = print;
		}
	}).value()
}

let PrintStore = assign({}, EventEmitter2.prototype, {
	getAll: function() {
		return _prints
	},
	getForSale: function() {
		return _printsForSale
	},
	getSlideshow: function() {
		return _printsSlideshow
	},
	getArtistPrints: function() {
		return _artistPrints
	},
	getOne: function() {
		return _print
	},
	getZoom: function() {
		return _printZoomed
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
			case PrintConstants.RECEIVE_PRINTS_FORSALE:
				_addPrintsForSale(action.item);
				PrintStore.emitChange();
				break
			case PrintConstants.RECEIVE_PRINTS_SLIDESHOW:
				_addPrintsSlideshow(action.item);
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
			case PrintConstants.ZOOM:
				_printZoomed = action.item;
				PrintStore.emitChange();
				break;
		}
		return true
	})
})

export default PrintStore

