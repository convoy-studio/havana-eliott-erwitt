import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import AppActions from 'AppActions'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import PrintActions from 'PrintActions'
import PrintConstants from 'PrintConstants'
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

		// props
		this.props = props

		// state
		this.state = { 
			artist: undefined,
			slideshow: {},
			print: {},
			prints: {},
			current: 0
		}

		// function binded
		this._showSlideshowBinded = this._showSlideshow.bind(this)
		this._toggleZoomBinded = this._toggleZoom.bind(this)
		this._toggleStoryBinded = this._toggleStory.bind(this)
		this._backToGalleryBinded = this._backToGallery.bind(this)
		this._prevBinded = this._prev.bind(this)
		this._nextBinded = this._next.bind(this)
		this._onArtistStoreChangeBinded = this._onArtistStoreChange.bind(this)
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this._rafBinded = this._raf.bind(this)
		
		// const
		this.OPACITY_MARGE = 30
		this.OPACITY_DURATION = 300
		
		// vars
		this.nImageLoaded = 0
		this.zoom = false
		this.slideshowPrints = {}
		this.action = 'init'
		this.currentIndex = -1
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
	}

	componentDidMount() {
		super.componentDidMount()
		
		let that = this
		let hack = setTimeout(() => {
			that.zoom = PrintStore.getZoom()
			if (that.zoom !== undefined) {
				this.setState({
					current: that.zoom
				})
				dom('.project__slideshow').removeClass('project__slideshow--disabled')
				dom('.project__discover').removeClass('project__discover--disabled')
				dom('.project__loading').addClass('project__loading--disabled')
			}
			// 	PrintApi.getSlideshow(this.props.idSection, that.zoom)
			// } else {
			// 	PrintApi.getSlideshow(this.props.idSection);
			// }
		}, 10)

		PrintApi.getByArtist(this.props.idSection)
		ArtistApi.getBySlug(this.props.idSection);
		ArtistStore.addChangeListener(this._onArtistStoreChangeBinded);
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);
		// PrintStore.on(PrintConstants.RECEIVE_PRINTS_SLIDESHOW, this._onPrintStoreChangeBinded)	
		// PrintStore.on(PrintConstants.RECEIVE_PRINT, this._onPrintStoreChangeBinded)	

		this._intro = document.querySelector('.project__intro')
		this._raf()

		this._project = document.querySelector('.project')
		this._projectSlideshow = document.querySelector('.project__slideshow')
		this._projectPrints = document.querySelector('.project__prints')
		this._introContent = document.querySelector('.project__intro .project__content')
		this._pageProject = document.querySelector('.page--project')
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log(prevState)	
	// 	console.log(this.state)
	// }

	componentDidUpdate() {
		let file
		this.max = _.size(this.state.prints)
		if (this.max > 0 && !this.loaded && this.zoom === undefined) {
			this.loaded = true
			_(this.state.prints).forEach((print, index) => {
				file = new Image()
				file.onload = this.onImageLoaded.bind(this)
				file.src = '/static/img/'+print.file+'_big.jpg'
			}.bind(this)).value();
		}
	}

	onImageLoaded(e) {
		this.nImageLoaded++;

		if (this.nImageLoaded >= this.max) {
			// console.log('all loaded')
			// setTimeout(() => {
				dom('.project__slideshow').removeClass('project__slideshow--disabled')
				dom('.project__discover').removeClass('project__discover--disabled')
				dom('.project__loading').addClass('project__loading--disabled')
			// }, 4000)

			this._pageProject.style.height = document.querySelector('.project').offsetHeight + 'px'
		}
	}

	componentWillUnmount() {
		ArtistStore.removeChangeListener(this._onArtistStoreChangeBinded);
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);
	}

	setupAnimations() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// transition In
		this.tlIn.staggerFrom([
			document.querySelector('.project__artist'),
			document.querySelector('.project__desc')
		], 0.6, { y:50, ease:Power2.easeOut }, 0.1)
		this.tlIn.to(document.querySelector('.header__title'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
		this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

		// transition Out
		this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		this.tlOut.to(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

		// reset
		this.tlIn.pause(0)
		this.tlOut.pause(0)
	}

	render() {
		let that = this
		let current = this.state.prints[this.state.current]
		
		let name, bio, title, city, country, year, story, forSale, url, projectTitle, projectDesc = []
		
		if (this.state.artist) {
			name = this.state.artist.name
			bio = this.state.artist.bio
			projectTitle = this.state.artist.project.title
			projectDesc = this.state.artist.project.desc
		}

		if (current) {
			title = current.title
			city = current.city
			country = current.country
			year = current.year
			story = current.desc
			forSale = current.forSale
			url = '#/shop/' + current._id
			if (!story) this._hideStory()
		}

		return (
			<div className='page page--project' ref='page-wrapper'>
				
				<div className='submenu project__contact'><a href={'#/project/'+this.props.idSection+'/contact-sheet'} className='button'><span className='button__content'>Contact sheet</span></a></div>
				<div className='submenu project__back'><a href='#' className='button' onClick={this._backToGalleryBinded}><span className='button__content'>Back to gallery</span></a></div>

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
							<div className='project__loading'>Chargement...</div>
							<div className='project__discover project__discover--disabled' onClick={this._showSlideshowBinded}><div className='arrow'></div></div>
						</div>
					</div>

					<div className='project__slideshow project__slideshow--disabled'>
						<div className='project__content'>
							<div className='project__prints'>
								{Object.keys(this.state.prints).map((id, index) => {
									let file = this.state.prints[id].file + '_big.jpg'
									let status = (index === this.state.current) ? 'project__print--current' : ''
									return (
										<div className={'project__print '+status} onClick={that._toggleZoomBinded} key={id}><img className='project__image' src={'/static/img/'+file}></img></div>
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
						</div>
						<div className='project__footer'>
							<div className='project__section'>
								<a href='#' className='project__share project__button button button--left button--reverse'><span className='button__content'>Share</span></a>
							</div>
							<div className='project__section project__infos'>
								{(() => {
									if (forSale) return (
										<div>
											<h2 className='print__title print__info--small'>{title}</h2>
											<h3 className='print__location print__info--small'>{city}, {country}, {year}</h3>
										</div>
									)
								})()}
							</div>
							<div className='project__section'>
								{(() => {
									if (forSale) return (
										<div>
											<div className='project__button project__reveal button button--left button--reverse' onClick={this._toggleStoryBinded}><span className='button__content'>The story</span></div>
											<a href={url} className='project__button project__buy button button--right button--reverse'><span className='button__content'>Buy print</span></a>
										</div>
									)
								})()}
							</div>
						</div>
					</div>

				</section>
			</div>
		)
								// <h3 className='print__artist print__info--small'>{name}</h3>
	}

	_raf() {
		if (this.scrollIndex % 3) this.scrollOk = true
		else this.scrollOk = true
		this.scrollIndex++

		if (this.scrollOk) {
			// let top = window.pageYOffset;
			this.handleScroll()
		}

		scroll(this._rafBinded);
	}

	handleScroll() {
		let e;
		this.sTop = Utils.GetScrollTop()
		this.cTop += .1 * (this.sTop - this.cTop)
		e = -this.cTop
		if (this._project) {
			this._project.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)'
		}

		this.opacityMarge = window.innerHeight/2
		this.limitOffset = offset(this._intro)
		this.limitTop = this.limitOffset.top + this.limitOffset.height / 1.5
		this.introOpacity = 1 - (this.limitTop - this.opacityMarge) / (-this.opacityMarge)
		this._intro.style.opacity = this.introOpacity

		if (this._introContent && this._pageProject && this._project) {
			if (window.innerHeight - this._introContent.offsetHeight < 200) {
				this._project.classList.add('project--relative')
				this._projectSlideshow.style[this.transform] = ('translate(0px, 0px) translateZ(0px)')
				this._pageProject.style.height = document.querySelector('.project').offsetHeight + 'px'
			} else {
				this.slideshowY = - window.innerHeight/2 + this._projectPrints.offsetHeight/2 - 40
				this._projectSlideshow.style[this.transform] = ('translate(0px, '+ this.slideshowY +'px) translateZ(0px)')
				this._project.classList.remove('project--relative')
				this._pageProject.style.height = (this._project.offsetHeight + this.slideshowY) + 'px'
			}
		}

		// this.limitOffset = offset(document.querySelector('.project__intro'))
		// this.OPACITY_MARGE = this.limitOffset.height
		// console.log(this.limitOffset)
		// this.limitTop = this.limitOffset.top - window.innerHeight + this.OPACITY_MARGE
		// this.elOpacity = Utils.Interval(this.limitTop / (-this.OPACITY_DURATION), 0, 1)
		// // this.elY = (1-this.elOpacity) * 50
		// document.querySelector('.project__intro').style.opacity = this.elOpacity
		// el.style[this.transform] = ('translate(0px, '+ this.elY +'px) translateZ(0px)')
	}

	_showSlideshow() {
		this.slideshowOffsetTop = document.querySelector('.project__slideshow').offsetTop
		TweenMax.to(window, 0.6, {scrollTo:{y: this.slideshowOffsetTop}, ease:Power2.easeOut})
	}
	
	initTimelines() {
	}

	_toggleZoom() {
		if (this.zoom) this._zoomOut()
		else this._zoomIn()
	}

	_zoomIn() {
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

	_zoomOut() {
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

	_backToGallery(e) {
		e.preventDefault()
		this._zoomOut()
	}

	_toggleStory() {
		dom('.project__story').toggleClass('enabled')
	}

	_hideStory() {
		dom('.project__story').removeClass('enabled')
	}

	_prev() {
		// this._hideStory()
		this.setState({
			current: (this.state.current-1 < 0) ? this.nPrints-1 : this.state.current-1
		})
	}

	_next() {
		// this._hideStory()
		this.setState({
			current: (this.state.current+1 >= this.nPrints) ? 0 : this.state.current+1
		})
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
			prints: PrintStore.getArtistPrints()
		}, () => {
			this.nPrints = _.size(this.state.prints)
		})
	}
}
