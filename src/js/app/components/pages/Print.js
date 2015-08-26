import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import CartActions from 'CartActions'
let _ = require('lodash')

export default class Print extends Page {
	
	constructor(props) {
		super(props)

		dom('body')
			.removeClass('body--black')
			.addClass('body--white')

		this._addToCartBinded = this._addToCart.bind(this)
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this.state = { 
			print: undefined,
			serial: undefined,
			loadedPrint: undefined
		};

		PrintApi.getOne(this.props.idSection);
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

		return (
			<div className='page page--print' ref='page-wrapper'>
				{(() => {
					if (this.state.print) return (
						<div className='print'>
							{this.state.loadedPrint}
							<div className='print__infos'>
								<h2 className='print__artist'>{that.state.print.title}</h2>
								<h3 className='print__location'>
									<span className='print__city'>{that.state.print.city}, {that.state.print.country},</span> {that.state.print.year}
								</h3>
								<h3 className='print__artist'>Elliott Erwitt</h3>
								<div className='print__price text text--small'>{that.state.print.price}€</div>
								<p className='print__desc text text--small'>{that.state.print.desc}</p>
								<div className='print__serials'>
									{(() => {
										if (that.state.print.serials.length > 0) { return (
											<div>
												<div className='print__serial-opt'>
													Serial option
													<div className='print__count'>/{that.state.print.copies}</div>
												</div>
												<ul className='print__serial-list'>
													{Object.keys(that.state.print.serials).map(function(index){
														let serial = that.state.print.serials[index];
														return (
															<li className={(serial === that.state.serial) ? 'print__serial print__serial--enabled' : 'print__serial'} onClick={that._selectSerial.bind(that, serial)} key={index}>{serial}</li>
														)
													})}
												</ul>
												<a href='#' className='print__buy text text--small button button--center button--small' onClick={that._addToCartBinded}>Buy print</a>
											</div>
										)} else { return (
											<div>Out of stock</div>
										)}
									})()}
								</div>
							</div>
						</div>
					)
				})()}
			</div>
		)
	}

	_selectSerial(serial, e) {
		dom('.serial--enabled').removeClass('serial--enabled')
		dom(e.target).addClass('serial--enabled')
		this.setState({
			serial: serial
		})
	}

	_addToCart(e) {
		e.preventDefault()

		let printId = this.state.print._id;
		let update = {
			city: this.state.print.city,
			year: this.state.print.year,
			price: this.state.print.price,
			serial: this.state.serial,
			file: this.state.print.file,
			copies: this.state.print.copies
		}
		CartActions.addToCart(printId, update);
		CartActions.updateCartEnabled(true);

		let serials = [1,2,3,4,5,6,7,8,9,10]
		let index = serials.indexOf(this.state.serial);
		if (index > -1) {
			serials.splice(index, 1);
		}
	}

	_loadImage() {
		let that = this, file

		file = new Image()
		file.onload = that._onImageLoaded.bind(that)
		file.src = './assets/images/prints/'+this.state.print.file+'_medium.jpg'
	}

	_onImageLoaded(params) {
		if (params.path[0].height >= params.path[0].width*1.2) {
			this.print = <div className='print__left'><div className='print__image print__image--portrait'><img src={'./assets/images/prints/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Archival pigment print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches)</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of 10.</p></div></div></div>
		} else {
			this.print = <div className='print__left'><div className='print__image print__image--landscape'><img src={'./assets/images/prints/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Archival pigment print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches)</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of 10.</p></div></div></div>
		}
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

	_onPrintStoreChange() {
		this.setState({
			print: PrintStore.getOne()
		}, () => {
			this._loadImage()
			this.setState({
				serial: this.state.print.serials[0]
			})
		})
	}
}
