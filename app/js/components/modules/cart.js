import React, { Component } from 'react';
import { Link } from 'react-router';
import CartActions from '../../actions/cartActions';
import CartStore from '../../stores/cartStore';
import PrintApi from '../../utils/printApi';
import { CheckoutForm } from './checkout';
// import AppStore from 'AppStore'
// import AppConstants from 'AppConstants'

function getState() {

	let state = {
		items: CartStore.getCartItems(),
		count: CartStore.getCartCount(),
		total: CartStore.getCartTotal(),
		visible: CartStore.getCartVisible(),
		enabled: CartStore.getCartEnabled()
	};

	return state;
}

export default class Cart extends Component {

	componentWillMount() {

		this.state = getState();

		// binded
		this.onStoreChange 		= this.onStoreChange.bind(this);
		this.toggleBinded 		= this.toggle.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.handleClickInside 	= this.handleClickInside.bind(this);
		this.handleEnter 		= this.handleEnter.bind(this);
		this.handleLeave 		= this.handleLeave.bind(this);
		this.handleCountEnter 	= this.handleCountEnter.bind(this);

		// const
		this.CART_DELAY = 2000;

	}

	componentDidMount() {

		if(typeof document !== 'undefined') {
			this.body = document.querySelector('body');
			this.view = document.querySelector('.cart');
			this.content = this.view.querySelector('.cart__content');
			this.count = this.view.querySelector('.cart__count');
		}

		this.body.addEventListener('click', this.handleClickOutside);
		CartStore.addChangeListener(this.onStoreChange);
		CartActions.initCart();
		this.content.addEventListener('click', this.handleClickInside);
		this.count.addEventListener('mouseenter', this.handleCountEnter);
		this.view.addEventListener('mouseenter', this.handleEnter);
		this.view.addEventListener('mouseleave', this.handleLeave);

	}

	componentWillUnmount() {

		this.body.removeEventListener('click', this.handleClickOutside);
		CartStore.removeChangeListener(this.onStoreChange);
		this.content.removeEventListener('click', this.handleClickInside);
		this.count.removeEventListener('mouseenter', this.handleCountEnter);
		this.view.removeEventListener('mouseenter', this.handleEnter);
		this.view.removeEventListener('mouseleave', this.handleLeave);

	}

	render() {

		let itemLabel = (this.state.count > 1) ? 'items' : 'item';
		let visibility = (this.state.enabled.cartEnabled ? ' cart--enabled' : '') + (this.state.visible && this.state.hash === 'shop' ? 'cart--visible' : '');
		let isEmpty = (this.state.count > 0) ? '' : ' cart--empty';


		return (
			<div>
				<div className={'cart' + visibility + isEmpty} ref='cart'>
					<div className='cart__count'>Cart —<span>{this.state.count}</span> {itemLabel}</div>
					{(() => {
						if (this.body && this.body.classList.contains('js-mobile')) return (
							<div className='cart__toggle'>cart</div>
						)
					})()}
					<div className='cart__content cart__products-wrapper'>
						<ul className='cart__products'>
							{Object.keys(this.state.items).map((index) => {
								let {product, combination: combo, quantity} = this.state.items[index];

								return (
									<li key={index} className='cart__product'>
										<div className='cart__column'>
											<div className='cart__artist'>{product.manufacturer}</div>
											<div className='cart__details'>{product.name}</div>
											<div className='cart__serial'>Edition <span className='cart__number'>{combo.name}</span></div>
											<div className='cart__price'>{product.price}<span className='cart__currency'>€</span></div>
										</div>
										<div className='cart__column'>
											<div className='cart__print'><img className='cart__image' src={product.image}></img></div>
											<div className='cart__remove button' onClick={this.removeItem.bind(this, index)}>Remove item</div>
										</div>
									</li>
								)
							}.bind(this))}
						</ul>
						<div className='cart__subtotal'>
							<div className='cart__column'>Subtotal:</div>
							<div className='cart__column'>{this.state.total}<span className='cart__currency'>€</span></div>
						</div>
						<div className='cart__checkout'>
							<CheckoutForm />
						</div>
						{(() => {
							if (this.body && this.body.classList.contains('js-mobile')) return (
								<div className='cart__checkout cart__checkout--back'>
									<Link to='/shop?open=true' className='button'>Back to shop</Link>
								</div>
							)
						})()}
					</div>
					<div className='cart__content cart__empty-wrapper'>
						<div className='cart__empty'>
							You have no items in your cart.
						</div>
						{(() => {
							if (this.body && this.body.classList.contains('js-mobile')) return (
								<div className='cart__checkout'>
									<Link to='/shop?open=true' className='button'>Back to shop</Link>
								</div>
							)
						})()}
					</div>
				</div>
			</div>
		);

	}

	toggle() {

		CartActions.updateCartEnabled(!this.state.enabled.cartEnabled);

	}

	open() {

		CartActions.updateCartEnabled(true);

	}

	close() {

		if (this.state.enabled.cartEnabled) {
			CartActions.updateCartEnabled(false);
		}

	}

	removeItem(index) {

		const print = this.state.items[index];
		PrintApi.unblockSerial(print.token, print.serial);
		CartActions.removeFromCart(index);
	}

	handleClickOutside(e) {

		if (!e.target.classList.contains('cart__remove') && !e.target.classList.contains('cart__button')) {
			if (e.target.parentNode.classList.contains('cart__count') || e.target.classList.contains('cart__toggle')) this.toggle();
			else this.close();
		}

	}

	handleClickInside(e) {

		if (!e.target.classList.contains('cart__remove')) e.stopPropagation();

	}

	handleCountEnter(e) {

		clearTimeout(this.closeCountdown);
		this.closeCountdown = undefined;
		this.open();

	}

	handleEnter(e) {

		if (this.closeCountdown) {
			clearTimeout(this.closeCountdown);
			this.closeCountdown = undefined;
			this.open();
		}

	}

	handleLeave(e) {

		this.createCountdown();

	}

	createCountdown() {

		this.closeCountdown = setTimeout(() => {
			this.close();
			clearTimeout(this.closeCountdown);
			this.closeCountdown = undefined;
		}, this.CART_DELAY);

	}

	onStoreChange() {
		this.setState(getState());
	}

}

// vim: ts=2 sts=2 sw=2 noet
