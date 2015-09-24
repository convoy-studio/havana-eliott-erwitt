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
let unscroll = Utils.Unscroll()
let _ = require('lodash')
let Masonry = require('masonry-layout');

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
		this._discoverBinded = this._discover.bind(this)
		
		// vars
		this.eShow = []
		this.nImageLoaded = 0
		this.loaded = false
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
		this.sTop = 0
		this.cTop = 0
	}

	componentDidMount() {
		super.componentDidMount()
		
		PrintApi.getForSale();
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);

		this._body = document.querySelector('body')
		this._page = document.querySelector('.page--shop')
		this._shop = document.querySelector('.shop')
		this._overlay = document.querySelector('.shop__overlay')
		this._intro = document.querySelector('.shop__intro')
		this._list = document.querySelector('.shop__list')

		if (window.innerWidth > 958) {
			this._raf()
		}
	}

	componentWillUnmount() {
		window.cancelAnimationFrame(this.scrollRaf)
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);
	}

	render() {
		let that = this
		let shopData = AppStore.shopContent()
		let pageClass = this.state.open ? '' : 'page--hidden'

		return (
			<div className={'page page--shop ' + pageClass} onClick={this._discoverBinded} ref='page-wrapper'>
				<div className='shop js-smooth'>
					<div className='shop__intro'>
						<h2 className='title'>{shopData.intro.title}</h2>
						{Object.keys(shopData.intro.paragraphs).map((index) => {
							return (
								<p className='shop__paragraph paragraph text' key={index}>{shopData.intro.paragraphs[index]}</p>
							)
						})}
						<div className='shop__discover button' onClick={this._discoverBinded}>Discover and buy photographs.</div>
					</div>
					<div className='shop__list'>
						<div className='shop__overlay'></div>
						{Object.keys(this.state.prints).map(function(id, index){
							let print = that.state.prints[id]
							let file = print.file + '_medium.jpg'
							let details
							if (print.title) details = print.title+'. '+print.city+'. '+print.country+'. '+print.year
							else details = print.city+'. '+print.country+'. '+print.year

							return (
								<div className='shop__print' key={id}>
									<a href={'#/shop/'+print.token}>
										<img src={'/static/img/'+file}></img>
										<div className='shop__hover'>
											<div className='shop__detail'>
												<div className='text'>{print.artist}</div>
												<div className='text'>{details}</div>
												<div className='shop__price text'>{print.price}€</div>
												<div className='shop__button button'>More details</div>
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
			let msnry = new Masonry( '.shop__list', {
				// options
				itemSelector: '.shop__print',
				columnWidth: '.shop__print',
				gutter: 10
			});
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
		this.cTop += 0.1 * (this.sTop - this.cTop)
		e = -this.cTop
		// if (this._intro) this._intro.style[this.transform] = 'translate3d(' + (-this._intro.offsetWidth/2) + 'px, ' + e + 'px, 0)'
		// if (this._list && this.state.open) this._list.style[this.transform] = 'translate3d(' + (-this._list.offsetWidth/2) + 'px, ' + e + 'px, 0)'
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

	_discover() {
		this.setState({
			open: true
		});
		// this._page.classList.remove('page--overflow')
		// this._overlay.classList.add('shop__overlay--hidden')
		// this._intro.classList.add('shop__intro--hidden')
		document.querySelector('.page--shop').style.height = this._shop.offsetHeight + 'px'
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
				document.querySelector('.page--shop').style.height = 'auto'
				Utils.Unscroll(this.scrollRaf)
				this.scrollRaf = null;
			}
		} else {
			if (!this.scrollRaf) {
				if (this._fellowship) document.querySelector('.page--shop').style.height = this._fellowship.offsetHeight + 'px'
				this._raf()
			}
		}
	}

	_onPrintStoreChange() {
		this.setState({
			prints: PrintStore.getForSale()
		})
	}
}
