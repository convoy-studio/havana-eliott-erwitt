import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import CartApi from '../../utils/cartApi';
import CartActions from '../../actions/cartActions';
import CartStore from '../../stores/cartStore';
import OrderApi from '../../utils/orderApi';
import OrderStore from '../../stores/orderStore';
let config = require('../../config');

function getCartState() {

	return {
		cartItems: CartStore.getCartItems(),
		cartCount: CartStore.getCartCount(),
		cartTotal: CartStore.getCartTotal()
	}

}

export default class Payment extends ComponentTransition {

	componentWillMount() {
		
		this.state = getCartState();
		this.state.form = undefined;
		this.state.sameAddress = true;
		
		this.TVA_RATE = 19.6;

	}

	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();

		TweenMax.to(document.querySelector('.header'), 0.3, {opacity: 0, ease:Power2.easeOut});
		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn});
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: ()=>{
			TweenMax.to(document.querySelector('.header'), 0.3, {opacity: 1, ease:Power2.easeOut});
			callback();
		}});
	
	}

	componentDidMount() {

		this.onStoreChange = this.onStoreChange.bind(this);
		this.onOrderStoreChange = this.onOrderStoreChange.bind(this);
		this.toggleBill = this.toggleBill.bind(this);

		this.bill = document.querySelector('.payment__bill');

		// let hack = setTimeout(function() {
		// 	CartActions.updateCartEnabled(false);
		// 	CartActions.updateCartVisible(false);
		// 	clearTimeout(hack);
		// }, 0);

		CartStore.addChangeListener(this.onStoreChange);
		OrderStore.addChangeListener(this.onOrderStoreChange);
		document.getElementById('billCheckbox').addEventListener('change', this.toggleBill);

	}

	componentWillUnmount() {

		CartActions.updateCartVisible(true);

	}

	render() {

		let seo = {
			title: 'Elliott Erwitt Havana Club 7 Fellowship | Payment',
			description: 'Lorem ipsum dolor sit amet',
			url: config.siteurl + '/payment',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		let tva = this.state.cartTotal * this.TVA_RATE / (100+this.TVA_RATE);
		tva = tva.toFixed(2);

		return (
			<div className='page page--payment' ref='view'>
				<Seo seo={seo} />
				<h1 className='payment__title title'>Checkout</h1>
				<div className='submenu'><Link to='/shop?open=true' className='button'>Back to shop</Link></div>
				<div className='payment'>
					<form className='payment__form form'>
						<div className='payment__column'>
							<h3 className='form__title'>Checkout</h3>
							<div className='form__row'>
								<label className='form__label' htmlFor='mail'>Enter your email address</label>
								<input className='form__input form__input--text' type='mail' id='mail'/>
							</div>
							<h3 className='form__title'>Shipping address</h3>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<label className='form__label' htmlFor='firstname'>First name *</label>
									<input className='form__input form__input--text' type='text' id='firstname'/>
								</div>
								<div className='form__column'>
									<label className='form__label' htmlFor='lastname'>Last name *</label>
									<input className='form__input form__input--text' type='text' id='lastname'/>
								</div>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='phone'>Telephone *</label>
								<input className='form__input form__input--text' type='tel' id='phone'/>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='address'>Address *</label>
								<input className='form__input form__input--text form__input--comp' type='text' id='address'/>
								<input className='form__input form__input--text' type='text' id='addressBis'/>
							</div>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<label className='form__label' htmlFor='zip'>Zip/Postal code *</label>
									<input className='form__input form__input--text' type='text' id='zip'/>
								</div>
								<div className='form__column'>
									<label className='form__label' htmlFor='city'>City</label>
									<input className='form__input form__input--text' type='text' id='city'/>
								</div>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='country'>Country *</label>
								<input className='form__input form__input--text' type='text' id='country'/>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' type='checkbox' id='billCheckbox' defaultChecked/>
								<label className='form__label form__label--pointer' htmlFor='billCheckbox'><p className='form__text'>Bill to the same address</p></label>
							</div>
							{(() => {
								if (!this.state.sameAddress) { return (
									<div className='payment__bill'>
										<h3 className='form__title'>Billing address</h3>
										<div className='form__row form__row--half'>
											<div className='form__column'>
												<label className='form__label' htmlFor='billFirstname'>First name *</label>
												<input className='form__input form__input--text' type='text' id='billFirstname'/>
											</div>
											<div className='form__column'>
												<label className='form__label' htmlFor='billLastname'>Last name *</label>
												<input className='form__input form__input--text' type='text' id='billLastname'/>
											</div>
										</div>
										<div className='form__row'>
											<label className='form__label' htmlFor='billPhone'>Telephone *</label>
											<input className='form__input form__input--text' type='tel' id='billPhone'/>
										</div>
										<div className='form__row'>
											<label className='form__label' htmlFor='billAddress'>Address *</label>
											<input className='form__input form__input--text form__input--comp' type='text' id='billAddress'/>
											<input className='form__input form__input--text' type='text' id='billAddressBis'/>
										</div>
										<div className='form__row form__row--half'>
											<div className='form__column'>
												<label className='form__label' htmlFor='billZip'>Zip/Postal code *</label>
												<input className='form__input form__input--text' type='text' id='billZip'/>
											</div>
											<div className='form__column'>
												<label className='form__label' htmlFor='billCity'>City</label>
												<input className='form__input form__input--text' type='text' id='billCity'/>
											</div>
										</div>
										<div className='form__row'>
											<label className='form__label' htmlFor='billCountry'>Country *</label>
											<input className='form__input form__input--text' type='text' id='billCountry'/>
										</div>
									</div>
								)}
							}.bind(this))()}
						</div>

						<div className='payment__column'>
							<h3 className='form__title'>Shipping method</h3>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='upsStandard'/>
								<label className='form__label form__label--pointer' htmlFor='upsStandard'><p className='form__text'>UPS Standard - Delivery within 3-5 business days, 10 €</p></label>
							</div>

							<h3 className='payment__method form__title'>Payment method</h3>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='maestro' defaultChecked/>
									<label className='form__label form__label--pointer' htmlFor='maestro'><p className='form__text'><img src='./assets/images/maestro.png'></img></p></label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='visa'/>
									<label className='form__label form__label--pointer' htmlFor='visa'><p className='form__text'><img src='./assets/images/visa.png'></img></p></label>
								</div>
							</div>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='paypal'/>
									<label className='form__label form__label--pointer' htmlFor='paypal'><p className='form__text'><img src='./assets/images/paypal.png'></img></p></label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' id='americanExpress'/>
									<label className='form__label form__label--pointer' htmlFor='americanExpress'><p className='form__text'><img src='./assets/images/americanExpress.png'></img></p></label>
								</div>
							</div>
						</div>

						<div className='payment__column'>
							<h3 className='form__title'>Order summary</h3>
							<ul className='payment__products cart__products'>
								{Object.keys(this.state.cartItems).map((index) => {
									let product = this.state.cartItems[index];
									let details
									if (product.title) details = product.title+'. '+product.city+'. '+product.country+'. '+product.year
									else details = product.city+'. '+product.country+'. '+product.year
									
									return (
										<li key={index} className='payment__product cart__product'>
											<div className='cart__column'>
												<div className='cart__artist'>{product.project.artist}</div>
												<div className='cart__details'>{details}</div>
												<div className='cart__serial'>Edition <span className='cart__number'>{product.serial}</span></div>
												<div className='cart__price'>{product.price}<span className='cart__currency'>€</span></div>
											</div>
											<div className='cart__column'>
												<div className='cart__print'><img className='cart__image' src={'/static/prints/'+product.file+'_min.jpg'}></img></div>
												<div className='cart__remove button button--left' onClick={this.removeItem.bind(this, index)}><span className='button__content'>Remove item</span></div>
											</div>
										</li>
									)
								}.bind(this))}
							</ul>
							<div className='payment__total cart__total'>
								<div className='payment__subtotal cart__subtotal'>
									<div className='cart__column'>Subtotal:</div>
									<div className='cart__column'>{this.state.cartTotal}<span className='cart__currency'>€</span></div>
								</div>
								<div className='cart__tva'>
									<div className='cart__column'>Included TVA:</div>
									<div className='cart__column'>{tva}<span className='cart__currency'>€</span></div>
								</div>
							</div>
							<div className='cart__bigtotal'>
								<div className='cart__column'>Grand total:</div>
								<div className='cart__column'>{this.state.cartTotal}<span className='cart__currency'>€</span></div>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' type='checkbox' id='newsletter'/>
								<label className='form__label form__label--pointer' htmlFor='newsletter'><p className='form__text'>I want to be informed of fellowship news</p></label>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' type='checkbox' id='conditions'/>
								<label className='form__label form__label--pointer' htmlFor='conditions'><p className='form__text'>I accept the <a className='underline' href='/terms' target='_blank'>terms and conditions</a>*</p></label>
							</div>

							<a href='' className='payment__pay button' onClick={this.pay.bind(this)}>Proceed to payment</a>
						</div>
					</form>

					<div dangerouslySetInnerHTML={{__html: this.state.form}} />
					
				</div>


			</div>
		);

	}

	pay(e) {

		e.preventDefault();

		let orderPrints = [];
		_(this.state.cartItems).forEach((item) => {
			orderPrints.push({
				printId: item.token,
				serial: item.serial
			});
		}).value();

		if (this.state.cartTotal > 0) {
			OrderApi.create({
				user: 'hello@aze.com',
				prints: orderPrints
			});
		}

		// CartApi.generatePayButton({
		// 	email: 'hello@aze.com',
		// 	firstname: 'Nicolas',
		// 	lastname: 'Daniel',
		// 	phone: '0102030405',
		// 	address: '23 rue xxx',
		// 	zip: '12345',
		// 	city: 'Azerty',
		// 	country: 'France',
		// 	total: this.state.cartTotal * 100
		// })

	}

	removeItem(id) {

		CartActions.removeFromCart(id);
		this.setState(getCartState());

	}

	toggleBill() {

		// this.bill.classList.toggle('payment__bill--visible')
		this.setState({
			sameAddress: !this.state.sameAddress
		});

	}

	// resize() {
	// 	let windowW = AppStore.Window.w
	// 	let windowH = AppStore.Window.h
	// 	super.resize()
	// }

	onStoreChange() {
	
		this.setState({
			form: CartStore.getForm()
		}, () => {
			if (document.querySelector('#paymentForm')) document.querySelector('#paymentForm').submit();
		});

	}

	onOrderStoreChange() {

		let order = OrderStore.getCreated();
		
		CartApi.generatePayButton({
			order_id: order._id,
			user_id: order.user,
			total: this.state.cartTotal * 100
			// firstname: 'Nicolas',
			// lastname: 'Daniel',
			// phone: '0102030405',
			// address: '23 rue xxx',
			// zip: '12345',
			// city: 'Azerty',
			// country: 'France',
		});

	}

}