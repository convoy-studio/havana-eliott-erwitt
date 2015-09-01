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
			.removeClass('body--black')
			.addClass('body--white')

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
								<label className='form__label form__label--pointer' htmlFor='billAddress'><p className='form__text'>Bill to the same address</p></label>
							</div>
						</div>

						<div className='payment__column'>
							<h3 className='form__title'>Shipping method</h3>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='upsStandard'/>
								<label className='form__label form__label--pointer' htmlFor='upsStandard'><p className='form__text'>UPS Standard - Delivery within 3-5 business days, 10 €</p></label>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='upsExpress'/>
								<label className='form__label form__label--pointer' htmlFor='upsExpress'><p className='form__text'>UPS Express - Delivery within 2-3 business days, 20 €</p></label>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='freeShipping' defaultChecked/>
								<label className='form__label form__label--pointer' htmlFor='freeShipping'><p className='form__text'>Free shipping (UPS standard), 0 €</p></label>
							</div>

							<h3 className='payment__method form__title'>Payment method</h3>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='maestro' defaultChecked/>
									<label className='form__label form__label--pointer' htmlFor='maestro'><p className='form__text'><img src='./assets/images/maestro-black.png'></img></p></label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='visa'/>
									<label className='form__label form__label--pointer' htmlFor='visa'><p className='form__text'><img src='./assets/images/visa-black.png'></img></p></label>
								</div>
							</div>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='paypal'/>
									<label className='form__label form__label--pointer' htmlFor='paypal'><p className='form__text'><img src='./assets/images/paypal-black.png'></img></p></label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='americanExpress'/>
									<label className='form__label form__label--pointer' htmlFor='americanExpress'><p className='form__text'><img src='./assets/images/american-black.png'></img></p></label>
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
												<div className='cart__artist'></div>
												<div className='cart__details'>
													<div className='cart__city'>{product.city}</div>, <div className='cart__year'>{product.year}</div>
												</div>
												<div className='cart__serial'>Serial <span className='cart__number'>{product.serial}/{product.copies}</span></div>
												<div className='cart__price'>{product.price}<span className='cart__currency'>€</span></div>
											</div>
											<div className='cart__column'>
												<div className='cart__print'><img className='cart__image' src={'./assets/images/prints/'+product.file+'_min.jpg'}></img></div>
												<div className='cart__remove button button--left button--small' onClick={that.removeItem.bind(that, index)}>Remove item</div>
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
								<label className='form__label form__label--pointer' htmlFor='newsletter'><p className='form__text'>News</p></label>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' type='checkbox' id='conditions'/>
								<label className='form__label form__label--pointer' htmlFor='conditions'><p className='form__text'>I accept the terms and conditions*</p></label>
							</div>
							<a href='' className='payment__pay button button--center button--small' onClick={this.pay.bind(this)}>Proceed to payment</a>
						</div>
					</form>
					
					<form method="post" action="https://secure-test.be2bill.com/front/form/process" id="myform">
						<input type="hidden" name="AMOUNT" value="1000" />
						<input type="hidden" name="IDENTIFIER" value="CONVOY" />
						<input type="hidden" name="OPERATIONTYPE" value="payment" />
						<input type="hidden" name="ORDERID" value="order_000123" />
						<input type="hidden" name="CLIENTIDENT" value="client_123" />
						<input type="hidden" name="DESCRIPTION" value="art_123456" />
						<input type="hidden" name="VERSION" value="2.0" />
						<input type="hidden" name="HASH" value="6b87bfae46eb204950c70058f227f73c1a95827c0b0f95e1afa4ad4525eb67b5" />
						<input type="submit" value="Pay with be2bill" />
					</form>
				</div>

			</div>
		)
	}

	pay(e) {
		e.preventDefault()
					// <form method="post" action="https://secure-test.be2bill.com/front/form/process" id="myform">
					// 	<input type="hidden" name="3DSECURE" value="yes" />
					// 	<input type="hidden" name="CARDFULLNAME" value="John Doe" />
					// 	<input type="hidden" name="CLIENTEMAIL" value="john.doe@email.com" />
					// 	<input type="hidden" name="HIDECARDFULLNAME" value="yes" />
					// 	<input type="hidden" name="HIDECLIENTEMAIL" value="yes" />
					// 	<input type="hidden" name="AMOUNT" value="1000" />
					// 	<input type="hidden" name="IDENTIFIER" value="CONVOY" />
					// 	<input type="hidden" name="OPERATIONTYPE" value="payment" />
					// 	<input type="hidden" name="ORDERID" value="order_000123" />
					// 	<input type="hidden" name="CLIENTIDENT" value="client_123" />
					// 	<input type="hidden" name="DESCRIPTION" value="art_123456" />
					// 	<input type="hidden" name="VERSION" value="2.0" />
					// 	<input type="hidden" name="HASH" value="6b87bfae46eb204950c70058f227f73c1a95827c0b0f95e1afa4ad4525eb67b5" />
					// 	<input type="submit" value="Pay with be2bill" />
					// </form>

		// _(this.state.cartItems).forEach((item, index) => {
		// 	PrintApi.order(index, item.serial)
		// }).value();

		// CartApi.pay()
		CartApi.generatePayButton()
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

}
