import React, { Component } from 'react';
import ComponentResize from './componentResize';

export default class ComponentTransition extends ComponentResize {

	componentWillAppear(callback) {

		setTimeout(callback, 1); // need at least one tick to fire transition
	
	}

	componentDidAppear() {

		this._enterStyle();

	}

	componentWillEnter(callback) {

		setTimeout(callback, 1);

	}

	componentDidEnter() {

		this._enterStyle();

	}

	componentWillLeave(callback) {
	
		this._leaveStyle(callback);
	
	}
	
	componentDidLeave() {
		
	
	}
	
	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();
		let logo = document.querySelector('.header__logo');
		let hamburger = document.querySelector('.hamburger');
		let body = document.querySelector('body');

		logo.style.display = 'table';
		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn}, 0);
		this.enterTl.to(logo, 0.3, {opacity:1, ease:Power2.easeIn}, 0);
		if (body && body.classList.contains('js-mobile')) this.enterTl.set(logo, {width:window.innerWidth, backgroundColor:'#000000'}, 0);
		this.enterTl.set(hamburger, {backgroundColor:'#000000'}, 0);
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
	
	}

}