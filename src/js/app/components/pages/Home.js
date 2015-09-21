import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'
import TweenMax from 'gsap'

export default class Home extends Page {

	constructor(props) {
		super(props)
		this.props = props
	}

	componentDidMount() {
		super.componentDidMount()
		
		this._canvas = document.querySelector('.canvas')
		this._overlay = document.querySelector('.bg-video__overlay')
		this._video = document.querySelector('.home__video')

		if (this._canvas && this.props.oldHash === undefined) {
			this._canvas.style.display = 'block';
			TweenMax.set(dom('.front-container'), {opacity: 0});
			TweenMax.set(dom('.home'), {opacity: 0});
			TweenMax.set(dom('.cart'), {opacity: 0});
			this._overlay.classList.add('bg-video__overlay--hidden');

			this.initCanvas()
			this.initAnimation()
		}

		// this.loadVideo()
	}

	render() {
		let homeData = AppStore.homeContent()
		return (
			<div className='page page--home' ref='page-wrapper'>
				<div className='bg-video' data-src='bg-home'>
					<video autoPlay loop muted className='home__video bg-video__file'>
						<source src='/static/videos/bg-home.webm' type='video/webm' />
						<source src='/static/videos/bg-home.mp4' type='video/mp4' />
					</video>
					<div className='home__overlay bg-video__overlay'></div>
				</div>
				<div className='home'>
					<h2 className='home__title title'>Cuba has always fascinated and intrigued people from around the world and led to the foundation of the Elliott Erwitt Havana Club 7 Fellowship for Documentary Photography.</h2>
					<a className='home__discover button' href='#/fellowship'>Learn more about the fellowship</a>
				</div>
			</div>
		)
					// {Object.keys(homeData.paragraphs).map((index) => {
					// 	return (
					// 		<p className='home__paragraph text text--big' key={index}>{homeData.paragraphs[index]}</p>
					// 	)
					// })}
					// <p className='text text--big' dangerouslySetInnerHTML={{__html: homeData.content}} />
	}

	// setupAnimations() {
	// 	let wrapper = React.findDOMNode(this.refs['page-wrapper'])

	// 	// transition In
	// 	this.tlIn.from(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut })

	// 	// transition Out
	// 	this.tlOut.to(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut })

	// 	// reset
	// 	this.tlIn.pause(0)
	// 	this.tlOut.pause(0)
	// }

	initCanvas() {
		let ctx = this._canvas.getContext('2d');
		let vw = window.innerWidth;
		let vh = window.innerHeight;

		this._canvas.width = vw;
		this._canvas.height = vh;

		// background black
		ctx.beginPath();
		ctx.rect(0, 0, vw, vh);
		ctx.fillStyle = 'black';
		ctx.fill();

		this.cropDesc();
	}

	cropDesc() {

		let ctx = this._canvas.getContext('2d');
		ctx.font = "400 36px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		// ctx.fillText('Elliott Erwitt Havana Club 7', vw/2, vh/2 - 16);
		ctx.fillText('A FELLOWSHIP IS A COMMUNION OF PEOPLE', AppStore.Window.w/2, AppStore.Window.h/2 - 7);
		ctx.fillText('SHARING A COMMON PASSION.', AppStore.Window.w/2, AppStore.Window.h/2 + 32);
	}

	cropLogo() {
		let ctx = this._canvas.getContext('2d');
		this.resetCanvas();
		
		// crop logo
		ctx.font = "400 36px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		ctx.fillText('ELLIOTT ERWITT HAVANA CLUB 7', AppStore.Window.w/2, AppStore.Window.h/2 - 7);
		ctx.font = "400 36px 'HC7Craft'";
		ctx.fillText('FELLOWSHIP', AppStore.Window.w/2, AppStore.Window.h/2 + 32);
		
		ctx.beginPath();
		ctx.rect(AppStore.Window.w/2 - 244, AppStore.Window.h/2 + 19, 118, 2);
		ctx.fillStyle = 'white';
		ctx.fill();

		ctx.beginPath();
		ctx.rect(AppStore.Window.w/2 + 130, AppStore.Window.h/2 + 19, 114, 2);
		ctx.fillStyle = 'white';
		ctx.fill();
	}

