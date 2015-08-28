import React from 'react'
import dom from 'domquery'
import CartActions from 'CartActions'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'

export default class Cart extends React.Component {

	constructor(props) {
		super(props)
		this.props = props
		this.state = {
			hash: undefined
		}

		this.toggleBinded = this.toggle.bind(this)
		this._didHasherChangeBinded = this._didHasherChange.bind(this)
	}

	componentWillMount() {
		AppStore.on(AppConstants.PAGE_HASHER_CHANGED, this._didHasherChangeBinded)	
	}

	componentDidMount() {
		dom('body').on('click', this.handleClickOutside.bind(this))
		dom('.cart__content').on('click', this.handleClickInside.bind(this))
		dom('.cart__count').on('mouseenter', this.handleEnter.bind(this))
		dom('.cart__content').on('mouseleave', this.handleLeave.bind(this))
	}

	toggle() {
		CartActions.updateCartEnabled(!this.props.enabled)
	}

	open() {
		this.props.enabled = true
		CartActions.updateCartEnabled(this.props.enabled)
	}

	close() {
		this.props.enabled = false
		CartActions.updateCartEnabled(this.props.enabled)
	}

	render() {
		let that = this
		let itemLabel = (this.props.count > 1) ? 'items' : 'item'
		let classes = (this.props.enabled ? 'cart--enabled ' : ' ') + (this.props.visible && this.state.hash === 'shop' ? 'cart--visible' : '')

		return (
			<div className={'cart ' + classes} ref='cart'>
				<div className='cart__count'>Cart —<span>{this.props.count}</span> {itemLabel}</div>
				{(() => {
					if (this.props.count > 0) {
						return (
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
													<div className='cart__remove button button--left button--small' onClick={that.removeItem.bind(that, index)}>Remove item</div>
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
						)
					} else {
						return (
							<div className='cart__content'>
								<div className='cart__empty'>
									You have no items in your cart.
								</div>
							</div>
						)
					}
				})()}
			</div>
		)
	}

	removeItem(id) {
		CartActions.removeFromCart(id)
	}

	handleClickOutside(e) {
		if (!e.target.classList.contains('cart__remove') && !e.target.classList.contains('cart__button')) {
			if (e.target.parentNode.classList.contains('cart__count')) this.toggle()
			else this.close()
		}
	}

	handleClickInside(e) {
		if (!e.target.classList.contains('cart__remove')) e.stopPropagation()
	}

	handleEnter(e) {
		this.open()
	}

	handleLeave(e) {
		let that = this
		this.closeCountdown = setTimeout(() => {
			this.close()
			clearTimeout(this.closeCountdown)
		}, 2000)
	}

	_didHasherChange() {
		this.setState({
			hash: AppStore.hash()
		})
	}

}
