import React from 'react'
import dom from 'domquery'
import CartActions from 'CartActions'

export default class Cart {

	constructor(props) {
		this.props = props
		this.showed = false

		this.toggleBinded = this.toggle.bind(this)
	}

	toggle() {
		if (this.props.count > 0) {
			this.showed = !this.showed
			CartActions.updateCartEnabled(this.showed)
		}
	}

	open() {
		CartActions.updateCartEnabled(true)
	}

	close() {
		CartActions.updateCartEnabled(false)
	}

	render() {
		let that = this
		let itemLabel = (this.props.count > 1) ? 'items' : 'item'

		return (
			<div className={'cart ' + (this.props.enabled ? 'cart--enabled ' : ' ') + (this.props.visible ? 'cart--visible' : '')} ref='cart'>
				<div className='cart__count' onClick={this.toggleBinded}>Cart —<span>{this.props.count}</span> {itemLabel}</div>
				<div className='cart__content'>
					<ul className='payment__products cart__products'>
						{Object.keys(this.props.products).map(function(index){
							let product = that.props.products[index];
							return (
								<li key={index} className='cart__product'>
									<div className='cart__column'>
										<div className='cart__artist'></div>
										<div className='cart__details'>
											<div className='cart__city'>{product.city}</div>, <div className='cart__year'>{product.year}</div>
										</div>
										<div className='cart__quantity'>Quantity: {product.quantity}</div>
										<div className='cart__serial'>Serial <span className='cart__number'>{product.serial}/{product.copies}</span></div>
										<div className='cart__price'>{product.price}<span className='cart__currency'>€</span></div>
									</div>
									<div className='cart__column'>
										<div className='cart__print'><img className='cart__image' src={'./assets/images/prints/'+product.file+'_min.jpg'}></img></div>
										<a href='#' className='cart__remove button button--left button--small'>Remove item</a>
									</div>
								</li>
							)
						})}
					</ul>
					<div className='cart__subtotal'>
						<div className='cart__column'>Subtotal:</div>
						<div className='cart__column'>{this.props.total}<span className='cart__currency'>€</span></div>
					</div>
					<div className='cart__checkout'>
						<a href='#/payment' className='cart__button button button--center button--small'>Check out</a>
					</div>
				</div>
			</div>
		)
	}

	removeItem(id) {
		CartActions.removeFromCart(id)
	}

}
