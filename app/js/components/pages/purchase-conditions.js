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

		return (
			<div className='page page--rerms page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content terms'>
					<h1 className='title title--center title--absolute'><span>Terms and condition of sale</span></h1>
					<p className='paragraph paragraph--2 paragraph--margin text'>
						<span className='paragraph__title'>Title 1</span>
						Alignat empore, si dio cor alis aliquae. Ut assimus resti dem sequi omnistrum quam inum cullab in corioss intiae sedit, in parchillat et pore pliatis sernam rem eum qui alibusda porum et atiaeru mquiatquas is intendia cum remqui dolorias sim iur? Atium experi occati sumquam qui bea aut iliquatum nonsequ issime et et la et abo. Omnihilitam qui con renda nest, corro beat maio et volesci assitiis in con cumqui aceaqua tatent audis dolore, sequunti di ant magnihil explicae non pedicat estota di con consequae laborum quiat audam, officit, sequam, alis eum fuga. Nest, assectas et ullatem quas alit volore nonest lati sediste cabore volupitatem ipsum voluptis mo cus, occae. Inveliquias aliaspedis ea vellupta volor sectest iatiur sam assum quiatus ectest iatiur sam assum.
						<span className='paragraph__title'>Title 2</span>
						Alignat empore, si dio cor alis aliquae. Ut assimus resti dem sequi omnistrum quam inum cullab in corioss intiae sedit, in parchillat et pore pliatis sernam rem eum qui alibusda porum et atiaeru mquiatquas is intendia cum remqui dolorias sim iur? Atium experi occati sumquam qui bea aut iliquatum nonsequ issime et et la et abo. Omnihilitam qui con renda nest, corro beat maio et volesci assitiis in con cumqui aceaqua tatent audis dolore, sequunti di ant magnihil explicae non pedicat estota di con consequae laborum quiat audam, officit, sequam, alis eum fuga. Nest, assectas et ullatem quas alit volore nonest lati sediste cabore volupitatem ipsum voluptis mo cus, occae. Inveliquias aliaspedis ea vellupta volor sectest iatiur sam assum quiatus ectest iatiur sam assum.
						<span className='paragraph__title'>Title 3</span>
						Alignat empore, si dio cor alis aliquae. Ut assimus resti dem sequi omnistrum quam inum cullab in corioss intiae sedit, in parchillat et pore pliatis sernam rem eum qui alibusda porum et atiaeru mquiatquas is intendia cum remqui dolorias sim iur? Atium experi occati sumquam qui bea aut iliquatum nonsequ issime et et la et abo. Omnihilitam qui con renda nest, corro beat maio et volesci assitiis in con cumqui aceaqua tatent audis dolore, sequunti di ant magnihil explicae non pedicat estota di con consequae laborum quiat audam, officit, sequam, alis eum fuga. Nest, assectas et ullatem quas alit volore nonest lati sediste cabore volupitatem ipsum voluptis mo cus, occae. Inveliquias aliaspedis ea vellupta volor sectest iatiur sam assum quiatus ectest iatiur sam assum.
					</p>
				</div>
			</div>
		);

	}
}
