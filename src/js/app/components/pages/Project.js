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

		this.slideshowPrints = {}
		this.action = 'init'
		this.currentIndex = 0
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
		let name, bio, projectTitle, projectDesc
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

		return (
			<div id='page page--project' ref='page-wrapper'>
				<div className='submenu button button--right button--small'><a href={'#/project/'+this.props.idSection+'/gallery'}>Contact sheet</a></div>
				<section className='project'>
					<h2 className='project__artist'>{name}</h2>
					<p className='project__desc text text--medium'>{projectDesc}</p>
					<div className='project__slideshow'>
						<div className='project__prints'>
							{Object.keys(this.slideshowPrints).map((index) => {
								let file = this.slideshowPrints[index].file + '_min.jpg'
								let status = index
								return (
									<div className={'project__print project__print--'+status} key={index}><img className='project__image' src={'./assets/images/prints/'+file}></img></div>
								)
							})}
						</div>
						<div className='project__nav'>
							<div className='project__prev' onClick={this._prevBinded}>prev</div>
							<div className='project__next' onClick={this._nextBinded}>next</div>
						</div>
					</div>
				</section>
			</div>
		)
	}

	prev() {
		let that = this

		Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 0, onComplete: () => {
			that.currentIndex = that.getPrevIndex()
			that.action = 'prev'
			PrintApi.getOne(that.state.slideshow.refs[that.getPrevIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
		}});
	}

	next() {
		let that = this

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
