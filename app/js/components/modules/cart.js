import React, { Component } from 'react';
import { Link } from 'react-router';
import CartActions from '../../actions/cartActions';
import CartStore from '../../stores/cartStore';
// import AppStore from 'AppStore'
// import AppConstants from 'AppConstants'

function getState() {

	return {
		items: CartStore.getCartItems(),
		count: CartStore.getCartCount(),
		total: CartStore.getCartTotal(),
		visible: CartStore.getCartVisible(),
		enabled: CartStore.getCartEnabled(),
		hash: undefined
	};

}

export default class Cart extends Component {

	componentWillMount() {

		this.state = getState();

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		
		// const
		this.CART_DELAY = 2000;

	}

	componentDidMount() {

		this.view = document.querySelector('.cart');
		this.content = this.view.querySelector('.cart__content');
		this.count = this.view.querySelector('.cart__count');

		CartStore.addChangeListener(this.onStoreChange);
		document.querySelector('body').addEventListener('click', this.handleClickOutside.bind(this));
		this.content.addEventListener('click', this.handleClickInside.bind(this));
		this.count.addEventListener('mouseenter', this.handleCountEnter.bind(this));
		this.view.addEventListener('mouseenter', this.handleEnter.bind(this));
		this.view.addEventListener('mouseleave', this.handleLeave.bind(this));

	}

	render() {

		let itemLabel = (this.state.count > 1) ? 'items' : 'item';
		let visibility = (this.state.enabled.cartEnabled ? 'cart--enabled ' : ' ') + (this.state.visible && this.state.hash === 'shop' ? 'cart--visible' : '');
		let isEmpty = (this.state.count > 0) ? '' : ' cart--empty';

		return (
			<div className={'cart ' + visibility + isEmpty} ref='cart'>
				<div className='cart__count'>Cart —<span>{this.state.count}</span> {itemLabel}</div>
				<div className='cart__content cart__products-wrapper'>
					<ul className='cart__products'>
						{Object.keys(this.state.items).map((index) => {
							let product = this.state.items[index]
							let details
							if (product.title) details = product.title+'. '+product.city+'. '+product.country+'. '+product.year
							else details = product.city+'. '+product.country+'. '+product.year
							
							return ( 
								<li key={index} className='cart__product'>
									<div className='cart__column'>
										<div className='cart__artist'>{product.project.artist}</div>
										<div className='cart__details'>{details}</div>
										<div className='cart__serial'>Edition <span className='cart__number'>{product.serial}</span></div>
										<div className='cart__price'>{product.price}<span className='cart__currency'>€</span></div>
									</div>
									<div className='cart__column'>
										<div className='cart__print'><img className='cart__image' src={'/static/prints/'+product.file+'_min.jpg'}></img></div>
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
						<Link to='/payment' className='button'>Proceed to checkout</Link>
					</div>
				</div>
				<div className='cart__content cart__empty-wrapper'>
					<div className='cart__empty'>
						You have no items in your cart.
					</div>
				</div>
			</div>
		);

	}

	toggle() {

		CartActions.updateCartEnabled(!this.state.enabled.cartEnabled);

	}

	open() {

		// this.props.enabled = true
		CartActions.updateCartEnabled(true);
		
		// this.setState({
		// 	enabled: true
		// });

	}

	close() {

		if (this.state.enabled.cartEnabled) {
			// this.props.enabled = false
			CartActions.updateCartEnabled(false)
		}

		// if (this.state.enabled.cartEnabled) {
		// 	this.setState({
		// 		enabled: false
		// 	});
		// }

	}

	removeItem(index) {

		CartActions.removeFromCart(index);

	}

	handleClickOutside(e) {

		if (!e.target.classList.contains('cart__remove') && !e.target.classList.contains('cart__button')) {
			if (e.target.parentNode.classList.contains('cart__count')) this.toggle();
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

		// console.log('mouseenter');
		if (this.closeCountdown) {
			// console.log('clearTimeout');
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

		this.setState(getState(), ()=>{
			// console.log(this.state.enabled);
			if (this.state.enabled.autoclose) {
				// console.log('createCountdown');
				this.createCountdown();
			}
		});

	}

}