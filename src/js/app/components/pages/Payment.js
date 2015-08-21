import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import CartActions from 'CartActions'
import CartStore from 'CartStore'
import CartApi from 'CartApi'
import PrintApi from 'PrintApi'
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

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

		this.state = _getCartState()
	}
	
	componentDidMount() {
		super.componentDidMount()

		let hack = setTimeout(function() {
			CartActions.updateCartEnabled(false)
			CartActions.updateCartVisible(false)
			clearTimeout(hack)
		}, 0);
	}

	componentWillUnmount() {
		CartActions.updateCartVisible(true)
	}

	render() {
		let that = this

		return (
			<div className='page page--payment' ref='page-wrapper'>
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
								<input className='form__input form__input--checkbox' type='checkbox' id='billAddress'/>
								<label className='form__label' htmlFor='billAddress'><p className='form__text'>Bill to the same address</p></label>
							</div>
						</div>

						<div className='payment__column'>
							<h3 className='form__title'>Shipping method</h3>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='upsStandard'/>
								<label className='form__label' htmlFor='upsStandard'><p className='form__text'>UPS Standard - Delivery within 3-5 business days, 10 €</p></label>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='upsExpress'/>
								<label className='form__label' htmlFor='upsExpress'><p className='form__text'>UPS Express - Delivery within 2-3 business days, 20 €</p></label>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='freeShipping'/>
								<label className='form__label' htmlFor='freeShipping'><p className='form__text'>Free shipping (UPS standard), 0 €</p></label>
							</div>

							<h3 className='form__title'>Payment method</h3>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='maestro'/>
									<label className='form__label' htmlFor='maestro'>Maestro</label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='visa'/>
									<label className='form__label' htmlFor='visa'>Visa</label>
								</div>
							</div>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='paypal'/>
									<label className='form__label' htmlFor='paypal'>Paypal</label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='americanExpress'/>
									<label className='form__label' htmlFor='americanExpress'>American Express</label>
								</div>
							</div>
						</div>

						<div className='payment__column'>
							<h3 className='form__title'>Order summary</h3>
							<ul className='payment__products'>
								{Object.keys(this.state.cartItems).map(function(index){
									let product = that.state.cartItems[index];
									return (
										<li key={index} className='payment__product'>
											{product.city} - {product.year}
											<div>quantity: <span>{product.quantity}</span></div>
										</li>
									)
								})}
							</ul>
							<div className='cart__subtotal'>Subtotal: <span>{this.state.cartTotal}</span></div>
							<a href='' onClick={this.pay.bind(this)}>Proceed to payment</a>
						</div>
					</form>
				</div>
			</div>
		)
	}

	pay(e) {
		e.preventDefault()

		_(this.state.cartItems).forEach((item, index) => {
			PrintApi.order(index, item.serial)
		}).value();
		// CartApi.pay()
		// CartApi.generatePayButton()
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

}
