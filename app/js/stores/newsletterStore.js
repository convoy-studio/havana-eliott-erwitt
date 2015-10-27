import AppDispatcher from '../dispatchers/appDispatcher';
import NewsletterConstants from '../constants/newsletterConstants';
import assign from 'object-assign';
let EventEmitter = require('events').EventEmitter;
let _ = require('lodash')

const CHANGE_EVENT = 'change';

let _mails = {};
let _mail = {};
let _mailCreated = {};
let _mailUnsubscribe = {};

let NewsletterStore = assign({}, EventEmitter.prototype, {
	getAll: function() {
		return _mails;
	},
	getOne: function() {
		return _mail;
	},
	getCreated: function() {
		return _mailCreated;
	},
	getUnsubscribed: function() {
		return _mailUnsubscribe;
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
			case NewsletterConstants.RECEIVE_ALL_NEWSLETTER:
				_mails = action.item;
				NewsletterStore.emitChange();
				break
			case NewsletterConstants.RECEIVE_NEWSLETTER:
				_mail = action.item;
				NewsletterStore.emitChange();
				break
			case NewsletterConstants.NEWSLETTER_CREATED:
				_mailCreated = action.item;
				NewsletterStore.emitChange();
				break;
			case NewsletterConstants.NEWSLETTER_UNSUBSCRIBE:
				_mailUnsubscribe = action.item;
				NewsletterStore.emitChange();
				break;
		}
		return true;
	})
})

export default NewsletterStore;

