import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import Utils from '../../utils/utils';
let _ = require('lodash');
let scroll = Utils.raf();
let config = require('../../config');

export default class Gallery extends Component {

	componentWillMount() {

		// state
		this.state = {
			current: parseInt(this.props.current || 0),
			bigPrintsLoaded: false,
			isMobile: false
		}

		// vars
		this.largerImage = undefined
		this.nPrintsLoaded = 0
		this.nBigPrintsLoaded = 0
		this.printsLoaded = false
		this.bigPrintsLoaded = false
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.getSupportedPropertyName('transform')
		this.printY = 0
		this.cursorY = 0

		// function binded
		this._prevBinded = this._prev.bind(this)
		this._nextBinded = this._next.bind(this)
		this._zoomInBinded = this._zoomIn.bind(this)
		this._zoomOutBinded = this._zoomOut.bind(this)
		this._rafBinded = this._raf.bind(this)
		this._onMousemoveBinded = this._onMousemove.bind(this)
		this.onkeydown = this.onkeydown.bind(this)

	}

	componentDidMount() {
		document.addEventListener('mousemove', this._onMousemoveBinded)
		document.addEventListener('keydown', this.onkeydown)
		
		let file;
		this.nPrints = _.size(this.props.prints)
		if (this.nPrints > 0 && !this.printsLoaded) {
			this.printsLoaded = true
			_(this.props.prints).forEach((print, index) => {
				file = new Image()
				file.onload = this.onPrintLoaded.bind(this)
				file.src = '/static/prints/'+print.file+'_big.jpg'
			}.bind(this)).value();
		}
	}

	componentDidUpdate() {
		this.nPrints = _.size(this.props.prints);
	}

	componentWillUnmount() {
		document.removeEventListener('mousemove', this._onMousemoveBinded)
	}

