import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import AppStore from '../../stores/appStore';
import Utils from '../../utils/utils';
import offset from '../../utils/offset';
import YouTube from 'react-youtube';
let raf = Utils.raf();
let config = require('../../config');
const keys = {37: 1, 38: 1, 39: 1, 40: 1};

export default class Fellowship extends ComponentTransition {

	componentWillMount() {

		super.componentWillMount();

		this.vw = 0;
		this.vh = 0;
		if(typeof window !== 'undefined') {
			this.vw = window.innerWidth;
			this.vh = window.innerHeight;
			this.isIE = this.msieversion();

			if (window.innerWidth < 768) {
				this.orientationChange();
				window.addEventListener('orientationchange', this.orientationChange.bind(this), false);
			}
		}

		if(typeof navigator !== 'undefined') {
			this.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		}

		// binded
		this.raf = this.raf.bind(this);
		this.showInterview = this.showInterview.bind(this);
		this.hideInterview = this.hideInterview.bind(this);
		this.onImageLoaded = this.onImageLoaded.bind(this);


		// const
		this.PARALLAX_MARGE = 30;
		this.PARALLAX_DURATION = this.vh;
		
		// vars
		this.eShow = [];
		this.speed = .2;
		this.nImageLoaded = 0;
		this.sTop = 0;
		this.cTop = 0;
		this.eTop = 0;
		this.videoPlayed = false;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = Utils.getSupportedPropertyName('transform');

		this.content = AppStore.getContent()

	}

