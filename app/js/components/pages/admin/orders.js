import React, { Component } from 'react';
import { Link } from 'react-router';
import OrderStore from '../../../stores/orderStore';
import OrderApi from '../../../utils/orderApi';
import PrintStore from '../../../stores/printStore';
import PrintApi from '../../../utils/printApi';
let config = require('../../../config');
let _ = require('lodash');

export default class AdminOrders extends Component {

	componentWillMount() {

		this.state = {
			paidOrders: {},
			deliveredOrders: {},
			unsold: 0
		};

		this.onStoreChange = this.onStoreChange.bind(this)

	}

	componentDidMount() {

		OrderStore.addChangeListener(this.onStoreChange);
		PrintStore.addChangeListener(this.onStoreChange);

		OrderApi.getPaid();
		OrderApi.getDelivered();
		PrintApi.getUnsold();

	}

	render() {

		let paidOrders = [];
		_(this.state.paidOrders).forEach((order, index) => {
			paidOrders.push(
				<tr key={index}>
					<td><Link to={'/admin/order/'+order._id}>{order.token}</Link></td>
					<td><Link to={'/admin/order/'+order._id}>{order.total.toFixed(2)} €</Link></td>
					<td><Link to={'/admin/order/'+order._id}>{order.user}</Link></td>
				</tr>
			)
		}).value();

		let deliveredOrders = [];
		_(this.state.deliveredOrders).forEach((order, index) => {
			deliveredOrders.push(
				<tr key={index}>
					<td><Link to={'/admin/order/'+order._id}>{order.token}</Link></td>
					<td><Link to={'/admin/order/'+order._id}>{order.total.toFixed(2)} €</Link></td>
					<td><Link to={'/admin/order/'+order._id}>{order.user}</Link></td>
				</tr>
			)
		}).value();

		return (
			<div className='admin__orders'>
				<h1 className='title title--center title--absolute'><span><Link to='/admin'>Orders</Link></span></h1>
				<h2 className='subtitle title--center admin__stock'>Total Stock Value : <span className='admin__stock-value'>{this.state.unsold}€</span></h2>
				{(paidOrders.length > 0) && (
					<section className='admin__section'>
						<h2 className='subtitle title--center'>New orders</h2>
						<table>
							<tr>
								<th>Number</th>
								<th>Amout</th>
								<th>Client</th>
							</tr>
							{paidOrders}
						</table>
					</section>
				)}
				{(deliveredOrders.length > 0) && (
					<section className='admin__section'>
						<h2 className='subtitle title--center'>Shipped order</h2>
						<table>
							<tr>
								<th>Number</th>
								<th>Amout</th>
								<th>Client</th>
							</tr>
							{deliveredOrders}
						</table>
					</section>
				)}
			</div>
		);

	}

	onStoreChange() {

		this.setState({
			paidOrders: OrderStore.getPaid(),
			deliveredOrders: OrderStore.getDelivered(),
			unsold: PrintStore.getUnsold()
		});

	}

}
