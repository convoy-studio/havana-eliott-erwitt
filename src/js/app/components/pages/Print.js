import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import CartActions from 'CartActions'
import CartStore from 'CartStore'
import Utils from 'Utils'
let _ = require('lodash')
let scroll = Utils.Scroll()

export default class Print extends Page {
	
	constructor(props) {
		super(props)

		// state
		this.state = { 
			print: undefined,
			selectedSerial: undefined,
			loadedPrint: undefined,
			cartItems: CartStore.getCartItems(),
			validSerials: [],
			bigImageShowed: false,
			techDesc: ''
		}

		// function binded
		this._toggleListBinded = this._toggleList.bind(this)
		this._addToCartBinded = this._addToCart.bind(this)
		this._onStoreChangeBinded = this._onStoreChange.bind(this)
		this._onCartStoreChangeBinded = this._onCartStoreChange.bind(this)
		this._zoomInBinded = this._zoomIn.bind(this)
		this._zoomOutBinded = this._zoomOut.bind(this)
		this._onMousemoveBinded = this._onMousemove.bind(this)
		this._rafBinded = this._raf.bind(this)

		// vars
		this.loaded = false
		this.bigprintLoaded = false
		this.validSerials = []
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
		this.printY = 0
	}

	componentDidMount() {
		super.componentDidMount()
		
		document.addEventListener('mousemove', this._onMousemoveBinded)

		PrintApi.getOne(this.props.idSection);
		PrintStore.addChangeListener(this._onStoreChangeBinded);
		CartStore.addChangeListener(this._onStoreChangeBinded);
	}

	componentDidUpdate(prevProps, prevState) {
		this._loadImage()
	}

	componentDidUpdate() {
		let file
		if (!this.loaded) {
			this.loaded = true
			this._loadImage()
		}
	}

	componentWillUnmount() {
		document.removeEventListener('mousemove', this._onMousemoveBinded)
		PrintStore.removeChangeListener(this._onStoreChangeBinded);	
		CartStore.removeChangeListener(this._onStoreChangeBinded);
	}

