import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import AppStore from '../../stores/appStore';
import AppActions from '../../actions/appActions';
import homeData from '../../../data/home';
let config = require('../../config');

let TweenMax;

export default class Home extends ComponentTransition {

	componentWillMount() {

		this.vw = 0;
		this.vh = 0;
		if(typeof window !== 'undefined') {
			this.vw = window.innerWidth;
			this.vh = window.innerHeight;
		}

		// state
		this.state = {
			isMobile: false
		};

		this.content = AppStore.getContent()

	}

	_enterStyle() {

		let el = this.refs.view.getDOMNode();
		// let logo = document.querySelector('.header__logo');
		// let hamburger = document.querySelector('.hamburger');
		let footer = document.querySelector('.footer');
		let body = document.querySelector('body');

		// logo.style.display = 'table';
		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn}, 0);
		// this.enterTl.to(logo, 0.3, {opacity:1, ease:Power2.easeIn}, 0);
		// this.enterTl.set(logo, {backgroundColor: 'transparent'}, 0);
		// this.enterTl.set(hamburger, {backgroundColor: 'transparent'}, 0);
		if (body && body.classList.contains('js-mobile')) {
			footer.style.display = 'none';
		}

	}

	_leaveStyle(callback) {

		let el = this.refs.view.getDOMNode();
		// let logo = document.querySelector('.header__logo');
		let footer = document.querySelector('.footer');

		footer.style.display = 'block';
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});

	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');

		this.body = document.querySelector('body');
		this.canvas = document.querySelector('.canvas');
		this.overlay = document.querySelector('.bg-video__overlay');
		this.background = document.querySelector('.home__bg');

		this.fontSize = 36;
		this.fontSizeMobile = 24;
		this.fontSizeLogoMobile = 20;

		console.log(AppStore.getSplash(), this.canvas)

		if (AppStore.getSplash()) {
			AppActions.disableSplash();

			this.overlay.classList.add('bg-video__overlay--hidden');

			// TweenMax.set(document.querySelector('.header'), {opacity: 0});
			// TweenMax.set(document.querySelector('.footer'), {opacity: 0});
			TweenMax.set(document.querySelector('.home'), {opacity: 0});
			TweenMax.to(this.canvas, 0.8, {backgroundColor: 'transparent', delay: 0.2});
			
			this.initSplash();
			window.onload = ()=>{
				this.initAnimation();

				// if (this.body && this.body.classList.contains('js-mobile')) {
				if (window.innerWidth < 768) {
					this.cropDescMobile();
				} else if (window.innerWidth < 1024) {
					this.cropDescTablet();
				} else {
					this.cropDesc();
				}
			}
		}

	}

	render() {

		let seo = {
			title: this.content.home_title,
			description: this.content.home_description,
			url: config.siteurl,
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		let background;
		if (AppStore.Window.w < 958) {
			background = (<div className='bg-video' data-src='bg-home'>
				<img className='home__bg' src='../assets/images/home-mobile.jpg'/>
				<div className='home__overlay bg-video__overlay'></div>
			</div>);
		} else {
			background = (<div className='bg-video' data-src='bg-home'>
				<video autoPlay loop muted className='home__bg home__video bg-video__file'>
					<source src='/static/videos/bg-home.webm' type='video/webm' />
					<source src='/static/videos/bg-home.mp4' type='video/mp4' />
				</video>
				<div className='home__overlay bg-video__overlay'></div>
			</div>);
		}

		return (
			<div className='page page--home' ref='view'>
				<Seo seo={seo} />
				<div className='home-wrapper'>
					{background}
					
					<div className='home'>
						<h2 className='home__title title'>{this.content.home_main_title}</h2>
						<Link className='home__discover button' to={AppStore.getLink("/fellowship")}>{this.content.home_discover}</Link>
					</div>
				</div>
				{(() => {
					if (typeof window !== 'undefined' && window.innerWidth <= 958) {
						return (
							<footer className='footer-hack'>
								<ul>
									<li><Link to={AppStore.getLink("/newsletter")} className="footer__button button button--footer">{this.content.footer_news}</Link></li>
									<li><Link to={AppStore.getLink("/contact")} className="footer__button button button--footer">{this.content.footer_contact}</Link></li>
									<li><Link to={AppStore.getLink("/privacy-policy")} className="footer__button button button--footer">{this.content.footer_privacy}</Link></li>
									<li><Link to={AppStore.getLink("/cookie-policy")} className="footer__button button button--footer">{this.content.footer_cookie}</Link></li>
									<li><Link to={AppStore.getLink("/terms-and-condition-of-use")} className="footer__button button button--footer">{this.content.footer_terms_conditions}</Link></li>
								</ul>
							</footer>
						)
					}
				}.bind(this))()}
			</div>
		);

	}

	initSplash() {

		// this.resize();

		let ctx = this.canvas.getContext('2d');
		let vw = window.innerWidth;
		let vh = window.innerHeight;

		this.canvas.width = vw;
		this.canvas.height = vh;

		const devicePixelRatio = window.devicePixelRatio || 1;
		const backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
							ctx.mozBackingStorePixelRatio ||
							ctx.msBackingStorePixelRatio ||
							ctx.oBackingStorePixelRatio ||
							ctx.backingStorePixelRatio || 1;

		const ratio = devicePixelRatio / backingStoreRatio;

		if (devicePixelRatio !== backingStoreRatio) {

			let oldWidth = this.canvas.width;
			let oldHeight = this.canvas.height;

			this.canvas.width = oldWidth * ratio;
			this.canvas.height = oldHeight * ratio;

			this.canvas.style.width = oldWidth + 'px';
			this.canvas.style.height = oldHeight + 'px';

			// now scale the context to counter
			// the fact that we've manually scaled
			// our canvas element
			ctx.scale(ratio, ratio);

		}

		// background black
		ctx.beginPath();
		ctx.rect(0, 0, vw, vh);
		ctx.fillStyle = 'black';
		ctx.fill();

		// if (this.body && this.body.classList.contains('js-mobile')) {
		// 	this.cropDescMobile();
		// } else {
		// 	this.cropDesc();
		// }

	}

	cropDesc() {

		let ctx = this.canvas.getContext('2d');
		this.resetCanvas();

		ctx.font = "400 "+this.fontSize+"px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		ctx.fillText(this.content.home_desc_1 + ' ' + this.content.home_desc_2, this.vw/2, this.vh/2 - 7);
		ctx.fillText(this.content.home_desc_3 + ' ' + this.content.home_desc_4, this.vw/2, this.vh/2 + 32);

	}

	cropDescTablet() {

		let ctx = this.canvas.getContext('2d');
		this.resetCanvas();

		ctx.font = "400 24px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		// ctx.fillText('Elliott Erwitt Havana Club 7', vw/2, vh/2 - 16);
		ctx.fillText(this.content.home_desc_1 + ' ' + this.content.home_desc_2, this.vw/2, this.vh/2 - 2);
		ctx.fillText(this.content.home_desc_3 + ' ' + this.content.home_desc_4, this.vw/2, this.vh/2 + 28);

	}

	cropDescMobile() {

		let ctx = this.canvas.getContext('2d');
		this.resetCanvas();

		ctx.font = "400 "+this.fontSizeMobile+"px 'hc7modern'";
		ctx.textAlign = "left";
		ctx.globalCompositeOperation = "destination-out";
		// ctx.fillText('Elliott Erwitt Havana Club 7', vw/2, vh/2 - 16);
		ctx.fillText(this.content.home_desc_1, 20, this.vh/2 - 32);
		ctx.fillText(this.content.home_desc_2, 20, this.vh/2 - 2);
		ctx.fillText(this.content.home_desc_3, 20, this.vh/2 + 28);
		ctx.fillText(this.content.home_desc_4, 20, this.vh/2 + 58);

	}

	cropLogo() {

		let ctx = this.canvas.getContext('2d');
		this.resetCanvas();

		// crop logo
		ctx.font = "400 "+this.fontSize+"px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		ctx.fillText(this.content.header_title.toUpperCase(), this.vw/2, this.vh/2 - 7);
		ctx.font = "400 "+this.fontSize+"px 'HC7Craft'";
		ctx.fillText(this.content.header_subtitle.toUpperCase(), this.vw/2, this.vh/2 + 32);
		ctx.beginPath();
		ctx.rect(this.vw/2 - 244, this.vh/2 + 19, 118, 2);
		ctx.rect(this.vw/2 + 130, this.vh/2 + 19, 114, 2);
		ctx.fillStyle = 'white';
		ctx.fill();

	}

	cropLogoMobile() {

		let ctx = this.canvas.getContext('2d');
		this.resetCanvas();

		// crop logo
		ctx.font = "400 "+this.fontSizeLogoMobile+"px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		ctx.fillText(this.content.header_title.toUpperCase(), this.vw/2, this.vh/2 - 2);
		ctx.font = "400 "+this.fontSizeLogoMobile+"px 'HC7Craft'";
		ctx.fillText(this.content.header_subtitle.toUpperCase(), this.vw/2, this.vh/2 + 20);
		ctx.beginPath();
		ctx.rect(this.vw/2 - 137, this.vh/2 + 13, 68, 1);
		ctx.rect(this.vw/2 + 70, this.vh/2 + 13, 68, 1);
		ctx.fillStyle = 'white';
		ctx.fill();

	}

	resetCanvas() {

		let ctx = this.canvas.getContext('2d');
		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// background black
		ctx.globalCompositeOperation = "source-over";
		ctx.beginPath();
		ctx.rect(0, 0, this.vw, this.vh);
		ctx.fillStyle = 'black';
		ctx.fill();

	}

	initAnimation() {

		this.tlEntry = new TimelineMax({onComplete: () => {
			this.canvas.parentNode.removeChild(this.canvas);
		}.bind(this)});
		this.tlEntry.fromTo(this.background, 0.8, {opacity: 0}, {opacity: 1, ease:Power2.easeOut}, 0);
		this.tlEntry.to(this.background, 0.8, {opacity: 0, ease:Power2.easeOut}, 4.8);
		this.tlEntry.addCallback(() => {
			if (this.body && this.body.classList.contains('js-mobile')) {
				this.cropLogoMobile()
			} else {
				this.cropLogo()
			}
		}.bind(this), 5.6);
		this.tlEntry.to(this.background, 0.8, {opacity: 1, ease:Power2.easeOut}, 6.6);
		this.tlEntry.to(this.background, 0.8, {opacity: 0, ease:Power2.easeOut}, 10.6);
		this.tlEntry.addCallback(() => {
			this.resetCanvas()
		}.bind(this), 11.4);
		this.tlEntry.set(this.background, {opacity: 1}, 11.4);
		this.tlEntry.addCallback(() => {
			this.overlay.classList.remove('bg-video__overlay--hidden');
		}.bind(this), 11.4);
		this.tlEntry.to(this.canvas, 0.8, {opacity: 0, ease: Power2.easeOut}, 12.4);
		this.tlEntry.to(document.querySelector('.header'), 0.8, {opacity: 1}, 12.4)
		this.tlEntry.to(document.querySelector('.footer'), 0.8, {opacity: 1}, 12.4)
		this.tlEntry.to(document.querySelector('.home'), 0.8, {opacity: 1}, 12.4)

	}

}
