import React from 'react'
import BasePage from 'BasePage'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'
import Utils from 'Utils'
let scroll = Utils.Scroll()

export default class Page extends BasePage {
	constructor(props) {
		super(props)

		// console.log('scrollTo 0')
		// window.scrollTo(0, 0)

		// console.log('cancel raf')
		// window.cancelAnimationFrame(window.scrollRaf)
		// window.cancelAnimationFrame(window.pageScrollRaf)
		// window.scrollTo(0,0)
		
		this.resize = this.resize.bind(this)
		this.sTop = 0
		this.cTop = 0
		this.pTop = 0
		this.pageScrollIndex = 0
		this.pageScrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
		this._pageRafBinded = this.pageRaf.bind(this)
	}
	componentWillMount() {
		AppStore.on(AppConstants.WINDOW_RESIZE, this.resize)
		super.componentWillMount()
	}
	componentDidMount() {
		super.componentDidMount()

		// this.pageRaf()
	}
	render() {
		super.render()
	}
	setupAnimations() {
		super.setupAnimations()
	}
	resize() {
		super.resize()
	}
	componentWillUnmount() {
		AppStore.off(AppConstants.WINDOW_RESIZE, this.resize)
		super.componentWillUnmount()
	}
	pageRaf() {
		if (this.pageScrollIndex % 3) this.pageScrollOk = true
		else this.pageScrollOk = true
		this.pageScrollIndex++

		if (this.pageScrollOk) {
			this.pageHandleScroll()
		}

		window.pageScrollRaf = scroll(this._pageRafBinded);
	}
	pageHandleScroll() {
		let e;
		this.sTop = Utils.GetScrollTop()
		this.cTop += .1 * (this.sTop - this.cTop)
		this.pTop = -this.cTop
		if (document.querySelector('.js-smooth')) document.querySelector('.js-smooth').style[this.transform] = 'translate3d(0, ' + this.pTop + 'px, 0)'
	}
}
