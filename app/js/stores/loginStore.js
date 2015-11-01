import {LOGIN_USER, LOGOUT_USER} from '../constants/loginConstants';
import BaseStore from './baseStore';
import jwt_decode from 'jwt-decode';

class LoginStore extends BaseStore {

	constructor() {

		super();
	
		this.subscribe(() => this._registerToActions.bind(this))
		this._user = null;
		this._jwt = null;
	
	}

	_registerToActions(object) {
	
		const action = object.action;

		switch(action.actionType) {
			case LOGIN_USER:
				this._jwt = action.jwt;
				console.log(this._jwt);
				this._user = jwt_decode(this._jwt);
				console.log(this._user);
				this.emitChange();
				break;
			case LOGOUT_USER:
				this._user = null;
				this.emitChange();
				break;
			default:
				break;
		};
	
	}

	get user() {

		return this._user;

	}

	get jwt() {

		return this._jwt;
	
	}

	isLoggedIn() {

		return !!this._user;
	
	}
}

export default new LoginStore();