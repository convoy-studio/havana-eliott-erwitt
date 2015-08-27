import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import AppActions from 'AppActions'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import ArtistStore from 'ArtistStore'
import ArtistApi from 'ArtistApi'
import Tweenmax from 'gsap'
import Utils from 'Utils'
import offset from 'offset'
import scrollTo from 'scrollTo'
let _ = require('lodash')
let scroll = Utils.Scroll()

export default class Project extends Page {
	constructor(props) {
		super(props)

		this.props = props

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

		dom('.header__title').addClass('header__title--fixed')
		
		this.state = { 
			artist: undefined,
			slideshow: {},
			print: {}
		};

		// this.initTimelines()

		this.zoom = false
		this.slideshowPrints = {}
		this.action = 'init'
		this.currentIndex = 0
		this.showSlideshowBinded = this.showSlideshow.bind(this)
		this.toggleZoomBinded = this.toggleZoom.bind(this)
		this.toggleStoryBinded = this.toggleStory.bind(this)
		this._backToGalleryBinded = this.backToGallery.bind(this)
		this._prevBinded = this.prev.bind(this)
		this._nextBinded = this.next.bind(this)
		this._onArtistStoreChangeBinded = this._onArtistStoreChange.bind(this)
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this.rafBinded = this.raf.bind(this)
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')

		ArtistApi.getBySlug(this.props.idSection);
		ArtistStore.addChangeListener(this._onArtistStoreChangeBinded);

		PrintApi.getSlideshow(this.props.idSection);
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);
	}

	componentDidMount() {
		super.componentDidMount()
		
		this._intro = document.querySelector('.project__intro')
		this.raf()
	}

	componentWillUnmount() {
		dom('.header__title').removeClass('header__title--fixed')
		ArtistStore.removeChangeListener(this._onArtistStoreChangeBinded);	
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);	
	}

	render() {
		let that = this
		let name, bio, city, year, story, forSale, url, projectTitle, projectDesc = []
		if (this.state.artist) {
			name = this.state.artist.name
			bio = this.state.artist.bio
			projectTitle = this.state.artist.project.title
			projectDesc = this.state.artist.project.desc
		}

		if (_.size(this.state.slideshow) > 0) {
			if (this.action === 'init') {
				this.slideshowPrints = this.state.slideshow.prints
			}
			if (this.action === 'prev') {
				this.slideshowPrints.next = this.slideshowPrints.current
				this.slideshowPrints.current = this.slideshowPrints.prev
				this.slideshowPrints.prev = this.state.print
			} 
			if (this.action === 'next') {
				this.slideshowPrints.prev = this.slideshowPrints.current
				this.slideshowPrints.current = this.slideshowPrints.next
				this.slideshowPrints.next = this.state.print
			}
			Tweenmax.to(dom('.project__print'), 0.4, {opacity: 1});
		}

		if (_.size(this.slideshowPrints) > 0) {
			city = this.slideshowPrints.current.city
			year = this.slideshowPrints.current.year
			story = this.slideshowPrints.current.desc
			forSale = this.slideshowPrints.current.forSale
			url = '#/shop/' + this.slideshowPrints.current._id
		}

		return (
			<div className='page page--project' ref='page-wrapper'>
				
				<div className='submenu project__contact '><a href={'#/project/'+this.props.idSection+'/contact-sheet'}><p className='button button--small'>Contact sheet</p></a></div>
				<div className='submenu project__back '><a href='#' onClick={this._backToGalleryBinded}><p className='button button--small'>Back to gallery</p></a></div>
				
				<section className='project'>
					
					<div className='project__intro'>
						<div className='project__content'>
							<h2 className='project__artist'>{name}</h2>
							<p className='project__desc text text--medium'>
								{Object.keys(projectDesc).map((index) => {
									return (
										<p className='project__paragraph' key={index}>{projectDesc[index]}</p>
									)
								})}
							</p>
							<div className='project__discover' onClick={this.showSlideshowBinded}><div className='arrow'></div></div>
						</div>
					</div>

					<div className='project__slideshow'>
						<div className='project__content'>
							<div className='project__prints'>
								{Object.keys(this.slideshowPrints).map((index) => {
									let file = this.slideshowPrints[index].file + '.jpg'
									let status = index
									return (
										<div className={'project__print project__print--'+status} onClick={that.toggleZoomBinded} key={index}><img className='project__image' src={'./assets/images/prints/'+file}></img></div>
									)
								})}
								<div className='project__story text text--big'>
									<p>{story}</p>
								</div>
								<div className='project__nav'>
									<div className='project__prev' onClick={this._prevBinded}><div className='arrow'></div></div>
									<div className='project__next' onClick={this._nextBinded}><div className='arrow'></div></div>
								</div>
							</div>
							<div className='project__footer'>
								<div className='project__section'>
									<a href='#' className='project__share button button--left button--small'>Share</a>
								</div>
								<div className='project__section project__infos'>
									<h2 className='print__artist print__artist--small'>{name}</h2>
									<h3 className='print__details print__details--small'>
										<span className='print__city'>{city}</span>, {year}
									</h3>
								</div>
								<div className='project__section'>
									<div className='project__reveal button button--left button--small' onClick={this.toggleStoryBinded}>The story</div>
									{(() => {
										if (forSale) return (
											<a href={url} className='project__buy button button--right button--small'>Buy print</a>
										)
									})()}
								</div>
							</div>
						</div>
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

		this.opacityMarge = window.innerHeight/2
		this.limitOffset = offset(this._intro)
		this.limitTop = this.limitOffset.top + this.limitOffset.height / 1.5
		this.introOpacity = 1 - (this.limitTop - this.opacityMarge) / (-this.opacityMarge)
		this._intro.style.opacity = this.introOpacity

		// this.limitOffset = offset(document.querySelector('.project__intro'))
		// this.OPACITY_MARGE = this.limitOffset.height
		// console.log(this.limitOffset)
		// this.limitTop = this.limitOffset.top - window.innerHeight + this.OPACITY_MARGE
		// this.elOpacity = Utils.Interval(this.limitTop / (-this.OPACITY_DURATION), 0, 1)
		// // this.elY = (1-this.elOpacity) * 50
		// document.querySelector('.project__intro').style.opacity = this.elOpacity
		// el.style[this.transform] = ('translate(0px, '+ this.elY +'px) translateZ(0px)')
	}

	showSlideshow() {
		this.slideshowOffsetTop = document.querySelector('.project__slideshow').offsetTop
		TweenMax.to(window, 1.2, {scrollTo:{y: this.slideshowOffsetTop}, ease:Power2.easeOut})
	}
	
	initTimelines() {
	}

	toggleZoom() {
		if (this.zoom) this.zoomOut()
		else this.zoomIn()
	}

	zoomIn() {
		this.tlZoomIn = new TimelineMax({paused: true})
		this.tlZoomIn.staggerTo([
			dom('.front-container'),
			dom('.project__share'),
			dom('.project__infos'),
			dom('.project__reveal'),
			dom('.cart'),
			dom('.project__contact')
		], 0.4, {opacity: 0}, 0)
		this.tlZoomIn.to(dom('.project__print'), 0.4, {scale: 1.35, ease: Power2.easeOut}, 0)
		this.tlZoomIn.to(dom('.project__prev'), 0.4, {x: -80, ease: Power2.easeOut}, 0)
		this.tlZoomIn.to(dom('.project__next'), 0.4, {x: 80, ease: Power2.easeOut}, 0)
		this.tlZoomIn.addCallback(() => {
			document.querySelector('.project__contact').style.display = 'none'
			document.querySelector('.project__back').style.display = 'block'
		}, 0.4)
		this.tlZoomIn.to(dom('.project__back'), 0.4, {opacity: 1}, 0.4)
		
		this.tlZoomIn.play()

		this.zoom = !this.zoom
	}

	zoomOut() {
		this.tlZoomOut = new TimelineMax({paused: true})
		this.tlZoomOut.staggerTo([
			dom('.front-container'),
			dom('.project__share'),
			dom('.project__infos'),
			dom('.project__reveal'),
			dom('.cart')
		], 0.4, {opacity: 1}, 0)
		this.tlZoomOut.to(dom('.project__back'), 0.4, {opacity: 0}, 0)
		this.tlZoomOut.addCallback(() => {
			document.querySelector('.project__contact').style.display = 'block'
			document.querySelector('.project__back').style.display = 'none'
		}, 0.4)
		this.tlZoomOut.to(dom('.project__contact'), 0.4, {opacity: 1}, 0.4)
		this.tlZoomOut.to(dom('.project__print'), 0.4, {scale: 1, ease: Power2.easeOut}, 0)
		this.tlZoomOut.to(dom('.project__prev'), 0.4, {x: 0, ease: Power2.easeOut}, 0)
		this.tlZoomOut.to(dom('.project__next'), 0.4, {x: 0, ease: Power2.easeOut}, 0)

		this.tlZoomOut.play()

		this.zoom = !this.zoom
	}

	backToGallery(e) {
		e.preventDefault()
		this.zoomOut()
	}

	toggleStory() {
		console.log('toggle')
		dom('.project__story').toggleClass('enabled')
	}

	hideStory() {
		dom('.project__story').removeClass('enabled')
	}

	prev() {
		let that = this

		this.hideStory()
		Tweenmax.to(dom('.project__print'), 0.4, {opacity: 0, onComplete: () => {
			that.currentIndex = that.getPrevIndex()
			that.action = 'prev'
			PrintApi.getOne(that.state.slideshow.refs[that.getPrevIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
		}});
	}

	next() {
		let that = this

		this.hideStory()
		// that.currentIndex = that.getNextIndex()
		// that.action = 'next'
		// PrintApi.getOne(that.state.slideshow.refs[that.getNextIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
		// Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 0, onComplete: () => {
		// 	that.complete = true
		// 	Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 1});
		// }});
		Tweenmax.to(dom('.project__print'), 0.4, {opacity: 0, onComplete: () => {
			that.currentIndex = that.getNextIndex()
			that.action = 'next'
			PrintApi.getOne(that.state.slideshow.refs[that.getNextIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
		}});
	}

	getPrevIndex() {
		return (this.currentIndex-1 < 0) ? this.state.slideshow.refs.length-1 : this.currentIndex-1
	}

	getNextIndex() {
		return (this.currentIndex+1 > this.state.slideshow.refs.length-1) ? 0 : this.currentIndex+1
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

	_onArtistStoreChange() {
		this.setState({
			artist: ArtistStore.getOne() // TODO: afficher l'image suivante uniquement quand elle est chargée
		})
	}

	_onPrintStoreChange() {
		this.setState({
			slideshow: PrintStore.getSlideshow(),
			print: PrintStore.getOne()
		}, () => {
			// Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 1});
		})
	}
}