	msieversion() {

		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			return true;
		} else {
			return false;
		}

	}

	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();
		let logo = document.querySelector('.header__logo');
		// let hamburger = document.querySelector('.hamburger');
		let body = document.querySelector('body');
		let footer = document.querySelector('.footer');

		logo.style.display = 'table';
		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn}, 0);
		this.enterTl.to(logo, 0.3, {opacity:1, ease:Power2.easeIn}, 0);
		if (body && body.classList.contains('js-mobile')) {
		// 	this.enterTl.set(logo, {width:window.innerWidth, backgroundColor:'#000000'}, 0);
			footer.style.display = 'none';
		}
		// this.enterTl.set(hamburger, {backgroundColor:'#000000'}, 0);
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		let footer = document.querySelector('.footer');

		footer.style.display = 'block';
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
	
	}

	componentDidMount() {

		if(typeof document !== 'undefined') {
			this.body = document.querySelector('body');
			this.page = document.querySelector('.page--fellowship');
			this.fellowship = document.querySelector('.fellowship');
			this.overlay = document.querySelector('.bg-video__overlay');
			this.video = document.querySelector('.youtube-wrapper');
			this.back = document.querySelector('.fellowship__back');
			this.bg = document.querySelector('.fellowship__bg');
			this.images = document.querySelectorAll('.fellowship img');
			this.buttonEe = document.querySelector('.button--ee');
			this.jsReveal = document.querySelectorAll('.js-reveal');
			this.menu = document.querySelector('.fellowship__menu');
			this.header = document.querySelector('.header');
			this.footerHack = document.querySelector('.footer-hack');

			this.page.style.height = this.fellowship.offsetHeight + 'px';
		}

		if (this.isIE) {
			// this.refs.backgroundVideo.getDOMNode().style.display = 'none';
			this.refs.backgroundVideo.getDOMNode().style.visibility = 'hidden';
		}

		this.resize();
		this.loadImages();
		this.raf();

	}

	componentWillUnmount() {

		if(typeof document !== 'undefined') {
			document.querySelector('body').classList.remove('frozen');
		}

		if(typeof window !== 'undefined') {
			window.cancelAnimationFrame(this.scrollRaf);
			window.removeEventListener('orientationchange', this.orientationChange.bind(this), false);
			this.enableScroll();
		}

	}

	render(){

		let seo = {
			title: this.content.fellowship_title,
			description: this.content.fellowship_description,
			url: config.siteurl + '/fellowship',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return (
			<div className='page page--fellowship' ref='view'>
				<Seo seo={seo} />
				<div className='fellowship__submenu submenu'><Link to={AppStore.getLink('/friends-of-fellowship')} className='button'>{this.content.fellowship_submenu}</Link></div>

				<div className='bg-video fellowship__video' ref='backgroundVideo'>
					<div className='youtube-wrapper'>
						<img src={config.siteurl + '/assets/images/video-background.jpg'} />
					</div>
					<div className='fellowship__bg'></div>
					<div className='bg-video__overlay'></div>
				</div>
				
				<div className='fellowship__back button' onClick={this.hideInterview}>{this.content.fellowship_back}</div>

				<div className='fellowship'>
					<div className='fellowship__intro'>
						<h2 className='title js-reveal'>{this.content.fellowship_intro_1}</h2>
						<p className='paragraph paragraph--2 text js-reveal' dangerouslySetInnerHTML={{__html: this.content.fellowship_intro_2}}></p>
						<div className='fellowship__watch button button--margin js-reveal' onClick={this.showInterview}>{this.content.fellowship_intro_3}</div>
						<h2 className='title js-reveal'>{this.content.fellowship_intro_4}</h2>
						<p className='paragraph paragraph--2 text js-reveal' dangerouslySetInnerHTML={{__html: this.content.fellowship_intro_5}}></p>
					</div>
					<div className='fellowship__biography'>
						<h2 className='title js-reveal'>{this.content.fellowship_biography_1}</h2>
						<div className='row'>
							<div className='column'>
								<img className='fellowship__elliott js-reveal' src='/static/img/elliott-erwitt.jpg'/>
								<a className='button button--margin button--ee js-reveal' href='http://www.elliotterwitt.com' target='_blank'>{this.content.fellowship_biography_2}</a>
							</div>
							<div className='column'>
								<p className='paragraph text js-reveal'>{this.content.fellowship_biography_3}</p>
								<p className='paragraph text js-reveal'>{this.content.fellowship_biography_4}</p>
								<p className='paragraph text js-reveal'>{this.content.fellowship_biography_5}</p>
							</div>
						</div>
						<Link to={AppStore.getLink('/photography/elliott_erwitt')} className='fellowship__discover button js-reveal'>{this.content.discover_project}</Link>
					</div>
				</div>

				<div className='fellowship__menu'>
					<div className='fellowship__item button' onClick={this.showInterview}>{this.content.fellowship_interview_1}</div>
					<Link to={AppStore.getLink('/photography/elliott_erwitt')} className='fellowship__item button'>{this.content.discover_project}</Link>
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

	raf() {

		if (this.scrollIndex % 3) this.scrollOk = true;
		else this.scrollOk = true;
		this.scrollIndex++;

		if (this.scrollOk) {
			this.handleScroll();
		}

		this.scrollRaf = raf(this.raf);

	}

	handleScroll() {

		let e;
		this.sTop = Utils.getScrollTop();
		this.cTop += .1 * (this.sTop - this.cTop);
		e = -this.cTop;

		if (this.fellowship) {
			this.fellowship.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';
		}

		_(this.jsReveal).forEach((el, index) => {
			this.lTop = offset(el).top;
			
			if (!this.eShow[index]) {
				this.eShow[index] = false;
			}

			// in viewport
			if (this.lTop - window.innerHeight < 0 && !this.eShow[index]) {
				this.eShow[index] = true;
				TweenMax.to(el, 1.2, {y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random()*0.2});
			}
			
			// off viewport
			if (this.lTop - window.innerHeight > 0 && this.eShow[index]) {
				this.eShow[index] = false;
				TweenMax.set(el, {y: 70, opacity: 0});
			}

		}).value();

	}

	loadImages() {

		let file;
		this.max = _.size(this.images);

		_(this.images).forEach((img, index) => {
			file = new Image();
			file.onload = this.onImageLoaded;
			file.src = img.src;
		}.bind(this)).value();

	}

	onImageLoaded(e) {

		this.nImageLoaded++;

		if (this.nImageLoaded >= this.max) {
			this.page.style.height = this.fellowship.offsetHeight + 'px';
		}

	}

	showInterview() {

		this.disableScroll();
		this.interviewShown = true;
		var iframe = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KcjK36YKLqY?autoplay=1&showinfo=0&rel=0"></iframe>';
		this.video.innerHTML = iframe;
		if (this.body.classList.contains('js-mobile')) this.footerHack.style.visibility = 'hidden';
		this.video.classList.add('open');
		this.fellowship.classList.add('fellowship--hidden');
		this.overlay.classList.add('bg-video__overlay--hidden');
		this.bg.classList.add('fellowship__bg--hidden');
		this.back.classList.add('fellowship__back--visible');
		if (this.isIE) {
			// this.refs.backgroundVideo.getDOMNode().style.display = 'block';
			this.refs.backgroundVideo.getDOMNode().style.visibility = 'visible';
		}

	}

	hideInterview() {

		this.enableScroll();
		this.interviewShown = false;
		setTimeout(()=>{
			this.video.innerHTML = '<img src="' + config.siteurl + '/assets/images/video-background.jpg" />';
		}, 200)
		if (this.body.classList.contains('js-mobile')) this.footerHack.style.visibility = 'visible';
		this.video.classList.remove('open');
		this.fellowship.classList.remove('fellowship--hidden');
		this.overlay.classList.remove('bg-video__overlay--hidden');
		this.bg.classList.remove('fellowship__bg--hidden');
		this.back.classList.remove('fellowship__back--visible');
		if (this.isIE) {
			// this.refs.backgroundVideo.getDOMNode().style.display = 'none';
			this.refs.backgroundVideo.getDOMNode().style.visibility = 'hidden';
		}

	}

	resize() {

		let windowW = AppStore.Window.w;
		let windowH = AppStore.Window.h;
		super.resize();

		// resize youtube video
		this.video.style.height = AppStore.Window.h - 206 + 'px';
		this.video.style.width = (AppStore.Window.h - 206) * 16 / 9 + 'px';

		if (windowW < 958) {
			if (document.querySelector('.page--fellowship')) document.querySelector('.page--fellowship').style.height = 'auto'
			window.cancelAnimationFrame(this.scrollRaf)
			if (this.scrollRaf) {
				this.scrollRaf = null;
			}
			this.buttonEe.style.display = 'none';

			// resize youtube video
			this.video.style.width = AppStore.Window.w + 'px';
			this.video.style.height = (AppStore.Window.w * 9 / 16) + 'px';
		} else {
			if (this.fellowship) {
				document.querySelector('.page--fellowship').style.height = this.fellowship.offsetHeight + 'px'
			}
			if (!this.scrollRaf) {
				this.raf()
			}
			this.buttonEe.style.display = 'block';

			// resize youtube video
			this.video.style.height = AppStore.Window.h - 206 + 'px';
			this.video.style.width = (AppStore.Window.h - 206) * 16 / 9 + 'px';
		}

	}

	orientationChange() {

		if (window.orientation === 90 || window.orientation === -90) {
			if (this.refs.youtube && this.interviewShown) {
				if (this.header) this.header.style.display = 'none';
				if (this.menu) this.menu.style.display = 'none';
				if (this.back) this.back.style.display = 'none';
				document.getElementById('landscape').style.display = 'none';
			} else {
				document.getElementById('landscape').style.display = 'block';
			}
		} else {
			if (this.header) this.header.style.display = 'block';
			if (this.menu) this.menu.style.display = 'table';
			if (this.back) this.back.style.display = 'block';
			document.getElementById('landscape').style.display = 'none';
		}

	}

	preventDefault(e) {

		e = e || window.event;
		if (e.preventDefault) e.preventDefault();
		e.returnValue = false;  
	
	}

	preventDefaultForScrollKeys(e) {

		if (keys[e.keyCode]) {
			this.preventDefault(e);
			return false;
		}
	
	}

	disableScroll() {

		// if (window.addEventListener) // older FF
		// 	window.addEventListener('DOMMouseScroll', this.preventDefault.bind(this), false);
		// window.onwheel = this.preventDefault; // modern standard
		// window.onmousewheel = document.onmousewheel = this.preventDefault.bind(this); // older browsers, IE
		// window.ontouchmove  = this.preventDefault.bind(this); // mobile
		// document.onkeydown  = this.preventDefaultForScrollKeys.bind(this);
		document.querySelector('body').classList.add('frozen');
	
	}

	enableScroll() {

		// if (window.removeEventListener)
		// 	window.removeEventListener('DOMMouseScroll', this.preventDefault.bind(this), false);
		// window.onmousewheel = document.onmousewheel = null; 
		// window.onwheel = null; 
		// window.ontouchmove = null;  
		// document.onkeydown = null;  
		document.querySelector('body').classList.remove('frozen')
	
	}

}