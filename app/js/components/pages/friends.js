import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import AppStore from '../../stores/appStore';
let config = require('../../config');

export default class Friends extends ComponentTransition {

	componentWillMount() {
		this.content = AppStore.getContent()
	}

	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();
		let logo = document.querySelector('.header__logo');

		TweenMax.fromTo(logo, 0.3, {opacity:1}, {opacity:0, ease:Power2.easeIn});
		this.enterTl = new TimelineMax({delay:0.3, onComplete:()=>{
			logo.style.display = 'none';
		}});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn}, 0);
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
	
	}

	render() {

		let seo = {
			title: this.content.friends_title,
			description: this.content.friends_description,
			url: config.siteurl + '/friends-of-fellowship',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return (
			<div className='page page--friends page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='fellowship__submenu submenu'><Link to={AppStore.getLink('/fellowship')} className='button'>{this.content.fellowship_back}</Link></div>
				<h1 className='title title--center title--absolute'><span>{this.content.fellowship_submenu}</span></h1>
				<div className='page__content friends'>
					<p className='text'>{this.content.friends_looking}</p>
					<br/>
					<p className='text text--center'>{this.content.friends_below}</p>
					<ul className='friends__sponsors'>
						<li className='friends__sponsor friends__sponsor--fototeca'>
							<a href='http://www.fototecadecuba.com/' target='_blank'><img src='/static/img/fototeca_de_cuba.jpg'/></a>
						</li>
						<li className='friends__sponsor friends__sponsor--ee'>
							<a href='http://www.elliotterwitt.com/' target='_blank'>{this.content.fellowship_biography_2.toUpperCase()}</a>
						</li>
						<li className='friends__sponsor friends__sponsor--icop'>
							<a href='http://www.icp.org/' target='_blank'><img src='/static/img/international-center-of-photography.jpg'/></a>
						</li>
						<li className='friends__sponsor friends__sponsor--unseen'>
							<a href='http://unseenamsterdam.com/' target='_blank'><img src='/static/img/unseen_photo_fair.jpg'/></a>
						</li>
					</ul>
				</div>
			</div>
		);

	}

}