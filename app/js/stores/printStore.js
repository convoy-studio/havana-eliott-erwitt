import AppDispatcher from '../dispatchers/appDispatcher'
import PrintConstants from '../constants/printConstants'
// import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import CartStore from '../stores/cartStore';
// import data from 'GlobalData'
// import Router from 'Router'
let EventEmitter = require('events').EventEmitter;
// let _ = require('lodash')

const CHANGE_EVENT = 'change';

let _prints = {};
let _printsForSale = {};
let _printsSlideshow = {};
let _artistPrints = {};
let _print = {};
let _printZoomed;
let _unsold = 0;

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
	_artistPrints = prints
	// _(prints).forEach((print) => {
	// 	if (!_artistPrints[print._id]) {
	// 		_artistPrints[print._id] = print;
	// 	}
	// }).value()
}

let PrintStore = assign({}, EventEmitter.prototype, {
	getAll: function() {
		return _prints
	},
	getForSale: function() {
		return _printsForSale
	},
	getUnsold: function() {
		return _unsold;
	},
	getSlideshow: function() {
		return _printsSlideshow
	},
	getArtistPrints: function() {
		return _artistPrints
	},
    /**
     * Returns the combinations of a print updating the stock 
     * according to the cart status
     *
     * @param {Object} print
     * @return {Array}
     */
    getCombinations: function(print) {
        let cart_items = CartStore.getCartItems();
        return print.combinations.map((combo) => {
            if(cart_items.some((item) => {
                return (item.combination.id === combo.id);
            })) {
                combo.stock = 0;
            } else {
                combo.stock = combo.realstock;
            }
            return combo;
        });
    },
	getOne: function() {
        _print.combinations = this.getCombinations(_print);
		return _print
	},
	getZoom: function() {
		return _printZoomed
	},
	// Emit Change event
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	emitSpeChange: function() {
		this.emit('RECEIVE_PRINTS_SLIDESHOW');
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
				// _addPrintsForSale(action.item);
				_printsForSale = action.item;
				PrintStore.emitChange();
				break
			case PrintConstants.RECEIVE_UNSOLD:
				_unsold = action.item;
				PrintStore.emitChange();
				break
			case PrintConstants.RECEIVE_PRINTS_SLIDESHOW:
				_addPrintsSlideshow(action.item);
				PrintStore.emitChange();
				// PrintStore.emitSpeChange('RECEIVE_PRINTS_SLIDESHOW');
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
