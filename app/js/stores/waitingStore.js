import AppDispatcher from '../dispatchers/appDispatcher';
import WaitingConstants from '../constants/waitingConstants';
import assign from 'object-assign';
let EventEmitter = require('events').EventEmitter;
let _ = require('lodash');

const CHANGE_EVENT = 'change';

let _items = [];

// Add product to waiting list
function _add(update) {
    _items.push(update);
    if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('waiting', JSON.stringify(_items));
    }
}

// Remove item from waiting list
function _removeItem(index) {
    _items.splice(index, 1);
    if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('waiting', JSON.stringify(_items));
    }
}

let WatingStore = assign({}, EventEmitter.prototype, {
    // Emit Change event
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    dispatcherIndex: AppDispatcher.register(function(payload){
        let action = payload.action

        switch(action.actionType) {
            case WaitingConstants.WAITING_ADD:
                _add(action.update);
                WatingStore.emitChange();
                break;

            case WaitingConstants.WAITING_REMOVE:
                _removeItem(action.index);
                WatingStore.emitChange();
                break;
        }

        return true
    })
};

export default WaitingStore;