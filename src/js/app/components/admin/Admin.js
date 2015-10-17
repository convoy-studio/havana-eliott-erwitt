import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import ProjectStore from 'ProjectStore'
import ProjectApi from 'ProjectApi'
import OrderStore from 'OrderStore'
import OrderApi from 'OrderApi'
let _ = require('lodash')

export default class Admin extends Page {

	constructor(props) {
		super(props)

		this.state = {
			projects: undefined,
			orders: undefined
		}

		this._onStoreChange = this._onStoreChange.bind(this)
	}

	componentDidMount() {
		super.componentDidMount()

		ProjectStore.addChangeListener(this._onStoreChange);
		OrderStore.addChangeListener(this._onStoreChange);

		ProjectApi.getAll();
		OrderApi.getAll();
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

	render() {
		let projects = [],
			orders = []
		// _(this.state.projects).forEach((project, index) => {
		// 	projects.push(<li key={index}><a href={'#/admin/'+project.slug}>{project.artist}</a></li>)
		// }).value()

		_(this.state.projects).forEach((project, index) => {
			projects.push(
				<tr key={index}>
					<td><a href={'#/admin/'+project.slug}>{project.artist}</a></td>
					<td><a href={'#/admin/'+project.slug}>{project.slug}</a></td>
				</tr>
			)
		}).value()

		_(this.state.orders).forEach((order, index) => {
			console.log(order)
			orders.push(
				<tr key={index}>
					<td><a href={'#/admin/order/'+order._id}>{order._id}</a></td>
					<td><a href={'#/admin/order/'+order._id}>{order.user}</a></td>
				</tr>
			)
		}).value()

		return (
			<div className='page page--admin' ref='page-wrapper'>
				<div className='admin'>
					<div className='admin__projects'>
						<h2 className='admin__title title'>Projects</h2>
						<table>
							<tr>
								<th>Artist</th>
								<th>Slug</th>
							</tr>
							{projects}
						</table>
						<h2 className='admin__title title'>Orders</h2>
						<table>
							<tr>
								<th>ID</th>
								<th>User</th>
							</tr>
							{orders}
						</table>
					</div>
				</div>
			</div>
		)
	}

	_onStoreChange() {
		this.setState({
			projects: ProjectStore.getAll(),
			orders: OrderStore.getAll()
		})
	}

}
