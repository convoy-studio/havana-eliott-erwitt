import AppDispatcher from '../dispatchers/appDispatcher';
let EventEmitter = require('events').EventEmitter;

export default class BaseStore extends EventEmitter {

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

		this.on('CHANGE', cb);
	
	}

	removeChangeListener(cb) {

		this.removeListener('CHANGE', cb);
	
	}

}