import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import Utils from 'Utils'
import offset from 'offset'
let scroll = Utils.Scroll()
let _ = require('lodash')

export default class Shop extends Page {
	
	constructor(props) {
		super(props)

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
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

	render() {
		let that = this
		let shopData = AppStore.shopContent()

		return (
			<div id='page page--shop' ref='page-wrapper'>
				<div className='shop__intro text text--bigger'>
					{Object.keys(shopData.intro.paragraphs).map((index) => {
						return (
							<p className='shop__paragraph' key={index}>{shopData.intro.paragraphs[index]}</p>
						)
					})}
				</div>
				<div className='shop'>
					{Object.keys(this.state.prints).map(function(id, index){
						let print = that.state.prints[id]
						// let file = print.file + '_min.jpg'
						let file = print.file + '_medium.jpg'
						let speed = (index % 2 === 0) ? 'fast' : 'slow'
						return (
							<div className={'shop__print js-'+speed} key={id}>
								<a href={'#/shop/'+id}>
									<img src={'./assets/images/prints/'+file}></img>
									<div className='shop__hover'>
										<div className='shop__detail'>
											<div className='shop__city'>{print.city}</div>, <div className='shop__year'>{print.year}</div>
											<div className='shop__price'>{print.price}€</div>
											<div className='shop__details button button--center button--small'>More details</div>
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
