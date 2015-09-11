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

		if (this._canvas && this.props.oldHash === undefined) {
			this._canvas.style.display = 'block';
			TweenMax.set(dom('.front-container'), {opacity: 0});
			TweenMax.set(dom('.home'), {opacity: 0});
			TweenMax.set(dom('.cart'), {opacity: 0});
			this._overlay.classList.add('bg-video__overlay--hidden');

			this.initCanvas()
			this.initAnimation()
		}

		// this._video = document.querySelector('.video')
		// this.loadVideo()
	}

	render() {
		let homeData = AppStore.homeContent()
		return (
			<div className='page page--home' ref='page-wrapper'>
				<div className='bg-video' data-src='bg-home'>
					<video autoPlay loop muted className='bg-video__file'>
						<source src='/static/videos/bg-home.webm' type='video/webm' />
						<source src='/static/videos/bg-home.mp4' type='video/mp4' />
					</video>
					<div className='home__overlay bg-video__overlay'></div>
				</div>
				<div className='home'>
					<h2 className='title'>Cuba has always fascinated and intrigued people from around the world and led to the foundation of the Elliott Erwitt Havana Club 7 Fellowship for Documentary Photography.</h2>
					<a className='button' href='#/fellowship'>Learn more about the fellowship</a>
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

		// crop logo
		ctx.font = "400 72px 'hc7modern'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		// ctx.fillText('Elliott Erwitt Havana Club 7', vw/2, vh/2 - 16);
		ctx.fillText('ELLIOTT ERWITT HAVANA CLUB 7', vw/2, vh/2 - 16);
		ctx.font = "400 72px 'Stanley'";
		ctx.fillText('Fellowship', vw/2, vh/2 + 68);
	}

	initAnimation() {
		this.tlEntry = new TimelineMax({delay: 4, onComplete: () => {
			this._canvas.parentNode.removeChild(this._canvas);
		}.bind(this)});
		this.tlEntry.addCallback(() => {
			this._overlay.classList.remove('bg-video__overlay--hidden');
		}.bind(this), 0);
		this.tlEntry.to(this._canvas, 1, {opacity: 0, ease: Power2.easeOut});
		this.tlEntry.to(dom('.front-container'), 0.4, {opacity: 1}, 0.6)
		this.tlEntry.to(dom('.home'), 0.4, {opacity: 1}, 0.6)
		this.tlEntry.to(dom('.cart'), 0.4, {opacity: 1}, 0.6)
	}

	loadVideo() {
		let src = this._video.dataset.src
		let sources = '<source src="/assets/videos/'+src+'.mp4" type="video/mp4" /><source src="/assets/videos/'+src+'.webm" type="video/webm" />'
		let video = document.createElement('video');
		video.classList.add('video__file')
		video.innerHTML = sources
		video.muted = true
		this._video.appendChild(video)
		video.load()
		video.play()
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