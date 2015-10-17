import React, { Component } from 'react';
import AppStore from '../stores/appStore';
import AppConstants from '../constants/appConstants';

export default class ComponentResize extends Component {

	constructor() {

		super();

		if(typeof document !== 'undefined') {
			this.body = document.querySelector('body');
		}

		// binded
		this.resize = this.resize.bind(this);

	}

	componentWillMount() {

		AppStore.on(AppConstants.WINDOW_RESIZE, this.resize);

	}
	
	resize() {

		if (AppStore.Window.w < 958) {
			this.body.classList.add('js-mobile');
		} else {
			this.body.classList.remove('js-mobile');
		}

	}

}