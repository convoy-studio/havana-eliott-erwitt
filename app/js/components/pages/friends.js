import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import { Link } from 'react-router';
let config = require('../../config');

export default class Friends extends ComponentTransition {

	componentWillMount() {
		
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
			title: 'Elliott Erwitt Havana Club 7 Fellowship | Friends',
			description: 'Lorem ipsum dolor sit amet',
			url: config.siteurl + '/friends',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		return (
			<div className='page page--friends page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='fellowship__submenu submenu'><Link to='/fellowship' className='button'>Back to fellowship</Link></div>
				<h1 className='title title--center title--absolute'>Friends of fellowship</h1>
				<div className='page__content friends'>
					<h2 className='friends__intro title'>THE FELLOWSHIP IS ALWAYS LOOKING FOR FRIENDS SHARING THE PASSION FOR GREAT DOCUMENTARY PHOTOGRAPHY.</h2>
					<p className='text'>Below you can see some of our friends.</p>
					<ul className='friends__sponsors'>
						<li className='friends__sponsor friends__sponsor--fototeca'>
							<img src='/static/img/fototeca_de_cuba.png'/>
						</li>
						<li className='friends__sponsor friends__sponsor--ee'>
							<img src='/static/img/ee_official.png'/>
						</li>
						<li className='friends__sponsor friends__sponsor--icop'>
							<img src='/static/img/international-center-of-photography.png'/>
						</li>
						<li className='friends__sponsor friends__sponsor--unseen'>
							<img src='/static/img/unseen_photo_fair.png'/>
						</li>
					</ul>
				</div>
			</div>
		);

	}

}