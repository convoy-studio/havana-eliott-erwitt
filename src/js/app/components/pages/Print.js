import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import CartActions from 'CartActions'
import CartStore from 'CartStore'
let _ = require('lodash')

export default class Print extends Page {
	
	constructor(props) {
		super(props)

		// state
		this.state = { 
			print: undefined,
			selectedSerial: undefined,
			loadedPrint: undefined,
			cartItems: CartStore.getCartItems(),
			validSerials: []
		}

		// function binded
		this._toggleListBinded = this._toggleList.bind(this)
		this._addToCartBinded = this._addToCart.bind(this)
		this._onStoreChangeBinded = this._onStoreChange.bind(this)
		this._onCartStoreChangeBinded = this._onCartStoreChange.bind(this)

		// vars
		this.loaded = false
		this.validSerials = []
	}

	componentDidMount() {
		super.componentDidMount()
		
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

		// this._updateSerials()
	}

	componentWillUnmount() {
		PrintStore.removeChangeListener(this._onStoreChangeBinded);	
		CartStore.removeChangeListener(this._onStoreChangeBinded);
	}

	setupAnimations() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// transition In
		// if (this.props.oldHash.parent === 'shop') {
		// 	this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
		// 	this.tlIn.set(document.querySelector('.print'), { opacity:1 }, 0)
		// 	this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)
		// } else {
			this.tlIn.set(wrapper, { opacity: 1 }, 0)
			this.tlIn.to(document.querySelector('.page__overlay--print'), 0.4, { y: window.innerHeight, ease:Power2.easeOut }, 0)
			this.tlIn.from(document.querySelector('.header__logo'), 0.6, { opacity:1, ease:Power2.easeOut }, 0.4)
			this.tlIn.from(document.querySelector('.print'), 0.6, { opacity:0, ease:Power2.easeInOut }, 0.4)
		// }

		// transition Out
		this.tlOut.to(document.querySelector('.header__logo'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		this.tlOut.to(document.querySelector('.print'), 0.6, { opacity:0, ease:Power2.easeInOut }, 0)
		this.tlOut.to(document.querySelector('.page__overlay--print'), 0.4, { y: 0, ease:Power2.easeOut }, 0.6)
		this.tlOut.set(wrapper, { opacity:0 })

		// reset
		this.tlIn.pause(0)
		this.tlOut.pause(0)
	}

	render() {
		let that = this
		let title, city, country, year, price, desc, serials

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
		}

		return (
			<div className='page page--print' ref='page-wrapper'>
				<div className='page__overlay page__overlay--print'></div>
					<div className='print'>
						{this.state.loadedPrint}
						<div className='print__infos'>
							<h3 className='print__artist text'>Artist</h3>
							<h3 className='print__location text'>{title}. {city}. {country}. {year}</h3>
							<div className='print__price text text--small'>{price}€</div>
							<p className='print__desc text text--small'>{desc}</p>
							<div className='print__serials'>
								{(() => {
									if (serials && serials.length > 0 && that.selectedSerial !== 0) { return (
										<div>
											<div className='print__serial-opt text'>Choose edition</div>
											<div className='print__select text'>
												<div className='print__serial--selected' onClick={this._toggleListBinded}>{that.selectedSerial}</div>
												<ul className='print__serial-list'>
													{Object.keys(that.validSerials).map((index) => {
														let enabled = that.validSerials[index]
														let serial = parseInt(index)+1
														// let classSelected = (serial === that.state.serial) ? 'print__serial--selected' : ''
														// let classEnabled = (enabled) ? 'print__serial--enabled' : ''
														if (enabled) {
															return (<li className='print__serial' onClick={that._selectSerial.bind(that, serial)} key={index}>{serial}</li>)
														} else {
															return (<li className='print__serial print__serial--disabled' key={index}>{serial}</li>)
														}
													})}
												</ul>
											</div>
											<a href='#' className='print__buy button' onClick={that._addToCartBinded}>Add to cart</a>
										</div>
									)} else { return (
										<div className='text'>Out of stock</div>
									)}
								})()}
							</div>
						</div>
					</div>
			</div>
		)
	}

	// _updateSerials() {
	// 	console.log('update validSerials')
	// 	this.validSerials = []
	// 	this.cartSerials = _.pluck(_.filter(this.state.cartItems, { 'id': this.state.print._id }), 'serial')
	// 	_(this.state.print.serials).forEach((value, index) => {
	// 		if (_.indexOf(this.cartSerials, index+1) > -1) this.validSerials[index] = false
	// 		else this.validSerials[index] = value
	// 	}).value()

	// 	// this.setState({
	// 	// 	validSerials: this.validSerials
	// 	// }, () => {
	// 	// 	this._getFirstSerial()
	// 	// })

	// 	this.setState({
	// 		validSerials: this.validSerials,
	// 		selectedSerial: this._getFirstSerial()
	// 	})
	// }

	_getValidSerials() {
		this.validSerials = []
		this.cartSerials = _.pluck(_.filter(this.state.cartItems, { 'id': this.state.print._id }), 'serial')
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

		let printId = this.state.print._id;
		let update = {
			id: this.state.print._id,
			title: this.state.print.title,
			city: this.state.print.city,
			country: this.state.print.country,
			year: this.state.print.year,
			price: this.state.print.price,
			serial: this.state.selectedSerial,
			file: this.state.print.file,
			copies: this.state.print.copies
		}
		CartActions.addToCart(printId, update);
		CartActions.updateCartEnabled(true);

		this.setState({
			selectedSerial: this._getFirstSerial()
		})
	}

	_toggleList() {
		dom('.print__serial-list').toggleClass('enabled')
	}

	_loadImage() {
		let that = this, file

		file = new Image()
		file.onload = that._onImageLoaded.bind(that)
		file.src = '/static/img/'+this.state.print.file+'_medium.jpg'
	}

	_onImageLoaded(e) {
		let size
		let path = e.explicitOriginalTarget || e.target || e.path[0] 
		if (path.height >= path.width*1.2) size = 'portrait'
		else size = 'landscape'
		let dim = '27.9 × 35.6 cm' // gérer la conversion (11 × 14 inches)

		this.print = <div className='print__left'><div className={'print__image print__image--'+size}><img src={'/static/img/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>{dim}, unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>

		// if (params.path[0].height >= params.path[0].width*1.2) {
		// 	this.print = <div className='print__left'><div className='print__image print__image--portrait'><img src={'/static/img/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
		// } else {
		// 	this.print = <div className='print__left'><div className='print__image print__image--landscape'><img src={'/static/img/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
		// }
		this.setState({
			'loadedPrint': this.print
		});
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
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

	// _onStoreChange() {
	// 	this.setState({
	// 		print: PrintStore.getOne(),
	// 		// cartItems: CartStore.getCartItems()
	// 	}, () => {
	// 		this._updateSerials()
	// 		this._loadImage()
	// 		this.setState({
	// 			serial: this._getFirstSerial()
	// 		})
	// 	})
	// }

	// _onCartStoreChange() {
	// 	this.setState({
	// 		cartItems: CartStore.getCartItems()
	// 	}, () => {
	// 		this._updateSerials()
	// 		this.setState({
	// 			serial: this._getFirstSerial()
	// 		})
	// 	})
	// }
}