	render() {
		let that = this
		let title, city, country, year, price, desc, serials, artist, bigfile, details

		if (this.state.print) {
			this.validSerials = this._getValidSerials()
			this.selectedSerial = this.state.selectedSerial || this._getFirstSerial()

			title = this.state.print.title
			city = this.state.print.city
			country = this.state.print.country
			year = this.state.print.year
			price = this.state.print.price
			desc = this.state.print.desc
			serials = this.state.print.serials
			artist = this.state.print.project.artist
			bigfile = '/static/img/'+this.state.print.file+'.jpg'
		}

		if (title) details = title+'. '+city+'. '+country+'. '+year
		else details = city+'. '+country+'. '+year
		
		let bigPrintClass = (this.state.bigImageShowed) ? '' : 'bigprint--hidden' 

		return (
			<div className='page page--print' ref='page-wrapper'>
				<div className='print'>
					{this.state.loadedPrint}
					<div className='print__infos'>
						<h3 className='print__artist text'>{artist}</h3>
						<h3 className='print__location text'>{details}</h3>
						<div className='print__price text text--small'>{price}€</div>
						<p className='print__desc text text--small'>{this.state.techDesc}</p>
						<div className='print__serials'>
							{(() => {
								if (serials && serials.length > 0 && this.selectedSerial !== 0) { return (
									<div>
										<div className='print__serial-opt text'>Choose edition</div>
										<div className='print__select text'>
											<div className='print__serial--selected' onClick={this._toggleListBinded}>{this.selectedSerial}</div>
											<ul className='print__serial-list'>
												{Object.keys(this.validSerials).map((index) => {
													let enabled = this.validSerials[index]
													let serial = parseInt(index)+1
													// let classSelected = (serial === this.state.serial) ? 'print__serial--selected' : ''
													// let classEnabled = (enabled) ? 'print__serial--enabled' : ''
													if (enabled) {
														return (<li className='print__serial' onClick={this._selectSerial.bind(this, serial)} key={index}>{serial}</li>)
													} else {
														return (<li className='print__serial print__serial--disabled' key={index}>{serial}</li>)
													}
												})}
											</ul>
										</div>
										<a href='#' className='print__buy button' onClick={this._addToCartBinded}>Add to cart</a>
									</div>
								)} else { return (
									<div className='text'>Out of stock</div>
								)}
							}.bind(this))()}
						</div>
					</div>
				</div>
				<div className={'bigprint ' + bigPrintClass}>
					<img className='bigprint__image' src={bigfile} onClick={this._zoomOutBinded}></img>
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
		let el = document.querySelector('.bigprint__image')
		if (el) {
			this.printY += (((this.cursorY / window.innerHeight) * (el.offsetHeight - window.innerHeight)) - this.printY) * 0.1
			let top = -this.printY
			el.style[this.transform] = 'translate3d(0, ' + top + 'px, 0)'
		}
	}

	_getValidSerials() {
		this.validSerials = []
		this.cartSerials = _.pluck(_.filter(this.state.cartItems, { 'token': this.state.print.token }), 'serial')
		_(this.state.print.serials).forEach((value, index) => {
			if (_.indexOf(this.cartSerials, index+1) > -1) this.validSerials[index] = false
			else this.validSerials[index] = value
		}).value()

		return this.validSerials
	}

	_getFirstSerial() {
		return _.indexOf(this.validSerials, true) + 1
	}

	_selectSerial(serial, e) {
		this._toggleList()
		dom('.serial--enabled').removeClass('serial--enabled')
		dom(e.target).addClass('serial--enabled')
		this.setState({
			selectedSerial: serial
		})
	}

	_addToCart(e) {
		e.stopPropagation()
		e.preventDefault()

		let update = {
			token: this.state.print.token,
			title: this.state.print.title,
			city: this.state.print.city,
			country: this.state.print.country,
			year: this.state.print.year,
			price: this.state.print.price,
			serial: this.state.selectedSerial,
			file: this.state.print.file,
			copies: this.state.print.copies,
			project: this.state.print.project
		}
		CartActions.addToCart(update);
		CartActions.updateCartEnabled(true);

		this.setState({
			selectedSerial: this._getFirstSerial()
		})
	}

	_toggleList() {
		dom('.print__serial-list').toggleClass('enabled')
	}

	_loadImage() {
		let file = new Image()
		file.onload = this._onImageLoaded.bind(this)
		file.src = '/static/img/'+this.state.print.file+'_medium.jpg'
	}

	_onImageLoaded(e) {
		let size, path = e.explicitOriginalTarget || e.target || e.path[0] 
		if (path.height >= path.width*1.2) size = 'portrait'
		else size = 'landscape'
		let dim = '27.9 × 35.6 cm' // gérer la conversion (11 × 14 inches)

		this.print = (
			<div className='print__left'>
				<div className={'print__image print__image--'+size}>
					<img className='print__file' src={'/static/img/'+this.state.print.file+'_medium.jpg'} onClick={this._zoomInBinded}></img>
				</div>
			</div>
		)

		this.techDesc = (
			<div className='print__tech'>
				<p>Silver gelatin print measuring</p>
				<p>{dim}, unframed.</p>
				<p>Printed under the direct supervision of the artist.</p>
				<p>One of a signed, limited edition of {this.state.print.copies}.</p>
			</div>
		)

		// if (params.path[0].height >= params.path[0].width*1.2) {
		// 	this.print = <div className='print__left'><div className='print__image print__image--portrait'><img src={'/static/img/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
		// } else {
		// 	this.print = <div className='print__left'><div className='print__image print__image--landscape'><img src={'/static/img/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
		// }
		this.setState({
			'loadedPrint': this.print,
			'techDesc': this.techDesc
		});
	}

	_onBigImageLoaded(e) {
		this.setState({
			bigImageShowed: true
		}, () => {
			this._raf()
		});
	}

	_zoomIn() {
		document.querySelector('body').classList.add('body--hidden');
		document.querySelector('.bigprint').classList.remove('bigprint--hidden');
		
		if (!this.bigprintLoaded) {
			this.bigprintLoaded = true
			let file = new Image()
			file.onload = this._onBigImageLoaded.bind(this)
			file.src = '/static/img/'+this.state.print.file+'.jpg'
		}
	}

	_zoomOut() {
		document.querySelector('body').classList.remove('body--hidden');
		document.querySelector('.bigprint').classList.add('bigprint--hidden');
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	_onMousemove(e) {
		this.cursorY = e.clientY
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

	_onStoreChange() {
		this.setState({
			print: PrintStore.getOne(),
			cartItems: CartStore.getCartItems(),
			// selectedSerial: this._getFirstSerial()
		}, () => {
			this.setState({
				selectedSerial: this._getFirstSerial()
			})
		})
	}

	_onCartStoreChange() {
		this.setState({
			cartItems: CartStore.getCartItems()
		})
	}
}
