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

		// props
		this.props = props

		// state
		this.state = {
			view: 'biography'
		}

		// function binded
		this._goToBiographyBinded = this._goToBiography.bind(this)
		this._toggleVideoBinded = this._toggleVideo.bind(this)
		this._rafBinded = this._raf.bind(this)
		this._showInterviewBinded = this._showInterview.bind(this)
		this._hideInterviewBinded = this._hideInterview.bind(this)
		
		// const
		this.PARALLAX_MARGE = 30
		this.PARALLAX_DURATION = window.innerHeight
		
		// vars
		this.eShow = []
		this.speed = .2
		this.nImageLoaded = 0
		this.sTop = 0
		this.cTop = 0
		this.eTop = 0
		this.videoPlayed = false
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
	}

	componentDidMount() {
		super.componentDidMount()

		this._fellowship = document.querySelector('.fellowship')
		this._overlay = document.querySelector('.bg-video__overlay')
		this._video = document.querySelector('.bg-video__file')
		this._back = document.querySelector('.fellowship__back')
		console.log(this._overlay)

		document.querySelector('.page').style.height = this._fellowship.offsetHeight + 'px'

		this._loadImages()
	}

	componentWillUnmount() {
		window.cancelAnimationFrame(this.scrollRaf)	
	}

	setupAnimations() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// transition In
		this.tlIn.addCallback(this._rafBinded, 0)
		this.tlIn.to(document.querySelector('.header__logo'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
		this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

		// transition Out
		this.tlOut.to(document.querySelector('.header__logo'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		this.tlOut.to(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

		// reset
		this.tlIn.pause(0)
		this.tlOut.pause(0)
	}

	render() {
		let that = this
		let fellowshipData = AppStore.fellowshipContent()

		return (
			<div className='page page--fellowship' ref='page-wrapper'>
				<div className='submenu'><a href='#/friends' className='button'>Friends of the fellowship</a></div>

				<div className='bg-video fellowship__video'>
					<video className='bg-video__file'>
						<source src='/static/videos/bg-home.webm' type='video/webm' />
						<source src='/static/videos/bg-home.mp4' type='video/mp4' />
					</video>
					<div className='bg-video__overlay'></div>
					<div className='fellowship__back button' onClick={this._hideInterviewBinded}>Back to fellowship page</div>
				</div>

				<div className='fellowship'>
					<h2 className='title js-reveal'>Why a fellowship and Cuba?</h2>
					<p className='paragraph paragraph--2 text js-reveal'>In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combinesthisrichhistoryandtraditionwitha passion for documentary photography.<br/>Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again after 51 years – this time to initiate the fellowship with Havana Club 7. A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the21stcentury. InspiredbyElliottErwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.</p>
					<div className='button button--margin js-reveal' onClick={this._showInterviewBinded}>Watch Elliott Erwitt interview</div>
					<h2 className='title js-reveal'>How will the fellowship work?</h2>
					<p className='paragraph paragraph--2 text js-reveal'>In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy. In addition to the proceeds from print sales Havana Club 7 will fund a similar amount to give more photographers the chance to tell the story of Cuba.<br/>The following fellowship photographers will be selected by a committee headed by Elliott Erwitt comprising of Cuban and international photography professionals ensuring the next fellow will continue the legacy of cuba and the human condition in Cuba through documentary photography and give us their own vision.</p>
					<img className='fellowship__image js-reveal' src='/static/img/ERE2015002W00027-17A_medium.jpg'/>
					<h2 className='title js-reveal'>Elliott Erwitt biography</h2>
					<div className='row'>
						<div className='column'>
							<img className='fellowship__elliott js-reveal' src='../assets/images/elliott-erwitt.jpg'/>
							<a className='button js-reveal' href='http://www.elliotterwitt.com' target='_blank'>Elliott Erwitt official website</a>
						</div>
						<div className='column'>
							<p className='paragraph text js-reveal'>Elliott Erwitt is one of the world’s most popular and admired photographers. A visual poet and humorist of everyday life, he has created some of the most memorable images of our time, from his observations of daily life at street level, to portraits of the iconic personalities including Marilyn Monroe on the set of the film The Misfits and Truman Capote’s epic 1966 Black and White Ball in New York City. He has photographed Khrushchev and Nixon arguing in Moscow, Fidel Castro and Che Guevara in Havana and President JFK in the Oval office.</p>
							<p className='paragraph text js-reveal'>Born in Paris in 1928 to Russian parents, Erwitt moved to the US with his family in 1939 and it was there that he met Edward Steichen and Roy Stryker. Recruited to Magnum Photos by Robert Capa in 1953 Erwitt has been a member of the prestigious agency ever since and has served several terms as its president.</p>
							<p className='paragraph text js-reveal'>To date Erwitt has produced more than 25 photography books including Eastern Europe (1965), The Private Experience (1974), Personal Exposures (1988), To the Dogs (1992), and Personal Best (2010). His photographs have been featured in solo shows all over the world, including at the ICP and The Museum of Modern Art, New York; The Art Institute of Chicago; The Barbican, London, and The Reina Sofia Museum, Madrid. Erwitt lives and works in New York City and likes children and dogs.</p>
						</div>
					</div>
					<a className='fellowship__discover button js-reveal' href='#/project/elliott-erwitt'>Discover his project</a>
				</div>
			</div>
		)
	}

	_raf() {
		if (this.scrollIndex % 3) this.scrollOk = true
		else this.scrollOk = true
		this.scrollIndex++

		if (this.scrollOk) {
			this._handleScroll()
		}

		// window.scrollRaf = scroll(this._rafBinded);
		this.scrollRaf = scroll(this._rafBinded);
	}

	_handleScroll() {
		let e;
		this.sTop = Utils.GetScrollTop()
		this.cTop += .1 * (this.sTop - this.cTop)
		e = -this.cTop
		if (this._fellowship) this._fellowship.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)'

		_(dom('.js-reveal')).forEach((el, index) => {
			this.lTop = offset(el).top
			
			if (!this.eShow[index]) {
				this.eShow[index] = false
			}

			// in viewport
			if (this.lTop - window.innerHeight < 0 && !this.eShow[index]) {
				this.eShow[index] = true
				TweenMax.to(el, 1.2, {y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random()*0.2})
			}
			
			// off viewport
			if (this.lTop - window.innerHeight > 0 && this.eShow[index]) {
				this.eShow[index] = false
				TweenMax.set(el, {y: 70, opacity: 0})
			}

		}).value();
	}

	_loadImages() {
		let that = this, file
		this.max = _.size(dom('.fellowship img'))
		_(dom('.fellowship img')).forEach((img, index) => {
			file = new Image()
			file.onload = this._onImageLoaded.bind(this)
			// file.src = '/static/img/'+img.src+'.jpg'
			file.src = img.src
		}.bind(this)).value();
	}

	_onImageLoaded(e) {
		this.nImageLoaded++;

		if (this.nImageLoaded >= this.max) {
			document.querySelector('.page--fellowship').style.height = this._fellowship.offsetHeight + 'px'
		}
	}

	_toggleVideo() {
		if (this.videoPlayed) {
			document.querySelector('.fellowship__interview').pause()
			dom('.fellowship__play').addClass('enabled')
		} else {
			document.querySelector('.fellowship__interview').play()
			dom('.fellowship__play').removeClass('enabled')
		}
		this.videoPlayed = !this.videoPlayed
	}

	_goToBiography() {
		this.artistOffsetTop = document.querySelector('.fellowship__artist').offsetTop
		TweenMax.to(window, 0.6, {scrollTo:{y: (this.artistOffsetTop - 40)}, ease:Power2.easeOut})
	}

	_showInterview() {
		this._video.play()
		this._fellowship.classList.add('fellowship--hidden')
		this._overlay.classList.add('bg-video__overlay--hidden')
		this._back.classList.add('fellowship__back--visible')
	}

	_hideInterview() {
		this._video.pause()
		this._fellowship.classList.remove('fellowship--hidden')
		this._overlay.classList.remove('bg-video__overlay--hidden')
		this._back.classList.remove('fellowship__back--visible')
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()

		if (windowW/1.8 < windowH) dom('body').addClass('body--portrait')
		else dom('body').removeClass('body--portrait')
	}

}
