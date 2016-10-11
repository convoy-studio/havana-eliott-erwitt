import WaitingConstants from '../constants/waitingConstants';
import AppDispatcher from '../dispatchers/appDispatcher';

let PreorderActions = {
    // Add item to waiting list
    addToWaiting: function(update) {
        AppDispatcher.handleServerAction({
            actionType: WaitingConstants.WAITING_ADD,
            update: update
        })
    },
    // Remove item from waiting list
    removeFromWaiting: function(index) {
        AppDispatcher.handleServerAction({
            actionType: WaitingConstants.WAITING_REMOVE,
            index: index
        })
    }
};

export default PreorderActions;