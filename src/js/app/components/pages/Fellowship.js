import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import Utils from 'Utils'
import TweenMax from 'gsap'
let scroll = window.requestAnimationFrame ||
			 window.webkitRequestAnimationFrame ||
			 window.mozRequestAnimationFrame ||
			 window.msRequestAnimationFrame ||
			 window.oRequestAnimationFrame ||
			 // IE Fallback, you can even fallback to onscroll
			 function(callback){ window.setTimeout(callback, 1000/60) };


export default class Fellowship extends Page {

	constructor(props) {
		super(props)
	
		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

		this.state = {
			view: 'biography'
		}
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
		this.showBiographyBinded = this.showBiography.bind(this)
		this.showInterviewBinded = this.showInterview.bind(this)
		this.rafBinded = this.raf.bind(this)
		
		this.raf()
	}

	componentDidMount() {
		super.componentDidMount()
	}

	render() {
		let that = this
		let fellowshipData = AppStore.fellowshipContent()

		return (
			<div className='page page--fellowship' ref='page-wrapper'>

				<section className='fellowship__presentation'>
					<div className='video'>
						<video autoPlay loop muted className='video__file' src='./assets/videos/bg-home.webmsd.webm'></video>
					</div>
					<div className='fellowship__desc fellowship--text text text--big'>
						{Object.keys(fellowshipData.fellowship.paragraphs).map((index) => {
							return (
								<p className='fellowship__paragraph' key={index}>{fellowshipData.fellowship.paragraphs[index]}</p>
							)
						})}
					</div>
					<div className='fellowship__discover'>
						Discover Elliott Erwitt's biography
						<div className='fellowship__scroll'><div className='arrow'></div></div>
					</div>
				</section>

				<section className='fellowship__artist'>
					<div className='fellowship__background'>
						<img className='fellowship__elliott' src='../assets/images/elliott-erwitt.jpg' />
					</div>
					{(() => {
						if (that.state.view === 'biography') { return (
							<div className='fellowship__biography fellowship--text text text--medium'>
								{Object.keys(fellowshipData.biography.paragraphs).map((index) => {
									return (
										<p className='fellowship__paragraph' key={index}>{fellowshipData.biography.paragraphs[index]}</p>
									)
								})}
							</div>
						)} else { return (
							<div className='fellowship__interview'>
								<video autoPlay className='fellowship__video' src='./assets/videos/bg-home.webmsd.webm'></video>
							</div>
						)}
					})()}
					<div className='fellowship__links'>
						{(() => {
							if (that.state.view === 'biography') { return (
								<div className='fellowship__link button button--center' onClick={that.showInterviewBinded}>Video interview</div>
							)} else { return (
								<div className='fellowship__link button button--center' onClick={that.showBiographyBinded}>Biography</div>
							)}
						})()}
						<a href='#/project/elliott-erwitt' className='fellowship__link button button--center'>His project</a>
					</div>
				</section>

			</div>
		)
	}

	raf() {
		if (this.scrollIndex % 3) this.scrollOk = true
		else this.scrollOk = true
		this.scrollIndex++

		if (this.scrollOk) {
			// let top = window.pageYOffset;
			this.handleScroll()
		}

		scroll(this.rafBinded);
	}

	handleScroll() {
		let top = Utils.GetScrollTop()
		
		if (document.querySelector('.fellowship__artist')) {
			document.querySelector('.video__file').style[this.transform] = ('translate(0px, '+ ((top/2)-(window.innerHeight/2)) +'px) translateZ(0)');
			document.querySelector('.fellowship__artist').style[this.transform] = ('translate(0px, '+ (-top/4) +'px) translateZ(0)');
			document.querySelector('.fellowship__elliott').style[this.transform] = ('translate(0px, '+ (-top/4) +'px) translateZ(0)');
		}
	}

	showInterview() {
		this.hideBiography()
		this.setState({
			view: 'interview'
		})
	}

	hideInterview() {
		dom('.fellowship__interview').addClass('fellowship__interview--hidden')
		// TweenMax.to(dom('.fellowship__interview'), 0.4, {opacity: 0});
	}

	showBiography() {
		this.hideInterview()
		this.setState({
			view: 'biography'
		})
	}

	hideBiography() {
		dom('.fellowship__biography').addClass('fellowship__biography--hidden')
		// console.log('hide bio')
		// TweenMax.to(dom('.fellowship__biography'), 0.4, {opacity: 0});
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
