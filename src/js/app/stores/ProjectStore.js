import AppDispatcher from 'AppDispatcher'
import ProjectConstants from 'ProjectConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'

const CHANGE_EVENT = 'change';

let _project = {};
let _projects = {};
let _firsts = {};

let ProjectStore = assign({}, EventEmitter2.prototype, {
	getAll: function() {
		return _projects;
	},
	getFirsts: function() {
		return _firsts;
	},
	getOne: function() {
		return _project;
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
			case ProjectConstants.RECEIVE_ALL_PROJECTS:
				_projects = action.item;
				ProjectStore.emitChange();
				break
			case ProjectConstants.RECEIVE_FIRSTS:
				_firsts = action.item;
				ProjectStore.emitChange();
				break
			case ProjectConstants.RECEIVE_PROJECT:
				_project = action.item;
				ProjectStore.emitChange();
				break;
		}
		return true
	})
})

export default ProjectStore

