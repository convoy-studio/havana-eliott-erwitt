import React from 'react'
import BasePage from 'BasePage'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'

export default class Page extends BasePage {
	constructor(props) {
		super(props)
		this.resize = this.resize.bind(this)
	}
	componentWillMount() {
		AppStore.on(AppConstants.WINDOW_RESIZE, this.resize)
		super.componentWillMount()
	}
	componentDidMount() {
		super.componentDidMount()
		this._body = document.querySelector('body')
	}
	render() {
		super.render()
	}
	setupAnimations() {
		super.setupAnimations()
	}
	resize() {
		super.resize()
		if (window.innerWidth < 958) {
			if (this._body && !this._body.classList.contains('js-mobile')) { 
				document.querySelector('body').classList.add('js-mobile')
				// this.state({
				// 	isMobile: true
				// })
			}
		} else {
			if (this._body && this._body.classList.contains('js-mobile')) {
				document.querySelector('body').classList.remove('js-mobile')
				// this.state({
				// 	isMobile: false
				// })
			}
		}
	}
	componentWillUnmount() {
		AppStore.off(AppConstants.WINDOW_RESIZE, this.resize)
		super.componentWillUnmount()
	}
}
