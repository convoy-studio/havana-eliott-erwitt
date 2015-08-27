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
let Masonry = require('masonry-layout');

export default class Shop extends Page {
	
	constructor(props) {
		super(props)

		dom('body')
			.removeClass('body--black')
			.addClass('body--white')

		this._showPrintsBinded = this._showPrints.bind(this)
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this.nImageLoaded = 0
		this.loaded = false
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
		this.rafBinded = this.raf.bind(this)
		this.state = { 
			prints: {}
		};
		
		// this.raf()

		PrintApi.getForSale();
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);
	}

	componentDidMount() {
		super.componentDidMount()
	}

	componentWillUnmount() {
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);
	}

	// setupAnimations() {
	// 	let wrapper = React.findDOMNode(this.refs['page-wrapper'])

	// 	// transition In
	// 	this.tlIn.to(dom('.front-container'), 0.4, {opacity: 0}, 0);
	// 	this.tlIn.from(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut}, 0.4)
	// 	this.tlIn.addCallback(() => {
	// 		console.log('call')
	// 		dom('body')
	// 			.removeClass('body--black')
	// 			.addClass('body--white')
	// 	}, 1.4)
	// 	this.tlIn.to(dom('.front-container'), 0.4, {opacity: 1}, 1.4);

	// 	// transition Out
	// 	this.tlOut.to(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut })

	// 	// reset
	// 	this.tlIn.pause(0)
	// 	this.tlOut.pause(0)
	// }

	render() {
		let that = this
		let shopData = AppStore.shopContent()

		return (
			<div className='page page--shop' ref='page-wrapper'>
				<div className='shop__intro'>
					<h2 className='shop__title'>{shopData.intro.title}</h2>
					{Object.keys(shopData.intro.paragraphs).map((index) => {
						return (
							<p className='shop__paragraph text text--big' key={index}>{shopData.intro.paragraphs[index]}</p>
						)
					})}
					<div className='discover shop__discover' onClick={this._showPrintsBinded}>
						<div className='shop__scroll button button--center button--small'>Discover Elliott Erwitt's prints</div>
						<div className='discover__arrow'><div className='arrow arrow--black'></div></div>
					</div>
				</div>
				<div className='shop'>
					{Object.keys(this.state.prints).map(function(id, index){
						let print = that.state.prints[id]
						// let file = print.file + '_min.jpg'
						let file = print.file + '_medium.jpg'
						// let speed = (index % 2 === 0) ? 'fast' : 'slow'
						return (
							<div className='shop__print' key={id}>
								<a href={'#/shop/'+id}>
									<img src={'./assets/images/prints/'+file}></img>
									<div className='shop__hover'>
										<div className='shop__detail'>
											<div className='print__title'>{print.title}</div>
											<div className='print__location'><div className='shop__city'>{print.city}, {print.country},</div> <div className='shop__year'>{print.year}</div></div>
											<div className='shop__price'>{print.price}€</div>
											<div className='shop__details button button--center button--small button--reverse'>More details</div>
										</div>
									</div>
								</a> 
							</div>
						)
					})}
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
				file.src = './assets/images/prints/'+print.file+'_min.jpg'
			}).value();
		}
	}

	onImageLoaded(e) {
		this.nImageLoaded++;
		if (this.nImageLoaded >= this.max) {
			let grid = document.querySelector('.shop')
			if (grid) {
				let iso = new Masonry(grid, {
					itemSelector: '.shop__print',
					columnWidth: '.shop__print',
					gutter: 50
				});
			}
		}
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
		let top = Utils.GetScrollTop()

		_(dom('.shop__print')).forEach((el) => {
			this.videoOffset = offset(el);
			this.scrollTop = Utils.GetScrollTop()
			// this.topPosition = Math.floor(this.props.videoID/3) * this.contentHeight
			this.topPosition = el.offsetTop
			this.yPosition = (this.scrollTop - this.topPosition) * 0.2;
			// this.yPosition = this.scrollTop * 0.2;

			if (dom(el).hasClass('js-fast')) {
				el.style[this.transform] = ('translate(0px, '+ (-this.yPosition) +'px)');
			}

			if (dom(el).hasClass('js-slow')) {
				el.style[this.transform] = ('translate(0px, '+ this.yPosition +'px)');
			}
		}).value();

		// if (document.querySelector('.fellowship__artist')) {
		// 	document.querySelector('.video__file').style[this.transform] = ('translate(0px, '+ ((top/2)-(window.innerHeight/2)) +'px) translateZ(0)');
		// 	document.querySelector('.fellowship__artist').style[this.transform] = ('translate(0px, '+ (-top/4) +'px) translateZ(0)');
		// 	document.querySelector('.fellowship__elliott').style[this.transform] = ('translate(0px, '+ (-top/4) +'px) translateZ(0)');
		// }
	}

	_showPrints() {
		this.slideshowOffsetTop = document.querySelector('.shop').offsetTop
		TweenMax.to(window, 1.2, {scrollTo:{y: this.slideshowOffsetTop - 40}, ease:Power2.easeOut})
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		super.resize()
	}

	_onPrintStoreChange() {
		this.setState({
			prints: PrintStore.getForSale()
		})
	}
}