	resetCanvas() {
		let ctx = this._canvas.getContext('2d');
		ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

		// background black
		ctx.globalCompositeOperation = "source-over";
		ctx.beginPath();
		ctx.rect(0, 0, AppStore.Window.w, AppStore.Window.h);
		ctx.fillStyle = 'black';
		ctx.fill();
	}

	initAnimation() {
		// this.tlEntry = new TimelineMax({onComplete: () => {
		// 	this._canvas.parentNode.removeChild(this._canvas);
		// }.bind(this)});
		// this.tlEntry.fromTo(this._video, 0.8, {opacity: 0}, {opacity: 1, ease:Power2.easeOut}, 0);
		// this.tlEntry.to(this._video, 0.8, {opacity: 0, ease:Power2.easeOut}, 4.8);
		// this.tlEntry.addCallback(() => {
		// 	this.cropLogo()
		// }.bind(this), 5.6);
		// this.tlEntry.to(this._video, 0.8, {opacity: 1, ease:Power2.easeOut}, 6.6);
		// this.tlEntry.addCallback(() => {
		// 	this._overlay.classList.remove('bg-video__overlay--hidden');
		// }.bind(this), 10.6);
		// this.tlEntry.to(this._canvas, 1, {opacity: 0, ease: Power2.easeOut}, 10.6);
		// this.tlEntry.to(dom('.front-container'), 0.4, {opacity: 1}, 11.4)
		// this.tlEntry.to(dom('.home'), 0.4, {opacity: 1}, 11.4)
		// this.tlEntry.to(dom('.cart'), 0.4, {opacity: 1}, 11.4)


		this.tlEntry = new TimelineMax({onComplete: () => {
			this._canvas.parentNode.removeChild(this._canvas);
		}.bind(this)});
		this.tlEntry.fromTo(this._video, 0.8, {opacity: 0}, {opacity: 1, ease:Power2.easeOut}, 0);
		this.tlEntry.to(this._video, 0.8, {opacity: 0, ease:Power2.easeOut}, 4.8);
		this.tlEntry.addCallback(() => {
			this.cropLogo()
		}.bind(this), 5.6);
		this.tlEntry.to(this._video, 0.8, {opacity: 1, ease:Power2.easeOut}, 6.6);
		this.tlEntry.to(this._video, 0.8, {opacity: 0, ease:Power2.easeOut}, 10.6);
		this.tlEntry.addCallback(() => {
			this.resetCanvas()
		}.bind(this), 11.4);
		this.tlEntry.set(this._video, {opacity: 1}, 11.4);
		this.tlEntry.addCallback(() => {
			this._overlay.classList.remove('bg-video__overlay--hidden');
		}.bind(this), 11.4);
		this.tlEntry.to(this._canvas, 0.8, {opacity: 0, ease: Power2.easeOut}, 12.4);
		this.tlEntry.to(dom('.front-container'), 0.8, {opacity: 1, clearProps: 'opacity'}, 12.4)
		this.tlEntry.to(dom('.home'), 0.8, {opacity: 1}, 12.4)
		this.tlEntry.to(dom('.cart'), 0.8, {opacity: 1}, 12.4)
	}

	loadVideo() {
		let src = this._video.dataset.src
		let sources = '<source src="/assets/videos/'+src+'.mp4" type="video/mp4" /><source src="/assets/videos/'+src+'.webm" type="video/webm" />'
		this.video = document.createElement('video');
		this.video.classList.add('this.video__file')
		this.video.innerHTML = sources
		this.video.muted = true
		this._video.appendChild(this.video)
		this.video.load()
		this.video.play()
	}
	
	didTransitionInComplete() {
		super.didTransitionInComplete()
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()

		// if (windowW/1.8 < windowH) dom('body').addClass('body--portrait')
		// else dom('body').removeClass('body--portrait')

		// if (window.innerHeight - document.querySelector('.home').offsetHeight < 200) {
		// 	dom('.home').addClass('home--relative')
		// } else {
		// 	dom('.home').removeClass('home--relative')
		// }
	}

}