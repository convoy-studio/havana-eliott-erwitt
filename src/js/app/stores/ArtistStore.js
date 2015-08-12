import AppDispatcher from 'AppDispatcher'
import ArtistConstants from 'ArtistConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'

const CHANGE_EVENT = 'change';

let _artist = {};
let _artists = {};

function _addArtists(artists) {
	artists.forEach(function(artist) { // change forEach to lodash
		if (!_artists[artist._id]) {
			_artists[artist._id] = artist;
		}
	});
}

let ArtistStore = assign({}, EventEmitter2.prototype, {
	getAll: function() {
		return _artists
	},
	getOne: function() {
		return _artist;
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
			case ArtistConstants.RECEIVE_ALL_ARTISTS:
				_addArtists(action.item);
				ArtistStore.emitChange();
				break
			case ArtistConstants.RECEIVE_ARTIST:
				_artist = action.item;
				ArtistStore.emitChange();
				break;
		}
		return true
	})
})

export default ArtistStore

