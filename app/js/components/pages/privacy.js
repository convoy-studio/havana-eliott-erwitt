import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
let config = require('../../config');

export default class Privacy extends ComponentTransition {

	componentWillMount(){
		
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
			title: 'Privacy policy | Elliott Erwitt Havana Club 7 Fellowship',
			description: '',
			url: config.siteurl + '/privacy-policy',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		return (
			<div className='page page--privacy page--classic' ref='view'>
				<Seo seo={seo} />
				<div className='page__content privacy'>
					<h1 className='title title--center title--absolute'>Privacy Policy</h1>
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