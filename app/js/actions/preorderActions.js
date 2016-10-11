import AppDispatcher from '../dispatchers/appDispatcher';

let PreorderActions = {
    // Add item to waiting list
    addToWaiting: function(update) {
        AppDispatcher.handleServerAction({
            actionType: 'WAITING_ADD',
            update: update
        })
    },
    // Remove item from waiting list
    removeFromWaiting: function(index) {
        AppDispatcher.handleServerAction({
            actionType: 'WAITING_REMOVE',
            index: index
        })
    }
};

export default PreorderActions;