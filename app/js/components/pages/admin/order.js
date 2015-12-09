import React, { Component } from 'react';
import { Link } from 'react-router';
import OrderStore from '../../../stores/orderStore';
import OrderApi from '../../../utils/orderApi';
let config = require('../../../config');

export default class AdminOrder extends Component {

	componentWillMount(){

		this.state = {
			order: undefined,
			updated: undefined
		};

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.onClickDelivered = this.onClickDelivered.bind(this);

	}

	componentDidMount() {

		OrderStore.addChangeListener(this.onStoreChange);
		
		OrderApi.getOne(this.props.params.token);

	}

	render() {

		let id, orderId, mail, prints = {}, total, state, stateLabel, firstname, lastname, phone, address, zip, city, country, billFirstname, billLastname, billPhone, billAddress, billZip, billCity, billCountry;
		if (this.state.order) {
			id = this.state.order._id;
			orderId = this.state.token;
			mail = this.state.order.mail;
			prints = this.state.order.prints;
			total = this.state.order.total;
			state = this.state.order.state;

			firstname = this.state.order.firstname;
			lastname = this.state.order.lastname;
			phone = this.state.order.phone;
			address = this.state.order.address;
			zip = this.state.order.zip;
			city = this.state.order.city;
			country = this.state.order.country;

			billFirstname = this.state.order.billFirstname || this.state.order.firstname;
			billLastname = this.state.order.billLastname || this.state.order.lastname;
			billPhone = this.state.order.billPhone || this.state.order.phone;
			billAddress = this.state.order.billAddress || this.state.order.address;
			billZip = this.state.order.billZip || this.state.order.zip;
			billCity = this.state.order.billCity || this.state.order.city;
			billCountry = this.state.order.billCountry || this.state.order.country;

			switch(state) {
				case 'in_progress': 
					stateLabel = 'In progress';
					break;
				case 'paid': 
					stateLabel = 'Paid — en attente de livraison';
					break;
				case 'delivered': 
					stateLabel = 'Delivered';
					break;
			}
		}

		return (
			<div className='admin__order'>
				<div className='submenu'><Link to='/admin/orders' className='button'>Back to orders</Link></div>
				<h1 className='title title--center title--absolute'><span><Link to='/admin'>Commande {orderId}</Link></span></h1>
				
				<section className='admin__section'>
					<h2 className='subtitle'>Adresse de livraison</h2>
					<p><span className='admin--uppercase'>{lastname}</span> {firstname}</p>
					<p>{address}</p>
					<p>{zip} <span className='admin--uppercase'>{city}</span>, {country}</p>
				</section>
				
				<section className='admin__section'>
					<h2 className='subtitle'>Adresse email</h2>
					<p>{mail}</p>
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Numéro de téléphone</h2>
					<p>Tél. : {phone}</p>
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Référence(s) photo(s)</h2>
					{Object.keys(prints).map((index) => {
						let product = prints[index];
						console.log(product);
						let serial = (parseInt(product.serial, 10) < 10) ? '0' + product.serial : product.serial;
						let logisticId = product.logistic_id + '_' + serial;
						
						return (
							<p>{logisticId}</p>
						)
					}.bind(this))}
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Tracking</h2>
					<input type='text' placeholder='Tracking' />
				</section>

				<section className='admin__section'>
					<a href=''>Télécharger une copie de la commande</a>
				</section>

				<div className='admin__section'>
					<label className='form__label' htmlFor='orderState'>état de la commande</label>
					<div className='form__select'><select id='orderState' name='orderState'>
						<option value="Nouvelle commande">Nouvelle commande</option>
						<option value="Commande expédiée">Commande expédiée</option>
					</select></div>
				</div>
				
				<section className='admin__section'>
					<a href='' className='button' onClick={this.save}>Enregistrer</a>
					{(this.state.updated && this.state.updated.message === 'success') ? (<div className='text'>Modifications de la commande enregistrées</div>) : null}
					{(this.state.updated && this.state.updated.message === 'error') ? (<div className='text'>Une erreur est survenur lors de la modification de la commande</div>) : null}
				</section>


			</div>
		);
										// <div className='cart__artist'>{product.project.artist}</div>
				//<section className='admin__section'>
				// 	<h2 className='subtitle'>Information</h2>
				// 	<p>State : {stateLabel}</p>
				// 	<p>Total : {total/100}€</p>
				// </section>

				// <section className='admin__section'>
				// 	<h2 className='subtitle'>Checkout</h2>
				// </section>
				
				// <section className='admin__section'>
				// 	<h2 className='subtitle'>Shipping address</h2>
				// 	<p>Firstname : {firstname}</p>
				// 	<p>Lastname : {lastname}</p>
				// 	<p>Phone : {phone}</p>
				// 	<p>Address : {address}</p>
				// 	<p>Zip : {zip}</p>
				// 	<p>City : {city}</p>
				// 	<p>Country : {country}</p>
				// </section>

				// {(() => {
				// 	if (billFirstname) { return (
				// 		<section className='admin__section'>
				// 			<h2 className='subtitle'>Billing address</h2>
				// 			<p>Firstname : {billFirstname}</p>
				// 			<p>Lastname : {billLastname}</p>
				// 			<p>Phone : {billPhone}</p>
				// 			<p>Address : {billAddress}</p>
				// 			<p>Zip : {billZip}</p>
				// 			<p>City : {billCity}</p>
				// 			<p>Country : {billCountry}</p>
				// 		</section>
				// 	)}
				// }.bind(this))()}

				// <section className='admin__section'>
				// 	<h2 className='subtitle'>Order details</h2>
				// 	<ul className='payment__products cart__products'>
				// 		{Object.keys(prints).map((index) => {
				// 			let product = prints[index];
				// 			let details
				// 			if (product.title) details = product.title+'. '+product.city+'. '+product.country+'. '+product.year
				// 			else details = product.city+'. '+product.country+'. '+product.year
							
				// 			return (
				// 				<li key={index} className='payment__product cart__product'>
				// 					<div className='cart__column'>
				// 						<div className='cart__details'>{details}</div>
				// 						<div className='cart__serial'>Edition <span className='cart__number'>{product.serial}</span></div>
				// 						<div className='cart__price'>{product.price}<span className='cart__currency'>€</span></div>
				// 					</div>
				// 					<div className='cart__column'>
				// 						<div className='cart__print'><img className='cart__image' src={'/static/prints/'+product.file+'_min.jpg'}></img></div>
				// 					</div>
				// 				</li>
				// 			)
				// 		}.bind(this))}
				// 	</ul>
				// </section>

				// <section className='admin__section'>
				// 	<a href='' className='button' onClick={this.onClickDelivered}>Delivered</a>
				// 	{(this.state.updated && this.state.updated.message === 'success') ? (<div className='text'>Order state updated</div>) : null}
				// </section>

	}

	onClickDelivered(e) {

		e.preventDefault();

		OrderApi.updateState(this.state.order._id, 'delivered');

	}

	onStoreChange() {

		this.setState({
			order: OrderStore.getOne(),
			updated: OrderStore.getUpdated()
		});

	}

}