import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import PrintActions from 'PrintActions'
import Utils from 'Utils'
import offset from 'offset'
let _ = require('lodash')
let Masonry = require('masonry-layout')
let scroll = Utils.Scroll()

export default class Gallery extends Page {
	constructor(props) {
		super(props)

		// props
		this.props = props

		// state
		this.state = { 
			prints: [],
			loadedPrints: []
		}

		// function binded
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this._rafBinded = this._raf.bind(this)
		
		// const
		this.OPACITY_MARGE = 30
		this.OPACITY_DURATION = 300
		
		// vars
		this.speed = 2
		this.sTop = 0
		this.cTop = 0
		this.eShow = []
		// this.eTop = []
		this.eTop = 0
		this.loaded = false
		this.nImageLoaded = 0
		this.prints = []
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
	}

	componentDidMount() {
		super.componentDidMount()

		
		PrintApi.getByArtist(this.props.idSection);
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);

		this._gallery = document.querySelector('.gallery')
	}

	componentWillUnmount() {
		window.cancelAnimationFrame(this.scrollRaf)
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);	
	}

	setupAnimations() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// transition In
		this.tlIn.addCallback(this._rafBinded, 0)
		this.tlIn.to(document.querySelector('.header__logo'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
		this.tlIn.from(document.querySelector('.submenu'), 0.6, { opacity:0, ease:Power2.easeInOut }, 0)
		this.tlIn.set(wrapper, { opacity:1, ease:Power2.easeInOut }, 0)

		// reset
		this.tlIn.pause(0)
		this.tlOut.pause(0)
	}

	updateAnimationOut() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])
		
		this.tlOut.clear()
		this.tlOut.staggerTo(_.shuffle(dom('.gallery__item')), 0.6, { opacity:0, ease:Power2.easeOut }, 0.01)
		this.tlOut.to(document.querySelector('.header__logo'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		this.tlOut.to(wrapper, 0.6, { opacity:0, ease:Power2.easeOut }, '-=0.6')
	}

	render() {
		let that = this
		let printIndex = -1
		return (
			<div className='page page--gallery' ref='page-wrapper'>
				<div className='submenu'><a href={'#/photography/'+this.props.idSection} className='button'><span className='button__content'>Back to gallery</span></a></div>
				<div className='gallery js-smooth'>
					{Object.keys(this.state.loadedPrints).reverse().map((year, i) => {
						return (
							<div key={year+'_'+i}>
								<div className='gallery__title title js-reveal'>Elliott Erwitt {year}</div>
								<div className='gallery__grid'>
									<div className='gallery__width'></div>
									{Object.keys(that.state.loadedPrints[year]).map((printId, j) => { 
										let print = that.state.loadedPrints[year][printId]
										let src = '/static/img/'+print.file+'_min.jpg'
										let random = Math.floor(Math.random()*6)
										printIndex++
										return (
											<div className={'js-reveal gallery__item gallery__item--'+print.size+' gallery__item--'+random} data-random={random} key={printId} onClick={that.zoomPrint.bind(that, printIndex)}><img className='gallery__image' src={src}></img></div>
										)
									})}
								</div>
							</div>
						)
					})}
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
		let e;
		this.sTop = Utils.GetScrollTop()
		this.cTop += .1 * (this.sTop - this.cTop)
		e = -this.cTop
		if (this._gallery) {
			this._gallery.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)'
		}


		_(dom('.js-reveal')).forEach((el, index) => {
			this.lTop = offset(el).top
			if (!this.eShow[index]) {
				this.eShow[index] = false
				// TweenMax.set(el, {y: 100, opacity: 0})
			}

			// in viewport
			if (this.lTop - window.innerHeight < 0 && !this.eShow[index]) {
				this.eShow[index] = true
				TweenMax.to(el, 0.6, {y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random()*0.2})
			}
			
			// off viewport
			if (this.lTop - window.innerHeight > 0 && this.eShow[index]) {
				this.eShow[index] = false
				TweenMax.set(el, {y: 100, opacity: 0})
			}

			// this.limitOffset = offset(el)
			// this.limitTop = this.limitOffset.top - window.innerHeight + this.OPACITY_MARGE
			// this.elOpacity = Utils.Interval(this.limitTop / (-this.OPACITY_DURATION), 0, 1)
			// this.elY = (1-this.elOpacity) * 50
			// el.style.opacity = this.elOpacity
			// el.style[this.transform] = ('translate(0px, '+ this.elY +'px) translateZ(0px)')

		}).value();
	}

	componentDidUpdate() {
		let that = this, file
		this.max = _.size(this.state.prints)
		this.printsDate = {};
		if (this.max > 0 && !this.loaded) {
			this.loaded = true
			_(this.state.prints).forEach((print, index) => {
				if (!this.printsDate[print.year]) this.printsDate[print.year] = []
				this.printsDate[print.year].push(print)

				file = new Image()
				file.onload = that.onImageLoaded.bind(that, print)
				file.src = '/static/img/'+print.file+'_min.jpg'
			}).value();
		}
	}

	onImageLoaded(print, e) {
		this.nImageLoaded++;

		let that = this
		let path = e.explicitOriginalTarget || e.target || e.path[0] 
		if (path.height >= path.width*1.2) print.size = 'small'
		else print.size = 'large'
		
		if (this.nImageLoaded >= this.max) {
			this.setState({
				'loadedPrints': this.printsDate
			}, () => {
				document.querySelector('.page--gallery').style.height = this._gallery.offsetHeight + 'px'
				this.updateAnimationOut()
			});
		}
	}

	zoomPrint(id) {
		let that = this
		
		PrintActions.setPrintZoom(id)
		window.cancelAnimationFrame(this.scrollRaf)
		
		// this.tlItemsOut = new TimelineMax()
		// this.tlItemsOut.staggerTo(_.shuffle(dom('.gallery__item')), 0.6, { opacity:0, ease:Expo.easeOut }, 0.01)
		// this.tlItemsOut.addCallback(() => {
			window.location.href = '#/photography/'+that.props.idSection;
		// }, '-=0.2')
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()

		if (this._body && this._body.classList.contains('js-mobile')) { 
			if (this.scrollRaf) {
				document.querySelector('.page--gallery').style.height = 'auto'
				this.setState({
					isMobile: true
				});
				_(document.querySelectorAll('.gallery__item')).forEach((el) => {
					el.style.height = document.querySelectorAll('.gallery__image')[0].offsetHeight
				}).value()
				window.cancelAnimationFrame(this.scrollRaf)
				this.scrollRaf = null;
			}
		} else {
			if (!this.scrollRaf) {
				if (this._fellowship) {
					document.querySelector('.page--gallery').style.height = this._gallery.offsetHeight + 'px'
				}
				this.setState({
					isMobile: false
				});
				this._raf()
			}
		}
	}

	_onPrintStoreChange() {
		this.setState({
			prints: PrintStore.getArtistPrints()
		}, () => {

		})
	}
}
