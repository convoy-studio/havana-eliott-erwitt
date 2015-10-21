import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import AppStore from '../../stores/appStore';
import AppActions from '../../actions/appActions';
import homeData from '../../../data/home';
let config = require('../../config');

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

	}

	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();
		let logo = document.querySelector('.header__logo');

		logo.style.display = 'table';
		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn}, 0);
		this.enterTl.to(logo, 0.3, {opacity:1, ease:Power2.easeIn}, 0);
		this.enterTl.set(logo, {backgroundColor: 'transparent'}, 0);
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		let logo = document.querySelector('.header__logo');

		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
	
	}

	componentDidMount() {

		super.componentDidMount();

		this.body = document.querySelector('body');
		this.canvas = document.querySelector('.canvas');
		this.overlay = document.querySelector('.bg-video__overlay');
		this.background = document.querySelector('.home__bg');

		this.fontSize = 36;
		this.fontSizeMobile = 24;
		this.fontSizeLogoMobile = 20;

		if (AppStore.getSplash()) {
			AppActions.disableSplash();

			this.overlay.classList.add('bg-video__overlay--hidden');

			// TweenMax.set(document.querySelector('.header'), {opacity: 0});
			// TweenMax.set(document.querySelector('.footer'), {opacity: 0});
			TweenMax.set(document.querySelector('.home'), {opacity: 0});
			TweenMax.to(this.canvas, 0.8, {backgroundColor: 'transparent', delay: 0.2});
			
			this.initSplash();
			this.initAnimation();
		}

	}

	render() {
		
		let seo = {
			title: 'Elliott Erwitt Havana Club 7 Fellowship',
			description: 'Lorem ipsum dolor sit amet',
			url: config.siteurl,
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
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
				// <canvas className='canvas'></canvas>

		return (
			<div className='page page--home' ref='view'>
				<Seo seo={seo} />
				<div className='home-wrapper'>
					{background}
					<div className='home'>
						<h2 className='home__title title'>Cuba has always fascinated and intrigued people from around the world and led to the foundation of the Elliott Erwitt Havana Club 7 Fellowship for Documentary Photography.</h2>
						<Link className='home__discover button' to="/fellowship">Learn more about the fellowship</Link>
					</div>
				</div>
			</div>
		);

	}

	initSplash() {

		// this.resize();

		console.log('init canvas');

		let ctx = this.canvas.getContext('2d');
		let vw = window.innerWidth;
		let vh = window.innerHeight;

		this.canvas.width = vw;
		this.canvas.height = vh;

		// background black
		ctx.beginPath();
		ctx.rect(0, 0, vw, vh);
		ctx.fillStyle = 'black';
		ctx.fill();

		if (this.body && this.body.classList.contains('js-mobile')) {
			this.cropDescMobile();
		} else {
			this.cropDesc();
		}

	}

	cropDesc() {

		let ctx = this.canvas.getContext('2d');
		ctx.font = "400 "+this.fontSize+"px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		// ctx.fillText('Elliott Erwitt Havana Club 7', vw/2, vh/2 - 16);
		ctx.fillText('A FELLOWSHIP IS A COMMUNION OF PEOPLE', this.vw/2, this.vh/2 - 7);
		ctx.fillText('SHARING A COMMON PASSION.', this.vw/2, this.vh/2 + 32);

	}

	cropDescMobile() {

		let ctx = this.canvas.getContext('2d');
		ctx.font = "400 "+this.fontSizeMobile+"px 'hc7modern'";
		ctx.textAlign = "left";
		ctx.globalCompositeOperation = "destination-out";
		// ctx.fillText('Elliott Erwitt Havana Club 7', vw/2, vh/2 - 16);
		ctx.fillText('A FELLOWSHIP IS A', 20, this.vh/2 - 32);
		ctx.fillText('COMMUNION OF PEOPLE', 20, this.vh/2 - 2);
		ctx.fillText('SHARING A COMMON', 20, this.vh/2 + 28);
		ctx.fillText('PASSION.', 20, this.vh/2 + 58);

	}

	cropLogo() {

		console.log('hello')
		let ctx = this.canvas.getContext('2d');
		this.resetCanvas();
		
		// crop logo
		ctx.font = "400 "+this.fontSize+"px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		ctx.fillText('ELLIOTT ERWITT HAVANA CLUB 7', this.vw/2, this.vh/2 - 7);
		ctx.font = "400 "+this.fontSize+"px 'HC7Craft'";
		ctx.fillText('FELLOWSHIP', this.vw/2, this.vh/2 + 32);
		
		ctx.beginPath();
		ctx.rect(this.vw/2 - 244, this.vh/2 + 19, 118, 2);
		ctx.rect(this.vw/2 + 130, this.vh/2 + 19, 114, 2);
		ctx.fillStyle = 'white';
		ctx.fill();

	}

	cropLogoMobile() {

		console.log('hello mobile')
		let ctx = this.canvas.getContext('2d');
		this.resetCanvas();
		
		// crop logo
		ctx.font = "400 "+this.fontSizeLogoMobile+"px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		ctx.fillText('ELLIOTT ERWITT HAVANA CLUB 7', this.vw/2, this.vh/2 - 2);
		ctx.font = "400 "+this.fontSizeLogoMobile+"px 'HC7Craft'";
		ctx.fillText('FELLOWSHIP', this.vw/2, this.vh/2 + 20);
		
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