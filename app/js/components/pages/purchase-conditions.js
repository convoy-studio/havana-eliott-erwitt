import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import AppStore from '../../stores/appStore';
let config = require('../../config');

export default class purchaseConditions extends ComponentTransition {

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
			title: this.content.purchase_terms_title,
			description: '',
			url: config.siteurl + '/terms-and-condition-of-sale',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		const spanTitleStyle = {
			'font-weight': 'bold',
			'margin': '0 !important',
			'text-align': 'left',
			'text-decoration': 'underline'
		}

		const spanSecondaryTitleStyle = {
			'font-weight': 'bold',
			'margin': '0 !important',
			'text-align': 'left'
		}

		const contactDetailsStyle = {
			'font-weight': 'bold',
			'margin': '0 !important',
			'text-align': 'left',
			'margin-bottom': '0 !important'
		}

		const content = this.content.terms_conditions

		return (
			<div className='page page--rerms page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content terms'>
					<h1 className='title title--center title--absolute'><span>{content.title}</span></h1>
					<p className='paragraph paragraph--2 paragraph--margin text'>
						{content[1]}
						<br/>{content[2]}
						<span className='paragraph__title' style={spanTitleStyle}>{content[3]}</span>
						{content[4]}
						<span className='paragraph__title' style={spanTitleStyle}>{content[5]}</span>
						{content[6]}
						<span className='paragraph__title' style={spanTitleStyle}>{content[7]}</span>
						{content[8]}
						<span style={spanSecondaryTitleStyle}>{content[9]}</span>{content[10]}
						<span style={spanSecondaryTitleStyle}>{content[11]}</span>{content[12]}
						{content[13]}
						{content[14]}
						{content[15]}
						<span style={spanSecondaryTitleStyle}>{content[16]}</span>{content[17]}
						<span style={spanSecondaryTitleStyle}>{content[18]}</span>{content[19]}<br/>
						{content[20]}<br/>
						{content[21]} 
						
						<span className='paragraph__title' style={spanTitleStyle}>{content[22]}</span>
						{content[23]}

						<span className='paragraph__title' style={spanTitleStyle}>{content[24]}</span>
						{content[25]}
						<br/>
						{content[26]}
						{content[27]}
						
						<span className='paragraph__title' style={spanTitleStyle}>{content[28]}</span>
						{content[29]}

						<span className='paragraph__title' style={spanTitleStyle}>{content[30]}</span>
						{content[31]}
						<br/>
						{content[32]}
						
						<span className='paragraph__title' style={spanTitleStyle}>{content[33]}</span>
						{content[34]}
						<br/>
						{content[35]}
						<span style={contactDetailsStyle}>{content[36]}</span>
						<span style={contactDetailsStyle}>{content[37]}</span>
						<span style={contactDetailsStyle}>{content[38]}</span>
						<span style={contactDetailsStyle}>{content[39]}</span>
						<span style={contactDetailsStyle}>{content[40]}</span>
						<span style={contactDetailsStyle}>{content[41]}</span>

						<br/>
						{content[42]}
						<br/>
						{content[43]}
						<br/>
						{content[44]}
						<br/>
						{content[45]}
						<br/>
						{content[46]}
						<br/>
						{content[47]}

						<span className='paragraph__title' style={spanTitleStyle}>{content[48]}</span>
						{content[49]}
						
						<span className='paragraph__title' style={spanTitleStyle}>{content[50]}</span>
						{content[51]}
						<br/>
						{content[52]}

						<span className='paragraph__title' style={spanTitleStyle}>{content[53]}</span>
						{content[54]}

						<span style={contactDetailsStyle}>{content[55]}</span>

						{content[56]}

						<span style={contactDetailsStyle}>{content[57]}</span>
						<span style={contactDetailsStyle}>{content[58]}</span>
						<span style={contactDetailsStyle}>{content[59]}</span>
						<span style={contactDetailsStyle}>{content[60]}</span>
						<span style={contactDetailsStyle}>{content[61]}</span>
						<span style={contactDetailsStyle}>{content[62]}</span>
						<span style={contactDetailsStyle}>{content[63]}</span>

						{content[64]}

						<span style={contactDetailsStyle}>{content[65]}</span>
					</p>
				</div>
			</div>
		);

	}
}
