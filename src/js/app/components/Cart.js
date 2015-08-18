import React from 'react'
import dom from 'domquery'
import CartActions from 'CartActions'

export default class Cart {

	constructor(props) {
		this.props = props
	}

	open() {
		CartActions.updateCartEnabled(true)
	}

	close() {
		CartActions.updateCartEnabled(false)
	}

	render() {
		let that = this

		return (
			<div className={'cart ' + (this.props.enabled ? 'cart--enabled ' : ' ') + (this.props.visible ? 'cart--visible' : '')} ref='cart'>
				<div className='cart__count' onClick={this.open}>Cart — <span>{this.props.count}</span></div>
				<div className='cart__content'>
					<div className='cart__close' onClick={this.close}>x</div>
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
					<div className='cart__subtotal'>Subtotal: <span>{this.props.total}</span></div>
					<a href='#/payment' className='cart__checkout'>Check out</a>
				</div>
			</div>
		)
	}

	removeItem(id) {
		CartActions.removeFromCart(id)
	}

}
