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
					<ul className='payment__products'>
						{Object.keys(this.props.products).map(function(id){
							let product = that.props.products[id];
							return (
								<li key={id} className='payment__product'>
									{product.city} - {product.year}
									<div>quantity: <span>{product.quantity} ({product.serial})</span></div>
									<div onClick={that.removeItem.bind(this, id)}>Remove item</div>
								</li>
							)
						})}
					</ul>
					<div className='cart__subtotal'>Subtotal: <span>{this.props.total}€</span></div>
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
