import { EventEmitter } from 'events';
import {EventEmitter2} from 'eventemitter2'
import AppDispatcher from '../dispatchers/AppDispatcher';

export default class BaseStore extends EventEmitter2 {

	constructor() {
		super();
	}

	subscribe(actionSubscribe) {
		this._dispatchToken = AppDispatcher.register(actionSubscribe());
	}

	get dispatchToken() {
		return this._dispatchToken;
	}

	emitChange() {
		this.emit('CHANGE');
	}

	addChangeListener(cb) {
		this.on('CHANGE', cb)
	}

	removeChangeListener(cb) {
		this.removeListener('CHANGE', cb);
	}

}