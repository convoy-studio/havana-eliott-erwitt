import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import Utils from 'Utils'
import TweenMax from 'gsap'
import offset from 'offset'
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
		
		this.opacityMarge = window.innerHeight

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

		this._artistSection = document.querySelector('.fellowship__artist')
		this._video = document.querySelector('.fellowship__video')
		this.artistOffsetTop = document.querySelector('.fellowship__artist').offsetTop
	}

	render() {
		let that = this
		let fellowshipData = AppStore.fellowshipContent()

		return (
			<div className='page page--fellowship' ref='page-wrapper'>

				<div className='fellowship'>
					<div className='video fellowship__video'>
						<video autoPlay loop muted className='video__file' src='./assets/videos/bg-home.webm'></video>
					</div>

					<section className='fellowship__presentation'>
						<p className='paragraph paragraph--big paragraph--center'>A fellowship is a communion of people sharing a common passion.</p>
						<p className='paragraph paragraph--small paragraph--center'>In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.</p>
						<p className='paragraph paragraph--medium paragraph--center'>Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again after 51 years – this time to initiate the fellowship with Havana Club 7.</p>
						<div className='paragraph__row'>
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
					
					<section className='fellowship__artist'>
						<p className='fellowship__artistname paragraph paragraph--big paragraph--center'>ELLIOTT ERWITT’S BIOGRAPHY</p>
						<div className='paragraph__row'>
							<div className='paragraph__column'>
								<p className='paragraph paragraph--small'>Elliott Erwitt is one of the world’s most popular and admired photographers. A visual poet and humorist of everyday life, he has created some of the most memorable images of our time, from his observations of daily life at street level, to portraits of the iconic personalities including Marilyn Monroe on the set of the film The Misfits and Truman Capote’s epic 1966 Black and White Ball in New York City. He has photographed Khrushchev and Nixon arguing in Moscow, Fidel Castro and Che Guevara in Havana and President JFK in the Oval office.</p>
							</div>
							<div className='paragraph__column'>
								<video className='fellowship__interview' src='./assets/videos/bg-home.webm'></video>
							</div>
						</div>
						<p className='paragraph paragraph--small paragraph--center'>Born in Paris in 1928 to Russian parents, Erwitt moved to the US with his family in 1939 and it was there that he met Edward Steichen and Roy Stryker. Recruited to Magnum Photos by Robert Capa in 1953 Erwitt has been a member of the prestigious agency ever since and has served several terms as its president.</p>
						<div className='paragraph__row'>
							<div className='paragraph__column'>
								<p className='paragraph'><a className='fellowship__button button button--center button--small' href='http://www.elliotterwitt.com'>Elliott Erwitt official website</a></p>
							</div>
							<div className='paragraph__column'>
								<p className='paragraph paragraph--small'>To date Erwitt has produced more than 25 photography books including Eastern Europe (1965), The Private Experience (1974), Personal Exposures (1988), To the Dogs (1992), and Personal Best (2010). His photographs have been featured in solo shows all over the world, including at the ICP and The Museum of Modern Art, New York; The Art Institute of Chicago; The Barbican, London, and The Reina Sofia Museum, Madrid. Erwitt lives and works in New York City and likes children and dogs.</p>
							</div>
						</div>
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
		if (this._video && this._artistSection) {
			this.artistOffset = offset(this._artistSection)
			this.videoOpacity = 1 - (this.artistOffset.top - this.opacityMarge) / (-this.opacityMarge)
			this._video.style.opacity = this.videoOpacity
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
