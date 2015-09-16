import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import CartActions from 'CartActions'
import CartStore from 'CartStore'
import CartApi from 'CartApi'
import PrintApi from 'PrintApi'
import OrderApi from 'OrderApi'
import OrderStore from 'OrderStore'
let _ = require('lodash')

function _getCartState() {
	return {
		cartItems: CartStore.getCartItems(),
		cartCount: CartStore.getCartCount(),
		cartTotal: CartStore.getCartTotal()
	}
}

export default class Payment extends Page {
	
	constructor(props) {
		super(props)

		this.state = _getCartState()
		this.state.form = undefined
	}
	
	componentDidMount() {
		super.componentDidMount()

		this._onStoreChangeBinded = this._onStoreChange.bind(this)
		this._onOrderStoreChangeBinded = this._onOrderStoreChange.bind(this)

		let hack = setTimeout(function() {
			CartActions.updateCartEnabled(false)
			CartActions.updateCartVisible(false)
			clearTimeout(hack)
		}, 0);

		CartStore.addChangeListener(this._onStoreChangeBinded);
		OrderStore.addChangeListener(this._onOrderStoreChangeBinded);
	}

	componentWillUnmount() {
		CartActions.updateCartVisible(true)
	}

	setupAnimations() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// transition In
		this.tlIn.to(document.querySelector('.header__logo'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		this.tlIn.to(document.querySelector('.header__menu'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

		// transition Out
		this.tlOut.to(document.querySelector('.header__logo'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		this.tlOut.to(document.querySelector('.header__menu'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
		this.tlOut.to(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)


		// // transition In
		// this.tlIn.set(wrapper, { opacity: 1 }, 0)
		// this.tlIn.from(document.querySelector('.payment__title'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
		// this.tlIn.from(document.querySelector('.payment'), 0.6, { opacity:0, ease:Power2.easeInOut }, 0)
		// this.tlIn.to(document.querySelector('#header'), 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

		// // transition Out
		// this.tlOut.to(document.querySelector('.payment__title'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		// this.tlOut.to(document.querySelector('.payment'), 0.6, { opacity:0, ease:Power2.easeInOut }, 0)
		// this.tlOut.to(document.querySelector('#header'), 0.6, { opacity:1, ease:Power2.easeInOut }, 0)
		// this.tlOut.set(wrapper, { opacity:0 })

		// reset
		this.tlIn.pause(0)
		this.tlOut.pause(0)
	}

	render() {
		let that = this

							// <div className='form__row'>
							// 	<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='upsExpress'/>
							// 	<label className='form__label form__label--pointer' htmlFor='upsExpress'><p className='form__text'>UPS Express - Delivery within 2-3 business days, 20 €</p></label>
							// </div>
							// <div className='form__row'>
							// 	<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='freeShipping' defaultChecked/>
							// 	<label className='form__label form__label--pointer' htmlFor='freeShipping'><p className='form__text'>Free shipping (UPS standard), 0 €</p></label>
							// </div>

		return (
			<div className='page page--payment' ref='page-wrapper'>
				<h1 className='payment__title title'>Checkout</h1>
				<div className='submenu'><a href='#/shop' className='button'>Back to shop</a></div>
				<div className='payment'>
					<form className='payment__form form'>
						<div className='payment__column'>
							<h3 className='form__title'>Checkout</h3>
							<div className='form__row'>
								<label className='form__label' htmlFor='mail'>Enter your email address</label>
								<input className='form__input form__input--text' type='mail' id='mail'/>
							</div>
							<h3 className='form__title'>Shipping address</h3>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<label className='form__label' htmlFor='firstname'>First name *</label>
									<input className='form__input form__input--text' type='text' id='firstname'/>
								</div>
								<div className='form__column'>
									<label className='form__label' htmlFor='lastname'>Last name *</label>
									<input className='form__input form__input--text' type='text' id='lastname'/>
								</div>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='phone'>Telephone *</label>
								<input className='form__input form__input--text' type='tel' id='phone'/>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='address'>Address *</label>
								<input className='form__input form__input--text form__input--comp' type='text' id='address'/>
								<input className='form__input form__input--text' type='text' id='addressBis'/>
							</div>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<label className='form__label' htmlFor='zip'>Zip/Postal code *</label>
									<input className='form__input form__input--text' type='text' id='zip'/>
								</div>
								<div className='form__column'>
									<label className='form__label' htmlFor='city'>City</label>
									<input className='form__input form__input--text' type='text' id='city'/>
								</div>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='country'>Country *</label>
								<input className='form__input form__input--text' type='text' id='country'/>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' type='checkbox' id='billAddress' defaultChecked/>
								<label className='form__label form__label--pointer' htmlFor='billAddress'><p className='form__text'>Bill to the same address</p></label>
							</div>
						</div>

						<div className='payment__column'>
							<h3 className='form__title'>Shipping method</h3>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='upsStandard'/>
								<label className='form__label form__label--pointer' htmlFor='upsStandard'><p className='form__text'>UPS Standard - Delivery within 3-5 business days, 10 €</p></label>
							</div>

							<h3 className='payment__method form__title'>Payment method</h3>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='maestro' defaultChecked/>
									<label className='form__label form__label--pointer' htmlFor='maestro'><p className='form__text'><img src='./assets/images/maestro.png'></img></p></label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='visa'/>
									<label className='form__label form__label--pointer' htmlFor='visa'><p className='form__text'><img src='./assets/images/visa.png'></img></p></label>
								</div>
							</div>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='paypal'/>
									<label className='form__label form__label--pointer' htmlFor='paypal'><p className='form__text'><img src='./assets/images/paypal.png'></img></p></label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='americanExpress'/>
									<label className='form__label form__label--pointer' htmlFor='americanExpress'><p className='form__text'><img src='./assets/images/americanExpress.png'></img></p></label>
								</div>
							</div>
						</div>

						<div className='payment__column'>
							<h3 className='form__title'>Order summary</h3>
							<ul className='payment__products cart__products'>
								{Object.keys(this.state.cartItems).map((index) => {
									let product = that.state.cartItems[index];
									return (
										<li key={index} className='payment__product cart__product'>
											<div className='cart__column'>
												<div className='cart__artist'>Artist</div>
												<div className='cart__details'>{product.title}. {product.city}. {product.country}. {product.year}</div>
												<div className='cart__serial'>Edition <span className='cart__number'>{product.serial}</span></div>
												<div className='cart__price'>{product.price}<span className='cart__currency'>€</span></div>
											</div>
											<div className='cart__column'>
												<div className='cart__print'><img className='cart__image' src={'/static/img/'+product.file+'_min.jpg'}></img></div>
												<div className='cart__remove button button--left' onClick={that.removeItem.bind(that, index)}><span className='button__content'>Remove item</span></div>
											</div>
										</li>
									)
								})}
							</ul>
							<div className='payment__total cart__total'>
								<div className='payment__subtotal cart__subtotal'>
									<div className='cart__column'>Subtotal:</div>
									<div className='cart__column'>{this.state.cartTotal}<span className='cart__currency'>€</span></div>
								</div>
								<div className='cart__tva'>
									<div className='cart__column'>Included TVA:</div>
									<div className='cart__column'>{this.state.cartTotal}<span className='cart__currency'>€</span></div>
								</div>
							</div>
							<div className='cart__bigtotal'>
								<div className='cart__column'>Grand total:</div>
								<div className='cart__column'>{this.state.cartTotal}<span className='cart__currency'>€</span></div>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' type='checkbox' id='newsletter'/>
								<label className='form__label form__label--pointer' htmlFor='newsletter'><p className='form__text'>I want to be informed of fellowship news</p></label>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' type='checkbox' id='conditions'/>
								<label className='form__label form__label--pointer' htmlFor='conditions'><p className='form__text'>I accept the terms and conditions*</p></label>
							</div>

							<a href='' className='payment__pay button' onClick={this.pay.bind(this)}>Proceed to payment</a>
						</div>
					</form>

					<div dangerouslySetInnerHTML={{__html: this.state.form}} />
					
				</div>

			</div>
		)
	}

	pay(e) {
		e.preventDefault()

		let orderPrints = []
		_(this.state.cartItems).forEach((item) => {
			orderPrints.push({
				printId: item.id,
				serial: item.serial
			})
		}).value()
		if (this.state.cartTotal > 0) {
			OrderApi.create({
				user: 'hello@aze.com',
				prints: orderPrints
			})
		}

		// CartApi.generatePayButton({
		// 	email: 'hello@aze.com',
		// 	firstname: 'Nicolas',
		// 	lastname: 'Daniel',
		// 	phone: '0102030405',
		// 	address: '23 rue xxx',
		// 	zip: '12345',
		// 	city: 'Azerty',
		// 	country: 'France',
		// 	total: this.state.cartTotal * 100
		// })
	}

	removeItem(id) {
		CartActions.removeFromCart(id)
		this.setState(_getCartState())
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
			form: CartStore.getForm()
		}, () => {
			if (document.querySelector('#paymentForm')) document.querySelector('#paymentForm').submit()
		})
	}

	_onOrderStoreChange() {
		let order = OrderStore.getCreated()
		
		CartApi.generatePayButton({
			order_id: order._id,
			user_id: order.user,
			total: this.state.cartTotal * 100
			// firstname: 'Nicolas',
			// lastname: 'Daniel',
			// phone: '0102030405',
			// address: '23 rue xxx',
			// zip: '12345',
			// city: 'Azerty',
			// country: 'France',
		})
	}
}
