import CheckoutConstants from '../constants/checkoutConstants';
import AppDispatcher from '../dispatchers/appDispatcher';

export default {

	receiveRemoteState: (state) => {
		AppDispatcher.handleServerAction({
			actionType: CheckoutConstants.RECEIVE_REMOTE_STATE,
			state: state,
		})
	},

	clearRemoteState: () => {
		AppDispatcher: handleServerAction({
			actionType: CheckoutConstants.CLEAR_REMOTE_STATE,
		})
	},
};

// vim: ts=2 sts=2 sw=2 noet
