import React from 'react'
import dom from 'domquery'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'
import Utils from 'Utils'
let _ = require('lodash')
let scroll = Utils.Scroll()

export default class Slideshow extends React.Component {

	constructor(props) {
		super(props)

		// props
		this.props = props

		// state
		this.state = {
			current: this.props.current || 0,
			bigPrintsLoaded: false
		}

		// vars
		this.nPrintsLoaded = 0
		this.nBigPrintsLoaded = 0
		this.printsLoaded = false
		this.bigPrintsLoaded = false
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
		this.y = 0

		// function binded
		this._prevBinded = this._prev.bind(this)
		this._nextBinded = this._next.bind(this)
		this._zoomInBinded = this._zoomIn.bind(this)
		this._zoomOutBinded = this._zoomOut.bind(this)
		this._rafBinded = this._raf.bind(this)
		this._onMousemoveBinded = this._onMousemove.bind(this)
	}

	componentWillMount() {

	}

	componentDidMount() {
		document.addEventListener('mousemove', this._onMousemoveBinded)
	}

	componentDidUpdate() {
		let file
		this.nPrints = _.size(this.props.prints)
		if (this.nPrints > 0 && !this.printsLoaded) {
			this.printsLoaded = true
			_(this.props.prints).forEach((print, index) => {
				file = new Image()
				file.onload = this.onPrintLoaded.bind(this)
				file.src = '/static/img/'+print.file+'_big.jpg'
			}.bind(this)).value();
		}	
	}

	componentWillUnmount() {
		document.removeEventListener('mousemove', this._onMousemoveBinded)
	}

	onPrintLoaded(e) {
		this.nPrintsLoaded++;

		if (this.nPrintsLoaded >= this.nPrints) {
			dom('.projects__loader').addClass('projects__loader--disabled')
			dom('.projects__discover').removeClass('projects__discover--disabled')
			
			this._content = document.querySelector('.project__content')
			this._prints = document.querySelector('.project__prints')
			this._image = document.querySelector('.project__image')
			this._footer = document.querySelector('.project__footer')
			// this._prints.style.width = this._image.offsetWidth + 'px'
			this._footer.style.width = this._image.offsetWidth + 'px'

			this._raf()
		}
	}

	onBigPrintLoaded(e) {
		this.nBigPrintsLoaded++;

		if (this.nBigPrintsLoaded >= this.nPrints) {
			this.setState({
				bigPrintsLoaded: true
			});
		}
	}

