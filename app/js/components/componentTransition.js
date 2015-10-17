import React, { Component } from 'react';
import ComponentResize from './componentResize';

export default class ComponentTransition extends ComponentResize {

	componentWillAppear(callback) {

		// console.log('componentWillAppear');
		setTimeout(callback, 1); // need at least one tick to fire transition
	
	}

	componentDidAppear() {

		// console.log('componentDidAppear');
		this._enterStyle();

	}

	componentWillEnter(callback) {

		// console.log('componentWillEnter');
		setTimeout(callback, 1);

	}

	componentDidEnter() {

		// console.log('componentDidEnter');
		this._enterStyle();

	}

	componentWillLeave(callback) {
	
		// console.log('componentWillLeave');
		this._leaveStyle(callback);
		// setTimeout(callback, 300); // matches transition duration
	
	}
	
	componentDidLeave() {
		
		// console.log('componentDidLeave');
	
	}
	
	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();

		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn});
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
	
	}

}