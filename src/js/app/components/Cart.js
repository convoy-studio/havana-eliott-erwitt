import React from 'react'
import dom from 'domquery'
import CartActions from 'CartActions'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'

export default class Cart extends React.Component {

	constructor(props) {
		super(props)
		this.props = props
		this.showed = false
		this.state = {
			hash: undefined
		}

		this.toggleBinded = this.toggle.bind(this)
		this._didHasherChangeBinded = this._didHasherChange.bind(this)
	}

	componentWillMount() {
		AppStore.on(AppConstants.PAGE_HASHER_CHANGED, this._didHasherChangeBinded)	
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
		let classes = (this.props.enabled ? 'cart--enabled ' : ' ') + (this.props.visible && this.state.hash === 'shop' ? 'cart--visible' : '')

		return (
			<div className={'cart ' + classes} ref='cart'>
				<div className='cart__count' onClick={this.toggleBinded}>Cart —<span>{this.props.count}</span> {itemLabel}</div>
				<div className='cart__content'>
					<ul className='cart__products'>
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

	_didHasherChange() {
		this.setState({
			hash: AppStore.hash()
		})
	}

}
