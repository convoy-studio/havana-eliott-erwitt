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
let _ = require('lodash')

export default class Project extends Page {
	constructor(props) {
		super(props)

		this.props = props

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')
		
		this.state = { 
			artist: undefined,
			slideshow: {},
			print: {}
		};

		this.zoom = false
		this.slideshowPrints = {}
		this.action = 'init'
		this.currentIndex = 0
		this.toggleZoomBinded = this.toggleZoom.bind(this)
		this.toggleStoryBinded = this.toggleStory.bind(this)
		this._prevBinded = this.prev.bind(this)
		this._nextBinded = this.next.bind(this)
		this._onArtistStoreChangeBinded = this._onArtistStoreChange.bind(this)
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)

		ArtistApi.getBySlug(this.props.idSection);
		ArtistStore.addChangeListener(this._onArtistStoreChangeBinded);

		PrintApi.getSlideshow(this.props.idSection);
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);
	}

	componentDidMount() {
		super.componentDidMount()
	}

	componentWillUnmount() {
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
		}

		if (_.size(this.slideshowPrints) > 0) {
			city = this.slideshowPrints.current.city
			year = this.slideshowPrints.current.year
			story = this.slideshowPrints.current.desc
			forSale = this.slideshowPrints.current.forSale
			url = '#/shop/' + this.slideshowPrints.current._id
		}

		return (
			<div id='page page--project' ref='page-wrapper'>
				<div className='submenu button button--right button--small'><a href={'#/project/'+this.props.idSection+'/gallery'}>Contact sheet</a></div>
				<section className='project'>
					<h2 className='project__artist'>{name}</h2>
					<p className='project__desc text text--medium'>
						{Object.keys(projectDesc).map((index) => {
							return (
								<p className='project__paragraph' key={index}>{projectDesc[index]}</p>
							)
						})}
					</p>
					<div className='project__discover'><div className='arrow'></div></div>
					<div className='project__slideshow'>
						<div className='project__prints' onClick={this.toggleZoomBinded}>
							{Object.keys(this.slideshowPrints).map((index) => {
								let file = this.slideshowPrints[index].file + '.jpg'
								let status = index
								return (
									<div className={'project__print project__print--'+status} key={index}><img className='project__image' src={'./assets/images/prints/'+file}></img></div>
								)
							})}
							<div className='project__story text text--big'>
								<p>{story}</p>
							</div>
						</div>
						<div className='project__nav'>
							<div className='project__prev' onClick={this._prevBinded}><div className='arrow'></div></div>
							<div className='project__next' onClick={this._nextBinded}><div className='arrow'></div></div>
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
				</section>
			</div>
		)
	}

	toggleZoom() {
		if (this.zoom) {
			Tweenmax.staggerTo([
				dom('.front-container'),
				dom('.project__share'),
				dom('.project__infos'),
				dom('.project__reveal'),
				dom('.cart')
			], 0.4, {opacity: 1});
			Tweenmax.to(dom('.project__prints'), 0.4, {scale: 1, ease: Power2.easeOut});
			Tweenmax.to(dom('.project__prev'), 0.4, {x: 0, ease: Power2.easeOut});
			Tweenmax.to(dom('.project__next'), 0.4, {x: 0, ease: Power2.easeOut});
		} else {
			Tweenmax.staggerTo([
				dom('.front-container'),
				dom('.project__share'),
				dom('.project__infos'),
				dom('.project__reveal'),
				dom('.cart')
			], 0.4, {opacity: 0});
			Tweenmax.to(dom('.project__prints'), 0.4, {scale: 1.35, ease: Power2.easeOut});
			Tweenmax.to(dom('.project__prev'), 0.4, {x: -70, ease: Power2.easeOut});
			Tweenmax.to(dom('.project__next'), 0.4, {x: 70, ease: Power2.easeOut});
		}
		this.zoom = !this.zoom
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
		Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 0, onComplete: () => {
			that.currentIndex = that.getPrevIndex()
			that.action = 'prev'
			PrintApi.getOne(that.state.slideshow.refs[that.getPrevIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
		}});
	}

	next() {
		let that = this

		this.hideStory()
		Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 0, onComplete: () => {
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
			artist: ArtistStore.getOne()
		})
	}

	_onPrintStoreChange() {
		this.setState({
			slideshow: PrintStore.getSlideshow(),
			print: PrintStore.getOne()
		}, () => {
			Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 1});
		})
	}
}
