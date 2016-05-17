import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import AppStore from '../../stores/appStore';
let config = require('../../config');

export default class Privacy extends ComponentTransition {

	componentWillMount(){
		this.content = AppStore.getContent()
	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');
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
			title: this.content.privacy_title,
			description: '',
			url: config.siteurl + '/privacy-policy',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return (
			<div className='page page--privacy page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content privacy'>
					<h1 className='title title--center title--absolute'><span>{this.content.footer_privacy}</span></h1>
					<p className='paragraph paragraph--2 paragraph--margin text'>
						The personal data you provide us when you subscribe to our newsletter will be incorporated into a file of which the Fundación Elliott Erwitt Havana Club 7 Fellowship (with address at Calle Manuel Marañón 8, 28043 Madrid) will be the data controller for the purpose of managing your request and, if so requested or authorized, to keep you informed of news about our activity. You can exercise your rights of access, rectification, cancellation and opposition by sending an email to contact@havana-fellowship.com.
					</p>
					<p className='paragraph paragraph--2 paragraph--margin text'>
					Los datos personales que usted nos facilite en caso de suscribirse a nuestra newsletter se incorporarán a un fichero del que es responsable la Fundación Elliott Erwitt Havana Club 7 Fellowship, con dirección en Calle Manuel Marañón 8, 28043 Madrid, para gestionar la solicitud correspondiente y, en caso de así solicitarlo o autorizarlo, mantenerle informado de novedades sobre nuestra actividad. Usted podrá ejercer sus derechos de acceso, rectificación, cancelación y oposición dirigiéndose a contact@havana-fellowship.com.
					</p>
				</div>
			</div>
		);

	}
}
