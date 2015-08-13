import React from 'react'
import dom from 'domquery'
import CartActions from 'CartActions'

export default class Cart {

	constructor(props) {
		this.props = props
	}

	open() {
		CartActions.updateCartVisible(true)
	}

	close() {
		CartActions.updateCartVisible(false)
	}

	render() {
		return (
			<div className={'cart ' + (this.props.visible ? 'cart--enabled' : '')} ref='cart'>
				<div className='cart__count' onClick={this.open}>Cart — <span>{this.props.count}</span></div>
				<div className='cart__content'>
					<div className='cart__close' onClick={this.close}>x</div>
					<div className='cart__subtotal'>Subtotal: <span>{this.props.total}</span></div>
				</div>
			</div>
		)
	}

}
