import React, { Component } from 'react';
import AppStore from '../stores/appStore';
import AppConstants from '../constants/appConstants';

export default class ComponentResize extends Component {

	constructor(props, context) {

		super();

		if(typeof document !== 'undefined') {
			this.body = document.querySelector('body');
		}

		// this.router = context.router;
		this.context = context;

		// binded
		this.resize = this.resize.bind(this);

	}

	componentDidMount() {

		AppStore.on(AppConstants.WINDOW_RESIZE, this.resize);
		this.resize();

	}

	componentWillUnmount() {

		AppStore.removeAllListeners(AppConstants.WINDOW_RESIZE);

	}

	resize() {

		if (AppStore.Window.w < 958) {
			this.body.classList.add('js-mobile');
		} else {
			this.body.classList.remove('js-mobile');
		}

	}

}

ComponentResize.contextTypes = {
	router: React.PropTypes.object.isRequired
};
