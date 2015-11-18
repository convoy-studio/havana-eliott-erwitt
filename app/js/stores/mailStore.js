import AppDispatcher from '../dispatchers/appDispatcher';
import MailConstants from '../constants/mailConstants';
import assign from 'object-assign';
let EventEmitter = require('events').EventEmitter;
let _ = require('lodash')

const CHANGE_EVENT = 'change';

let _templates = {};

let MailStore = assign({}, EventEmitter.prototype, {
	getTemplates: function() {
		return _templates;
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
			case MailConstants.RECEIVE_ALL_TEMPLATES:
				_templates = action.item;
				MailStore.emitChange();
				break
		}
		return true;
	})
})

export default MailStore;