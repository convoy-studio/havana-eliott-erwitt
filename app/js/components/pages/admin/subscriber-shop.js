import React, { Component } from 'react';
import { Link } from 'react-router';
import OpeningShopStore from '../../../stores/openingShopStore';
import OpeningShopApi from '../../../utils/openingShopApi';
let config = require('../../../config');
let _ = require('lodash');

export default class AdminSubscribersShop extends Component {

	componentWillMount() {

		this.state = {
			subscribers: {}
		};

		this.onStoreChange = this.onStoreChange.bind(this)
		
	}

	componentDidMount() {
		
		OpeningShopStore.addChangeListener(this.onStoreChange);

		OpeningShopApi.getAll();

	}

	render() {

		let subscribers = [];
		console.log(this.state.subscribers);
		_(this.state.subscribers).forEach((subscriber, index) => {
			subscribers.push(
				<tr key={index}>
					<td>{subscriber.mail}</td>
				</tr>
			)
		}).value();

		return (
			<div className='admin__orders'>
				<h1 className='title title--center title--absolute'><Link to='/admin'>Subscribers opening shop</Link></h1>
				<section className='admin__section'>
					<table>
						<tr>
							<th>Mail</th>
						</tr>
						{subscribers}
					</table>
				</section>
			</div>
		);

	}

	onStoreChange() {

		this.setState({
			subscribers: OpeningShopStore.getAll()
		});

	}

}