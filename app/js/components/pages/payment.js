import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import PrintApi from '../../utils/printApi';
import CartActions from '../../actions/cartActions';
import CartStore from '../../stores/cartStore';
import OrderApi from '../../utils/orderApi';
import OrderStore from '../../stores/orderStore';
import NewsletterApi from '../../utils/newsletterApi';
import NewsletterStore from '../../stores/newsletterStore';
import MailApi from '../../utils/mailApi';
import getAmountSupply from '../../../../common/shiiping';
import dhl from '../../../../common/shipping/dhl';
let config = require('../../config');
let validator = require('validator');

function getCartState() {
	return {
		cartItems: CartStore.getCartItems(),
		cartCount: CartStore.getCartCount(),
		cartTotal: CartStore.getCartTotal(),
	}
}

export default class Payment extends ComponentTransition {

	componentWillMount() {

		this.state = getCartState();

		this.state.status = {
			mail: undefined,
			firstname: undefined,
			lastname: undefined,
			phone: undefined,
			address: undefined,
			zip: undefined,
			country: undefined,
			conditions: undefined
		};
		this.state.form = undefined;
		this.state.sameAddress = true;
		this.state.amountSupply = 0;
		this.state.orderTotal = this.state.cartTotal + this.state.amountSupply;

		this.TVA_RATE = 19.6;

		this.onStoreChange = this.onStoreChange.bind(this);
		this.onOrderStoreChange = this.onOrderStoreChange.bind(this);
		this.onNewsletterStoreChange = this.onNewsletterStoreChange.bind(this);
		this.toggleBill = this.toggleBill.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleCountryChange = this.handleCountryChange.bind(this);

	}