	render() {
		let current = this.props.prints[this.state.current]
		let artist, title, city, country, year, story, forsale, url, desc = []

		if (current) {
			title = current.title
			city = current.city
			country = current.country
			year = current.year
			story = current.desc
			forsale = current.forsale
			url = '#/shop/' + current.token
		}

		let slideshowClass = (this.props.show) ? '' : 'project__slideshow--hidden';
		let bigSlideshowClass = (this.state.bigPrintsLoaded) ? '' : 'project__bigslideshow--hidden'

		return (
			<div>
				<div className={'project__slideshow ' + slideshowClass}>
					<div className='project__content'>
						<div className='project__prints'>
							{Object.keys(this.props.prints).map((id, index) => {
								let file = this.props.prints[id].file + '_big.jpg'
								let status = (index === this.state.current) ? 'project__print--current' : ''
								return (
									<div className={'project__print '+status} onClick={this._zoomInBinded} key={id}>
										<img className='project__image' src={'/static/img/'+file}></img>
									</div>
								)
							})}
						</div>
						<div className='project__nav'>
							<div className='project__prev' onClick={this._prevBinded}><div className='arrow'></div></div>
							<div className='project__next' onClick={this._nextBinded}><div className='arrow arrow--right'></div></div>
						</div>
					</div>
					<div className='project__footer'>
						<div className='project__section'>
							{(() => {
								if (forsale) return (
									<a href={url} className='project__buy button'>Buy print</a>
								)
							})()}
						</div>
						<div className='project__section project__infos'>
							{(() => {
								if (forsale) return (
									<h3 className='text'>{title}. {city}. {country}. {year}</h3>
								)
							})()}
						</div>
						<div className='project__section'>
							<a href='#' className='project__share button'>Share</a>
						</div>
					</div>
				</div>

				<div className={'project__bigslideshow ' + bigSlideshowClass}>
					<div className='project__bigcontent'>
						<div className='project__bigprints'>
							{Object.keys(this.props.prints).map((id, index) => {
								let file = this.props.prints[id].file + '.jpg'
								let status = (index === this.state.current) ? 'project__bigprint--current' : ''
								return (
									<div className={'project__bigprint '+status} onClick={this._zoomOutBinded} key={id}>
										<img className='project__bigimage' src={'/static/img/'+file}></img>
									</div>
								)
							})}
						</div>
						<div className='project__nav'>
							<div className='project__bigprev' onClick={this._prevBinded}><div className='arrow'></div></div>
							<div className='project__bignext' onClick={this._nextBinded}><div className='arrow arrow--right'></div></div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	_raf() {
		if (this.scrollIndex % 3) this.scrollOk = true
		else this.scrollOk = true
		this.scrollIndex++

		if (this.scrollOk) {
			this.handleScroll()
		}

		this.scrollRaf = scroll(this._rafBinded);
	}

	handleScroll() {
		this._content.style.width = this._image.offsetWidth + 'px'
		this._footer.style.width = this._image.offsetWidth + 'px'

		let el = document.querySelector('.project__bigprint--current .project__bigimage')
		if (el) {
			// this.y = .1 * ((this.cursorY / window.innerHeight) * (el.offsetHeight - window.innerHeight) - this.y)
			this.y = (this.cursorY / window.innerHeight) * (el.offsetHeight - window.innerHeight)
			let top = -this.y
			el.style[this.transform] = 'translate3d(0, ' + top + 'px, 0)'
		}
	}

	_prev() {
		this.setState({
			current: (this.state.current-1 < 0) ? this.nPrints-1 : this.state.current-1
		})
	}

	_next() {
		this.setState({
			current: (this.state.current+1 >= this.nPrints) ? 0 : this.state.current+1
		})
	}

	_zoomIn() {
		// this.tlZoomIn = new TimelineMax({paused: true})
		// this.tlZoomIn.staggerTo([
		// 	dom('.front-container'),
		// 	dom('.project__footer'),
		// 	dom('.project__contact'),
		// 	dom('.project__slideshow')
		// ], 0.4, {opacity: 0}, 0)
		// this.tlZoomIn.play()

		// if (document.querySelector('.project__bigslideshow')) {
			document.querySelector('body').classList.add('body--hidden');
			document.querySelector('.project__bigslideshow').classList.remove('project__bigslideshow--hidden');
		// }

		this.nBigPrints = _.size(this.state.prints)
		if (this.nBigPrints > 0 && !this.bigPrintsLoaded) {
			this.bigPrintsLoaded = true
			let file;
			_(this.state.prints).forEach((print, index) => {
				file = new Image()
				file.onload = this.onBigPrintLoaded.bind(this)
				file.src = '/static/img/'+print.file+'.jpg'
			}.bind(this)).value();
		}
	}

	_zoomOut() {
		// console.log('_zoomOut')
		// this.tlZoomOut = new TimelineMax({paused: true})
		// this.tlZoomOut.staggerTo([
		// 	dom('.front-container'),
		// 	dom('.project__footer'),
		// 	dom('.project__contact'),
		// 	dom('.project__slideshow')
		// ], 0.4, {opacity: 1}, 0)
		// this.tlZoomOut.play()

		document.querySelector('body').classList.remove('body--hidden');
		document.querySelector('.project__bigslideshow').classList.add('project__bigslideshow--hidden');
	}

	_onMousemove(e) {
		this.cursorY = e.clientY
	}

}
