import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import Utils from 'Utils'
import TweenMax from 'gsap'
import offset from 'offset'
import scrollTo from 'scrollTo'
let scroll = Utils.Scroll()
let _ = require('lodash');

export default class Fellowship extends Page {

	constructor(props) {
		super(props)
	
		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

		this.state = {
			view: 'biography'
		}

		this.PARALLAX_MARGE = 30
		this.PARALLAX_DURATION = window.innerHeight
		
		this.opacityMarge = window.innerHeight
		this.videoPlayed = false
		this.scrollIndex = 0
		this.scrollOk = false
		
		this.transform = Utils.GetSupportedPropertyName('transform')
		
		this.goToBiographyBinded = this.goToBiography.bind(this)
		this.toggleVideoBinded = this.toggleVideo.bind(this)
		
		this.rafBinded = this.raf.bind(this)
		
		this.raf()
	}

	componentDidMount() {
		super.componentDidMount()

		this._limit = document.querySelector('.js-limit')
		this._artistSection = document.querySelector('.fellowship__artist')
		this._video = document.querySelector('.fellowship__video')
		this.artistOffsetTop = document.querySelector('.fellowship__artist').offsetTop
	}

	render() {
		let that = this
		let fellowshipData = AppStore.fellowshipContent()

		return (
			<div className='page page--fellowship' ref='page-wrapper'>
				<div className='submenu'><a href='#/friends'><p className='button button--small'>Friends of the fellowship</p></a></div>
				<div className='fellowship'>
					<div className='video fellowship__video'>
						<video autoPlay loop muted className='video__file' src='./assets/videos/bg-home.webm'></video>
					</div>

					<section className='fellowship__presentation'>
						<p className='paragraph paragraph--big paragraph--center' data-ease='.0'>A fellowship is a communion of people sharing a common passion.</p>
						<p className='paragraph paragraph--small paragraph--center'>In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.</p>
						<p className='paragraph paragraph--medium paragraph--center'>Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again after 51 years – this time to initiate the fellowship with Havana Club 7.</p>
						<div className='paragraph__row js-limit'>
							<div className='paragraph__column paragraph__column--left'>
								<img className='fellowship__elliott' src='../assets/images/elliott-erwitt.jpg' />
							</div>
							<div className='paragraph__column'>
								<p className='paragraph paragraph--small'>A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.</p>
							</div>
						</div>
						<p className='paragraph paragraph--medium paragraph--center'>In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy.</p>
						<div className='paragraph__row'>
							<div className='paragraph__column'>
								<p className='paragraph paragraph--small'>In addition to the proceeds from print sales Havana Club 7 will fund a similar amount to give more photographers the chance to tell the story of Cuba.</p>
							</div>
							<div className='paragraph__column paragraph__column--right'>
								<img className='fellowship__elliott' src='../assets/images/prints/ERE2015002W00033-36A_medium.jpg' />
							</div>
						</div>
						<p className='paragraph paragraph--small paragraph--center'>The following fellowship photographers will be selected by a committee headed by Elliott Erwitt comprising of Cuban and international photography professionals ensuring the next fellow will continue the legacy of cuba and the human condition in Cuba through documentary photography and give us their own vision.</p>
					</section>
					<div className='discover fellowship__discover' onClick={this.goToBiographyBinded}>
						<div className='shop__scroll button button--center button--small'>Discover Elliott Erwitt's biography</div>
						<div className='discover__arrow'><div className='arrow'></div></div>
					</div>
					<section className='fellowship__artist'>
						<p className='fellowship__artistname paragraph paragraph--big paragraph--center' data-ease='.0'>ELLIOTT ERWITT’S BIOGRAPHY</p>
						<div className='paragraph__row'>
							<div className='paragraph__column'>
								<p className='paragraph paragraph--small'>Elliott Erwitt is one of the world’s most popular and admired photographers. A visual poet and humorist of everyday life, he has created some of the most memorable images of our time, from his observations of daily life at street level, to portraits of the iconic personalities including Marilyn Monroe on the set of the film The Misfits and Truman Capote’s epic 1966 Black and White Ball in New York City. He has photographed Khrushchev and Nixon arguing in Moscow, Fidel Castro and Che Guevara in Havana and President JFK in the Oval office.</p>
							</div>
							<div className='paragraph__column' onClick={this.toggleVideoBinded}>
								<video className='fellowship__interview' src='./assets/videos/bg-home.webm'></video>
								<p className='fellowship__play enabled'>play video</p>
							</div>
						</div>
						<p className='paragraph paragraph--small paragraph--center'>Born in Paris in 1928 to Russian parents, Erwitt moved to the US with his family in 1939 and it was there that he met Edward Steichen and Roy Stryker. Recruited to Magnum Photos by Robert Capa in 1953 Erwitt has been a member of the prestigious agency ever since and has served several terms as its president.</p>
						<div className='paragraph__row'>
							<div className='paragraph__column'>
								<p className='paragraph'><a className='fellowship__button button button--center button--small' href='http://www.elliotterwitt.com' target='_blank'>Elliott Erwitt official website</a></p>
							</div>
							<div className='paragraph__column'>
								<p className='paragraph paragraph--small'>To date Erwitt has produced more than 25 photography books including Eastern Europe (1965), The Private Experience (1974), Personal Exposures (1988), To the Dogs (1992), and Personal Best (2010). His photographs have been featured in solo shows all over the world, including at the ICP and The Museum of Modern Art, New York; The Art Institute of Chicago; The Barbican, London, and The Reina Sofia Museum, Madrid. Erwitt lives and works in New York City and likes children and dogs.</p>
							</div>
						</div>
						<a href='#/project/elliott-erwitt' className='fellowship__button button button--center button--small'>Discover his project</a>
					</section>
				</div>
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
		if (this._video && this._limit) {
			this.limitOffset = offset(this._limit)
			this.limitTop = this.limitOffset.top + this.limitOffset.height / 2
			// this.videoOpacity = 1 - (this.limitOffset.top - this.opacityMarge) / (-this.opacityMarge)
			this.videoOpacity = 1 - (this.limitTop - this.opacityMarge) / (-this.opacityMarge)
			this._video.style.opacity = this.videoOpacity
		}

		_(dom('.paragraph')).forEach((el, index) => {
			this.ease = el.dataset.ease || 0.3
			this.limitOffset = offset(el)
			// this.limitTop = this.limitOffset.top - window.innerHeight + this.PARALLAX_MARGE
			this.limitTop = this.limitOffset.top - window.innerHeight
			this.coef = Utils.Interval(this.limitTop / (-this.PARALLAX_DURATION - this.limitOffset.height), 0, 1)
			this.elY = (1-this.coef) * 200 * this.ease
			// el.style.opacity = this.elOpacity
			el.style[this.transform] = ('translate(0px, '+ this.elY +'px) translateZ(0px)')
		}).value();
	}

	toggleVideo() {
		if (this.videoPlayed) {
			document.querySelector('.fellowship__interview').pause()
			dom('.fellowship__play').addClass('enabled')
		} else {
			document.querySelector('.fellowship__interview').play()
			dom('.fellowship__play').removeClass('enabled')
		}
		this.videoPlayed = !this.videoPlayed
	}

	goToBiography() {
		this.artistOffsetTop = document.querySelector('.fellowship__artist').offsetTop
		TweenMax.to(window, 0.6, {scrollTo:{y: (this.artistOffsetTop - 40)}, ease:Power2.easeOut})
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
