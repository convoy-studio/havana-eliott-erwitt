import AppDispatcher from '../dispatchers/appDispatcher';
import OpeningShopConstants from '../constants/openingShopConstants';
import assign from 'object-assign';
let EventEmitter = require('events').EventEmitter;
let _ = require('lodash')

const CHANGE_EVENT = 'change';

let _mails = {};
let _mail = {};
let _mailCreated = {};

let OpeningShopStore = assign({}, EventEmitter.prototype, {
	getAll: function() {
		return _mails
	},
	getOne: function() {
		return _mail
	},
	getCreated: function() {
		return _mailCreated
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
			case OpeningShopConstants.RECEIVE_ALL_OPENINGSHOP:
				_mails = action.item;
				OpeningShopStore.emitChange();
				break
			case OpeningShopConstants.RECEIVE_OPENINGSHOP:
				_mail = action.item;
				OpeningShopStore.emitChange();
				break
			case OpeningShopConstants.OPENINGSHOP_CREATED:
				_mailCreated = action.item;
				OpeningShopStore.emitChange();
				break;
		}
		return true
	})
})

export default OpeningShopStore;

