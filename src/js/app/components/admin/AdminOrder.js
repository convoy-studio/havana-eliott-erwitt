import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import OrderStore from 'OrderStore'
import OrderApi from 'OrderApi'
let _ = require('lodash')

export default class AdminOrder extends Page {

	constructor(props) {
		super(props)

		this.props = props

		this.state = {
			order: undefined
		}

		this.onStoreChange = this.onStoreChange.bind(this)
	}

	componentDidMount() {
		super.componentDidMount()

		OrderStore.addChangeListener(this.onStoreChange);
		
		OrderApi.getOne(this.props.idSection);
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
		let prints = []
		let id, user

		if (this.state.order) {
			id = this.state.order._id
			user = this.state.order.user
		}

		return (
			<div className='page page--admin' ref='page-wrapper'>
				<div className='admin'>
					<div className='admin__order'>
						<h1 className='admin__title title'>Order n°{id}</h1>
						<p>user: {user}</p>
						<table>
							<tr>
								<th>Token</th>
								<th>Print</th>
								<th>Title</th>
								<th>City</th>
								<th>Country</th>
								<th>Year</th>
								<th>Price</th>
								<th>Serial</th>
							</tr>
							{prints}
						</table>
					</div>
				</div>
			</div>
		)
	}

	onStoreChange() {
		// this.setState({
		// 	order: OrderStore.getOne()
		// })
	}

}