	_enterStyle() {

		let el = this.refs.view.getDOMNode();

		TweenMax.to(document.querySelector('.header'), 0.3, {autoAlpha: 0, ease:Power2.easeOut});
		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn});

	}

	_leaveStyle(callback) {

		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: ()=>{
			TweenMax.to(document.querySelector('.header'), 0.3, {autoAlpha: 1, ease:Power2.easeOut});
			callback();
		}});

	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');

		if(typeof document !== 'undefined') {
			this.body = document.querySelector('body');
			this.bill = document.querySelector('.payment__bill');
		}

		CartStore.addChangeListener(this.onStoreChange);
		OrderStore.addChangeListener(this.onOrderStoreChange);
		NewsletterStore.addChangeListener(this.onNewsletterStoreChange);
		document.getElementById('billCheckbox').addEventListener('change', this.toggleBill);

		CartActions.initCart();
	}

	componentWillUnmount() {

		CartActions.updateCartVisible(true);
        CartStore.removeChangeListener(this.onStoreChange);
		OrderStore.removeChangeListener(this.onOrderStoreChange);
		NewsletterStore.removeChangeListener(this.onNewsletterStoreChange);
		document.getElementById('billCheckbox').removeEventListener('change', this.toggleBill);

	}

	render() {

		let seo = {
			title: 'Payment | Elliott Erwitt Havana Club 7 Fellowship',
			description: '',
			url: config.siteurl + '/payment',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		let dhltotal = this.state.amountSupply;
		let subtotal = this.state.orderTotal - dhltotal;
		let total = this.state.orderTotal;
		let tva = this.state.cartTotal * this.TVA_RATE / (100+this.TVA_RATE);
		tva = tva.toFixed(2);

		let error = {
			mail: (this.state.status.mail === false) ? 'form__input--error' : '',
			firstname: (this.state.status.firstname === false) ? 'form__input--error' : '',
			lastname: (this.state.status.lastname === false) ? 'form__input--error' : '',
			phone: (this.state.status.phone === false) ? 'form__input--error' : '',
			address: (this.state.status.address === false) ? 'form__input--error' : '',
			zip: (this.state.status.zip === false) ? 'form__input--error' : '',
			country: (this.state.status.country === false) ? 'form__input--error' : '',
			billFirstname: (this.state.status.billFirstname === false) ? 'form__input--error' : '',
			billLastname: (this.state.status.billLastname === false) ? 'form__input--error' : '',
			billPhone: (this.state.status.billPhone === false) ? 'form__input--error' : '',
			billAddress: (this.state.status.billAddress === false) ? 'form__input--error' : '',
			billZip: (this.state.status.billZip === false) ? 'form__input--error' : '',
			billCountry: (this.state.status.billCountry === false) ? 'form__input--error' : ''
		};

		let errorStyle = {color: 'red', fontSize: '14px', textAlign: 'center'};

		return (
			<div className='page page--payment' ref='view'>
				<Seo seo={seo} />
				<h1 className='payment__title title'>Checkout</h1>
				<div className='submenu'><Link to='/shop?open=true' className='button'>Back to shop</Link></div>
				<div className='text payment__error payment__error--desktop'>
					{(this.body && !this.body.classList.contains('js-mobile') && this.valid===false) ? (<div>The form contains errors, please change information highlighted in red.</div>) : null}
					{(this.body && !this.body.classList.contains('js-mobile') && this.state.status.conditions===false) ? (<div>You need to accept the terms & conditions.</div>) : null}
				</div>
				<div className='payment'>
					<form className='payment__form form' ref='form' onSubmit={this.onSubmit}>
						<div className='payment__column'>
							<h3 className='form__title'>Checkout</h3>
							<div className='form__row'>
								<label className='form__label' htmlFor='mail'>Enter your email address *</label>
								<input className={'form__input form__input--text '+error.mail} type='mail' id='mail'/>
							</div>
							<h3 className='form__title'>Shipping address</h3>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<label className='form__label' htmlFor='firstname'>First name *</label>
									<input className={'form__input form__input--text '+error.firstname} type='text' id='firstname'/>
								</div>
								<div className='form__column'>
									<label className='form__label' htmlFor='lastname'>Last name *</label>
									<input className={'form__input form__input--text '+error.lastname} type='text' id='lastname'/>
								</div>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='phone'>Telephone *</label>
								<input className={'form__input form__input--text '+error.phone} type='tel' id='phone'/>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='address'>Address *</label>
								<input className={'form__input form__input--text form__input--comp '+error.address} type='text' id='address'/>
								<input className={'form__input form__input--text '+error.address} type='text' id='addressBis'/>
							</div>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<label className='form__label' htmlFor='zip'>Zip/Postal code *</label>
									<input className={'form__input form__input--text '+error.zip} type='text' id='zip'/>
								</div>
								<div className='form__column'>
									<label className='form__label' htmlFor='city'>City</label>
									<input className='form__input form__input--text' type='text' id='city'/>
								</div>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='country'>Country *</label>

								<div className={'form__select'+error.country}><select id='country' name='country' onChange={this.handleCountryChange}>
									{Object.keys(dhl).map((index) => {
										let country = dhl[index].country;
										let option;
										if (country === 'France') {
											option = <option value={country} selected>{country}</option>
										} else {
											option = <option value={country}>{country}</option>
										}
										return (
											{option}
										)
									}.bind(this))}

								</select></div>
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
												<input className={'form__input form__input--text '+error.billFirstname} type='text' id='billFirstname'/>
											</div>
											<div className='form__column'>
												<label className='form__label' htmlFor='billLastname'>Last name *</label>
												<input className={'form__input form__input--text '+error.billLastname} type='text' id='billLastname'/>
											</div>
										</div>
										<div className='form__row'>
											<label className='form__label' htmlFor='billPhone'>Telephone *</label>
											<input className={'form__input form__input--text '+error.billPhone} type='tel' id='billPhone'/>
										</div>
										<div className='form__row'>
											<label className='form__label' htmlFor='billAddress'>Address *</label>
											<input className={'form__input form__input--text form__input--comp '+error.billAddress} type='text' id='billAddress'/>
											<input className={'form__input form__input--text '+error.billAddress} type='text' id='billAddressBis'/>
										</div>
										<div className='form__row form__row--half'>
											<div className='form__column'>
												<label className='form__label' htmlFor='billZip'>Zip/Postal code *</label>
												<input className={'form__input form__input--text '+error.billZip} type='text' id='billZip'/>
											</div>
											<div className='form__column'>
												<label className='form__label' htmlFor='billCity'>City</label>
												<input className='form__input form__input--text' type='text' id='billCity'/>
											</div>
										</div>
										<div className='form__row'>
											<label className='form__label' htmlFor='billCountry'>Country *</label>
											<input className={'form__input form__input--text '+error.billCountry} type='text' id='billCountry'/>
										</div>
									</div>
								)}
							}.bind(this))()}
						</div>

						<div className='payment__column'>
							<h3 className='form__title'>Shipping method</h3>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' name='shippingMethod' type='radio' id='upsStandard' defaultChecked/>
								<label className='form__label form__label--pointer' htmlFor='upsStandard'><p className='form__text'>DHL - Including full insurance - Delivery within 3-5 business days, {this.state.amountSupply} €</p></label>
							</div>

							<h3 className='payment__method form__title'>Payment method</h3>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' value='maestro' id='maestro' defaultChecked/>
									<label className='form__label form__label--pointer' htmlFor='maestro'><p className='form__text'><img src='./assets/images/maestro.png'></img></p></label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' value='visa' id='visa'/>
									<label className='form__label form__label--pointer' htmlFor='visa'><p className='form__text'><img src='./assets/images/visa.png'></img></p></label>
								</div>
							</div>
							<div className='form__row form__row--half'>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' value='paypal' id='paypal'/>
									<label className='form__label form__label--pointer' htmlFor='paypal'><p className='form__text'><img src='./assets/images/paypal.png'></img></p></label>
								</div>
								<div className='form__column'>
									<input className='form__input form__input--checkbox' name='paymentMethod' type='radio' value='americanExpress' id='americanExpress'/>
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
												<div className='cart__remove button button--left' onClick={this.removeItem.bind(this, index, product)}><span className='button__content'>Remove item</span></div>
											</div>
										</li>
									)
								}.bind(this))}
							</ul>
							<div className='payment__total cart__total'>
								<div className='payment__subtotal cart__subtotal'>
									<div className='cart__column'>Subtotal:</div>
									<div className='cart__column'>{(subtotal)}<span className='cart__currency'>€</span></div>
								</div>
								<div className='cart__tva'>
									<div className='cart__column'>DHL:</div>
									<div className='cart__column'>{dhltotal}<span className='cart__currency'>€</span></div>
								</div>
								<div className='cart__tva'>
									<div className='cart__column'>Included TVA:</div>
									<div className='cart__column'>{tva}<span className='cart__currency'>€</span></div>
								</div>
							</div>
							<div className='cart__bigtotal'>
								<div className='cart__column'>Grand total:</div>
								<div className='cart__column'>{total}<span className='cart__currency'>€</span></div>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' type='checkbox' id='newsletter'/>
								<label className='form__label form__label--pointer' htmlFor='newsletter'><p className='form__text'>I want to be informed of fellowship news</p></label>
							</div>
							<div className='form__row'>
								<input className='form__input form__input--checkbox' type='checkbox' id='conditions'/>
								<label className='form__label form__label--pointer' htmlFor='conditions'><p className='form__text'>I accept the <a className='underline' href='/terms-and-condition-of-sale' target='_blank'>terms and conditions</a>*</p></label>
							</div>
							<button type='submit' className='payment__pay button'>Proceed to payment</button>
							<div className='text payment__error payment__error--mobile'>
								{(this.body && this.body.classList.contains('js-mobile') && this.valid===false) ? (<div>The form contains errors, please change information highlighted in red.</div>) : null}
								{(this.body && this.body.classList.contains('js-mobile') && this.state.status.conditions===false) ? (<div>You need to accept the terms & conditions.</div>) : null}
							</div>
						</div>
					</form>

					<div dangerouslySetInnerHTML={{__html: this.state.form}} />

				</div>

			</div>
		);

	}

	onSubmit(e) {

		e.preventDefault();

		this.status = {};
		this.status.mail = validator.isEmail(document.getElementById('mail').value);
		this.status.firstname = document.getElementById('firstname').value.length > 0;
		this.status.lastname = document.getElementById('lastname').value.length > 0;
		this.status.phone = document.getElementById('phone').value.length > 0;
		this.status.address = document.getElementById('address').value.length > 0;
		this.status.zip = document.getElementById('zip').value.length > 0;
		this.status.country = document.getElementById('country').value.length > 0;
		this.status.conditions = document.getElementById('conditions').checked;
		this.status.billCheckbox = document.getElementById('billCheckbox').checked;

		this.valid = this.status.mail && this.status.firstname && this.status.lastname && this.status.phone && this.status.address && this.status.zip && this.status.country;

		if (!this.status.billCheckbox) {
			this.status.billFirstname = document.getElementById('billFirstname').value.length > 0;
			this.status.billLastname = document.getElementById('billLastname').value.length > 0;
			this.status.billPhone = document.getElementById('billPhone').value.length > 0;
			this.status.billAddress = document.getElementById('billAddress').value.length > 0;
			this.status.billZip = document.getElementById('billZip').value.length > 0;
			this.status.billCountry = document.getElementById('billCountry').value.length > 0;

			this.valid = this.valid && this.status.billFirstname && this.status.billLastname && this.status.billPhone && this.status.billAddress && this.status.billZip && this.status.billCountry;
		}

		if (this.valid && this.status.conditions) {
			this.pay();
		} else {
			this.setState({
				status: this.status
			});
		}

	}

	pay() {
		let orderPrints = [];
		_(this.state.cartItems).forEach((item) => {
			orderPrints.push({
				token: item.token,
				serial: item.serial
			});
		}).value();

		const paymentMethodRadios = document.getElementsByName('paymentMethod');
		let paymentMethod;
		for (let i = 0; i < paymentMethodRadios.length; ++i) {
			if (paymentMethodRadios[i].checked) {
				paymentMethod = paymentMethodRadios[i].value;
				break;
			}
		};

		let order = {
			user: document.getElementById('mail').value,
			prints: orderPrints,
			mail: document.getElementById('mail').value,
			//total: this.state.orderTotal * 100,
			paymentMethod: paymentMethod,

			firstname: document.getElementById('firstname').value,
			lastname: document.getElementById('lastname').value,
			phone: document.getElementById('phone').value,
			address: (document.getElementById('address').value + ' ' + document.getElementById('addressBis').value).trim(),
			zip: document.getElementById('zip').value,
			city: document.getElementById('city').value,
			country: document.getElementById('country').value
		}

		if (!this.status.billCheckbox) {
			order.billFirstname = document.getElementById('billFirstname').value;
			order.billLastname = document.getElementById('billLastname').value;
			order.billPhone = document.getElementById('billPhone').value;
			order.billAddress = document.getElementById('billAddress').value;
			order.billZip = document.getElementById('billZip').value;
			order.billCountry = document.getElementById('billCountry').value;
		}

		if (document.getElementById('newsletter').checked) {
			NewsletterApi.create({
				mail: order.mail
			});
		}
		OrderApi.create(order);

		orderPrints.map(function (print) {
			PrintApi.unblockSerial(print.token, print.serial);
		});
	}

	removeItem(id, print) {
		CartActions.removeFromCart(id);
        PrintApi.unblockSerial(print.token, print.serial);
	}

	toggleBill() {

		this.setState({
			sameAddress: !this.state.sameAddress
		});

	}

	onStoreChange() {
		const cartState = getCartState();
		if (cartState.cartItems.length === 0) {
            this.context.router.transitionTo('/shop');
        }

		const supply = this.getSupply(cartState);
		for (let key in supply) {
			cartState[key] = supply[key];
		}

		this.setState(cartState);
	}

	onOrderStoreChange() {
		this.setState({
			form: OrderStore.getPaymentForm()
		}, () => {
			if (document.querySelector('#paymentForm')) document.querySelector('#paymentForm').submit();
		});
	}

	onNewsletterStoreChange() {

		let response = NewsletterStore.getCreated();

		if (response.success) {
			MailApi.sendDynamicTemplate({
				template: 'havana-subscribe-newsletter',
				recipients: [response.data],
				from: 'contact@havana-fellowship.com'
			});
		}

	}

	handleCountryChange(e) {
		this.setState(this.getSupply(this.state));
	}

	getSupply(cartState) {

		const country = document.getElementById('country').value;
		const amountSupply = getAmountSupply(country, cartState.cartItems.length);

		return {
			amountSupply: amountSupply,
			orderTotal: (parseFloat(cartState.cartTotal) + amountSupply).toFixed(2)
		};

	}

}

Payment.contextTypes = {
	router: React.PropTypes.object.isRequired
};
