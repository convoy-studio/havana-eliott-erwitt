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
			<div id='paymentPage' ref='page-wrapper' className='page'>
				<div className='page__content'>
					<h2>Payment</h2>
					<div className='payment__order'>
						<h3>Order summary</h3>
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
					</div>

					<a href='' onClick={this.pay.bind(this)}>Proceed to payment</a>
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
