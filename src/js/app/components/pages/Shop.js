import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import Utils from 'Utils'
import offset from 'offset'
import TweenMax from 'gsap'
import scrollTo from 'scrollTo'
let scroll = Utils.Scroll()
let _ = require('lodash')
// let Masonry = require('masonry-layout');

export default class Shop extends Page {
	
	constructor(props) {
		super(props)

		// props
		this.props = props

		// state
		this.state = { 
			prints: {},
			loaded: false
		}

		// function binded
		this._showPrintsBinded = this._showPrints.bind(this)
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this._rafBinded = this._raf.bind(this)
		
		// vars
		this.eShow = []
		this.nImageLoaded = 0
		this.loaded = false
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')

		dom('body')
			.removeClass('body--black')
			.addClass('body--white')
	}

	componentDidMount() {
		super.componentDidMount()
		
		PrintApi.getForSale();
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);

		this._shop = document.querySelector('.shop')

		// if (this.props.oldHash && this.props.oldHash.parent === 'shop' && this.props.oldHash.parts.length > 1) {
		// 	// console.log(document.querySelector('.shop').offsetTop, offset(dom('.shop')).top)
		// 	// window.scrollTo(0, offset(dom('.shop')).top)
		// 	setTimeout(() => {
		// 		window.scrollTo(0, document.querySelector('.shop').offsetTop)
		// 	}, 1000)
		// }

		// window.scrollTo(0,0)
		// console.log('init raf shop')
		this._raf()
	}

	componentWillUnmount() {
		window.cancelAnimationFrame(this.scrollRaf)
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);
	}

	// setupAnimations() {
	// 	let wrapper = React.findDOMNode(this.refs['page-wrapper'])

	// 	// transition In
	// 	this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity:0, ease:Power2.easeOut }, 0.6)
	// 	this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0.6)

	// 	// transition Out
	// 	this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
	// 	this.tlOut.to(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

	// 	// reset
	// 	this.tlIn.pause(0)
	// 	this.tlOut.pause(0)
	// }

	setupAnimations() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// transition In
		// if ((this.props.oldHash && (this.props.oldHash.parent === 'shop' && this.props.oldHash.parts.length > 1) || this.props.oldHash.parent === 'payment') {
		// 	this.tlIn.addCallback(this._rafBinded, 0)
		// 	this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
		// 	this.tlIn.set(document.querySelector('.shop'), { opacity:1 }, 0)
		// 	this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)
		// } else {
			this.tlIn.set(wrapper, { opacity: 1 }, 0)
			this.tlIn.to(document.querySelector('.page__overlay--shop'), 0.4, { y: window.innerHeight, ease:Power2.easeOut }, 0)
			this.tlIn.addCallback(this._rafBinded, 0.4)
			this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity:1, ease:Power2.easeOut }, 0.4)
			this.tlIn.from(document.querySelector('.shop'), 0.6, { opacity:0, ease:Power2.easeInOut }, 0.4)
		// }

		// transition Out
		this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		this.tlOut.to(document.querySelector('.shop'), 0.6, { opacity:0, ease:Power2.easeInOut }, 0)
		this.tlOut.to(document.querySelector('.page__overlay--shop'), 0.4, { y: 0, ease:Power2.easeOut }, 0.6)
		this.tlOut.set(wrapper, { opacity:0 })

		// reset
		this.tlIn.pause(0)
		this.tlOut.pause(0)
	}

	render() {
		let that = this
		let shopData = AppStore.shopContent()

		return (
			<div className='page page--shop' ref='page-wrapper'>
				<div className='page__overlay page__overlay--shop'></div>
				<div className='shop js-smooth'>
					<div className='shop__intro'>
						<h2 className='shop__title'>{shopData.intro.title}</h2>
						{Object.keys(shopData.intro.paragraphs).map((index) => {
							return (
								<p className='shop__paragraph text text--big' key={index}>{shopData.intro.paragraphs[index]}</p>
							)
						})}
						<div className='discover shop__discover' onClick={this._showPrintsBinded}>
							<div className='button'><span className='button__content'>Discover Elliott Erwitt's prints</span></div>
							<div className='discover__arrow'><div className='arrow arrow--black'></div></div>
						</div>
					</div>
					<div className='shop__list'>
						{Object.keys(this.state.prints).map(function(id, index){
							let print = that.state.prints[id]
							let file = print.file + '_medium.jpg'
							// let speed = (index % 2 === 0) ? 'fast' : 'slow'
							// let side = (index % 2 === 0) ? 'left' : 'right'
							return (
								<div className='shop__print' key={id}>
									<a href={'#/shop/'+id}>
										<img src={'/static/img/'+file}></img>
										<div className='shop__hover'>
											<div className='shop__detail'>
												<div className='print__title'>{print.title}</div>
												<div className='print__location'><div className='shop__city'>{print.city}, {print.country},</div> <div className='shop__year'>{print.year}</div></div>
												<div className='shop__price'>{print.price}€</div>
												<div className='shop__details button button--reverse'><span className='button__content'>More details</span></div>
											</div>
										</div>
									</a> 
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}

	componentDidUpdate() {
		let that = this, file
		this.max = _.size(this.state.prints)
		if (this.max > 0 && !this.loaded) {
			this.loaded = true
			_(this.state.prints).forEach((print, index) => {
				file = new Image()
				file.onload = that.onImageLoaded.bind(that)
				file.src = '/static/img/'+print.file+'_medium.jpg'
			}).value();
		}
	}

	onImageLoaded(e) {
		this.nImageLoaded++;

		if (this.nImageLoaded >= this.max) {
			document.querySelector('.page--shop').style.height = this._shop.offsetHeight + 'px'
		}
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
		if (this._shop) this._shop.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)'

		_(dom('.shop__print')).forEach((el, index) => {
			this.lTop = offset(el).top
			if (!this.eShow[index]) {
				this.eShow[index] = false
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
		}).value();
	}

	_showPrints() {
		this.slideshowOffsetTop = document.querySelector('.shop__list').offsetTop
		TweenMax.to(window, 1.2, {scrollTo:{y: this.slideshowOffsetTop - 40}, ease:Power2.easeOut})
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

	_onPrintStoreChange() {
		this.setState({
			prints: PrintStore.getForSale()
		})
	}
}
