import React from 'react'
import dom from 'domquery'
import CartActions from 'CartActions'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'

export default class Cart extends React.Component {

	constructor(props) {
		super(props)

		// props
		this.props = props

		// state
		this.state = {
			hash: undefined
		}

		// const
		this.CART_DELAY = 2000

		// function binded
		this._didHasherChangeBinded = this._didHasherChange.bind(this)
	}

	componentWillMount() {
		AppStore.on(AppConstants.PAGE_HASHER_CHANGED, this._didHasherChangeBinded)	
	}

	componentDidMount() {
		dom('body').on('click', this.handleClickOutside.bind(this))
		dom('.cart__content').on('click', this.handleClickInside.bind(this))
		dom('.cart__count').on('mouseenter', this.handleCountEnter.bind(this))
		dom('.cart').on('mouseenter', this.handleEnter.bind(this))
		dom('.cart').on('mouseleave', this.handleLeave.bind(this))
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
									{Object.keys(this.props.products).map((index) => {
										let product = that.props.products[index]
										return ( 
											<li key={index} className='cart__product'>
												<div className='cart__column'>
													<div className='cart__artist'></div>
													<div className='cart__details'>
														<div className='cart__city'>{product.city}</div>, <div className='cart__year'>{product.year}</div>
													</div>
													<div className='cart__serial'>Serial <span className='cart__number'>{product.serial}/{product.copies}</span></div>
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
								<div className='cart__subtotal'>
									<div className='cart__column'>Subtotal:</div>
									<div className='cart__column'>{this.props.total}<span className='cart__currency'>€</span></div>
								</div>
								<div className='cart__checkout'>
									<a href='#/payment' className='cart__button button'><span className='button__content'>Check out</span></a>
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

	toggle() {
		CartActions.updateCartEnabled(!this.props.enabled)
	}

	open() {
		this.props.enabled = true
		CartActions.updateCartEnabled(this.props.enabled)
	}

	close() {
		if (this.props.enabled) {
			this.props.enabled = false
			CartActions.updateCartEnabled(this.props.enabled)
		}
	}

	removeItem(index) {
		CartActions.removeFromCart(index)
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

	handleCountEnter(e) {
		clearTimeout(this.closeCountdown)
		this.closeCountdown = undefined
		this.open()
	}

	handleEnter(e) {
		if (this.closeCountdown) {
			clearTimeout(this.closeCountdown)
			this.closeCountdown = undefined
			this.open()
		}
	}

	handleLeave(e) {
		let that = this
		this.closeCountdown = setTimeout(() => {
			this.close()
			clearTimeout(this.closeCountdown)
			this.closeCountdown = undefined
		}, this.CART_DELAY)
	}

	_didHasherChange() {
		this.setState({
			hash: AppStore.hash()
		})
	}

}
