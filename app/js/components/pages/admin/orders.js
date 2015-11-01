import React, { Component } from 'react';
import { Link } from 'react-router';
import OrderStore from '../../../stores/orderStore';
import OrderApi from '../../../utils/orderApi';
let config = require('../../../config');
let _ = require('lodash');

export default class AdminOrders extends Component {

	componentWillMount() {

		this.state = {
			paidOrders: {},
			deliveredOrders: {}
		};

		this.onStoreChange = this.onStoreChange.bind(this)
		
	}

	componentDidMount() {
		
		OrderStore.addChangeListener(this.onStoreChange);

		OrderApi.getPaid();
		OrderApi.getDelivered();

	}

	render() {

		let paidOrders = [];
		_(this.state.paidOrders).forEach((order, index) => {
			paidOrders.push(
				<tr key={index}>
					<td><Link to={'/admin/order/'+order._id}>{order._id}</Link></td>
					<td><Link to={'/admin/order/'+order._id}>{order.total/100}€</Link></td>
					<td><Link to={'/admin/order/'+order._id}>{order.user}</Link></td>
				</tr>
			)
		}).value();

		let deliveredOrders = [];
		_(this.state.deliveredOrders).forEach((order, index) => {
			deliveredOrders.push(
				<tr key={index}>
					<td><Link to={'/admin/order/'+order._id}>{order._id}</Link></td>
					<td><Link to={'/admin/order/'+order._id}>{order.total/100}€</Link></td>
					<td><Link to={'/admin/order/'+order._id}>{order.user}</Link></td>
				</tr>
			)
		}).value();

		return (
			<div className='admin__orders'>
				<h1 className='title title--center title--absolute'><Link to='/admin'>Orders</Link></h1>
				{(() => {
					if (paidOrders.length > 0) { return (
						<section className='admin__section'>
							<h2 className='subtitle title--center'>Paid orders</h2>
							<table>
								<tr>
									<th>ID</th>
									<th>Total</th>
									<th>User</th>
								</tr>
								{paidOrders}
							</table>
						</section>
					)}
				}.bind(this))()}

				{(() => {
					if (deliveredOrders.length > 0) { return (
						<section className='admin__section'>
							<h2 className='subtitle title--center'>Delivered orders</h2>
							<table>
								<tr>
									<th>ID</th>
									<th>Total</th>
									<th>User</th>
								</tr>
								{deliveredOrders}
							</table>
						</section>
					)}
				}.bind(this))()}
				
			</div>
		);

	}

	onStoreChange() {

		this.setState({
			paidOrders: OrderStore.getPaid(),
			deliveredOrders: OrderStore.getDelivered()
		});

	}

}