	onPrintLoaded(e) {
		this.nPrintsLoaded++;

		if (this.nPrintsLoaded >= this.nPrints) {
			document.querySelector('.projects__loader').classList.add('projects__loader--disabled')
			document.querySelector('.projects__discover').classList.remove('projects__discover--disabled')
			
			this._content = document.querySelector('.project__content')
			this._prints = document.querySelector('.project__prints')
			this._image = document.querySelector('.project__image')
			this._footer = document.querySelector('.project__footer')

			_(document.querySelectorAll('.project__image')).forEach((print) => {
				if (this.largerImage) {
					this.largerImage = (print.offsetWidth > this.largerImage.offsetWidth) ? print : this.largerImage
				} else {
					this.largerImage = print
				}
			}).value()

			// this._prints.style.width = this.largerImage.offsetWidth + 'px'
			this._footer.style.width = this.largerImage.offsetWidth + 'px'

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
		let artist, title, city, country, year, story, forsale, url, details, desc = []

		if (current) {
			title = current.title
			city = current.city
			country = current.country
			year = current.year
			story = current.desc
			forsale = current.forsale
			url = '/shop/' + current.token
		}

		if (title) details = title+'. '+city+'. '+country+'. '+year
		else details = city+'. '+country+'. '+year

		let slideshowClass = (this.props.show) ? '' : 'project__slideshow--hidden';
		let bigSlideshowClass = (this.state.bigPrintsLoaded) ? '' : 'project__bigslideshow--hidden'

		let prev = (this.state.current-1 < 0) ? this.nPrints-1 : this.state.current-1;
		let next = (this.state.current+1 >= this.nPrints) ? 0 : this.state.current+1;

		// SEO
		let image = config.siteurl + '/static/img/elliott-erwitt.jpg';;
		if (_.size(this.props.prints) > 0) {
			image = config.siteurl + '/static/prints/' + this.props.prints[this.state.current].file + '.jpg';
		}

		let seo = {
			title: 'Elliott Erwitt Havana Club 7 Fellowship | Gallery',
			description: details,
			url: config.siteurl + '/photography/' + this.props.project + '/gallery/' + this.state.current,
			image: image,
			twitter: 'Elliott%20Erwitt%20Havana%20Club%207%20Fellowship%20%7C%20Gallery'
		};
		let seoComponent;
		if (this.props.show) {
			seoComponent = (<Seo seo={seo} />)
		}

							// <Link to={'/photography/'+this.props.project+'/gallery/'+prev} className='project__prev'><div className='arrow'></div></Link>
							// <Link to={'/photography/'+this.props.project+'/gallery/'+next} className='project__next'><div className='arrow arrow--right'></div></Link>
		return (
			<div>
				{seoComponent}
				<div className={'project__slideshow ' + slideshowClass}>
					<div className='project__contact submenu'><Link to={'/photography/'+this.props.project+'/contact-sheet'} className='button'>Contact sheet</Link></div>
					<div className='project__content'>
						<div className='project__prints'>
							{Object.keys(this.props.prints).map((id, index) => {
								let file = this.props.prints[id].file + '_big.jpg'
								let status = (index === this.state.current) ? 'project__print--current' : ''
								return (
									<div className={'project__print '+status} onClick={this._zoomInBinded} key={id}>
										<img className='project__image' src={'/static/prints/'+file}></img>
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
									<Link to={url} className='project__buy button'>Buy print</Link>
								)
							})()}
						</div>
						<div className='project__section project__infos'>
							{(() => {
								if (forsale) return (
									<h3 className='text'>{details}</h3>
								)
							})()}
						</div>
						<div className='project__section'>
							<div className='project__sharer'>
								<a href='#' className='project__share'>Share</a>
								<div className='project__socials'>
									<div className='button project__social' data-href="https://developers.facebook.com/docs/plugins/" data-layout="link">facebook</div>
									<a className='twitter-share-button button project__social' href={'https://twitter.com/intent/tweet?url='+seo.url+'&text='+seo.twitter}>Twitter</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{(() => {
					if (!this.props.isMobile) return (
						<div className={'project__bigslideshow ' + bigSlideshowClass}>
							<div className='project__bigcontent'>
								<div className='project__bigprints'>
									{Object.keys(this.props.prints).map((id, index) => {
										let file = this.props.prints[id].file + '_big.jpg'
										let status = (index === this.state.current) ? 'project__bigprint--current' : ''
										return (
											<div className={'project__bigprint '+status} onClick={this._zoomOutBinded} key={id}>
												<img className='project__bigimage' src={'/static/prints/'+file}></img>
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
					)
				})()}
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
		this._content.style.width = this.largerImage.offsetWidth + 'px'
		this._footer.style.width = this.largerImage.offsetWidth + 'px'

		let el = document.querySelector('.project__bigprint--current .project__bigimage')
		if (el) {
			this.printY += (((this.cursorY / window.innerHeight) * (el.offsetHeight - window.innerHeight)) - this.printY) * 0.1
			let top = -this.printY
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
		if (!this.props.isMobile) {
			// this.tlZoomIn = new TimelineMax({paused: true})
			// this.tlZoomIn.staggerTo([
			// 	dom('.front-container'),
			// 	dom('.project__footer'),
			// 	dom('.project__contact'),
			// 	dom('.project__slideshow')
			// ], 0.4, {opacity: 0}, 0)
			// this.tlZoomIn.play()

			document.querySelector('body').classList.add('body--hidden');
			document.querySelector('.project__bigslideshow').classList.remove('project__bigslideshow--hidden');

			this.nBigPrints = _.size(this.state.prints)
			if (this.nBigPrints > 0 && !this.bigPrintsLoaded) {
				this.bigPrintsLoaded = true
				let file;
				_(this.state.prints).forEach((print, index) => {
					file = new Image()
					file.onload = this.onBigPrintLoaded.bind(this)
					file.src = '/static/prints/'+print.file+'_big.jpg'
				}.bind(this)).value();
			}
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

	onkeydown(e) {
		if (this.props.show) {
			if (e.keyCode === 37) this._prev()
			if (e.keyCode === 39) this._next()
		}
	}

}
