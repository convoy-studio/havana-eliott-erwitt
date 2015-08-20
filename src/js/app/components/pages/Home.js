import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'
import TweenMax from 'gsap'

export default class Home extends Page {

	constructor(props) {
		super(props)

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

	}

	componentDidMount() {
		super.componentDidMount()
		
		this._canvas = document.querySelector('.canvas')

		if (this._canvas) {
			TweenMax.set(dom('.front-container'), {opacity: 0});
			TweenMax.set(dom('.home__content'), {opacity: 0});
			TweenMax.set(dom('.cart'), {opacity: 0});

			this.showPageBinded = this.showPage.bind(this)
			this.initCanvas()
		}
	}

	render() {
		let homeData = AppStore.homeContent()
		return (
			<div className='page page--home' ref='page-wrapper'>
				<div className='video'>
					<video autoPlay loop muted className='video__file' src='./assets/videos/bg-home.webmsd.webm'></video>
				</div>
				<div className='home__content'>
					<p className='text text--title' dangerouslySetInnerHTML={{__html: homeData.content}} />
				</div>
			</div>
		)
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
		ctx.font = "400 72px 'PxGrotesk'";
		ctx.textAlign = "center";
		ctx.globalCompositeOperation = "destination-out";
		ctx.fillText('Elliott Erwitt Havana Club 7', vw/2, vh/2 - 16);
		ctx.font = "400 72px 'Stanley'";
		ctx.fillText('Fellowship', vw/2, vh/2 + 68);

		TweenMax.to(this._canvas, 4, {x: -vw, ease: Power2.easeOut, delay: 4, onComplete: this.showPageBinded});
	}
	
	showPage() {
		TweenMax.to(dom('.front-container'), 0.4, {opacity: 1});
		TweenMax.to(dom('.home__content'), 0.4, {opacity: 1});
		TweenMax.to(dom('.cart'), 0.4, {opacity: 1});
		this._canvas.remove()
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
	}

}