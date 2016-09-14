import AppDispatcher from '../dispatchers/appDispatcher';
import CheckoutConstants from '../constants/checkoutConstants';
import assign from 'object-assign';

let EventEmitter = require('events').EventEmitter;
let _ = require('lodash');

let remoteState = {};

const setRemoteState = (state={}) => {
	remoteState = {...remoteState, ...state};
}

const clearRemoteState = () => {
	remoteState = {};
};

const CheckoutStore = assign({}, EventEmitter.prototype, {

	/**
	 * @param void
	 * @return {Object}
	 */
	getRemoteState: () => {
		return {...remoteState};
	},

	/**
	 * @inheritdoc
	 */
	dispatcherIndex: AppDispatcher.register((payload) => {
		let action = payload.action;

		switch(action.actionType) {
			case CheckoutConstants.RECEIVE_REMOTE_STATE:
				setRemoteState(action.state);
				CheckoutStore.emit('change');
				break;
			case CheckoutConstants.CLEAR_REMOTE_STATE:
				clearRemoteState();
				CheckoutStore.emit('change');
				break;
		}

		return true;
	}),

});

EventEmitter.call(CheckoutStore);

export default CheckoutStore;

// vim: ts=2 sts=2 sw=2 noet
