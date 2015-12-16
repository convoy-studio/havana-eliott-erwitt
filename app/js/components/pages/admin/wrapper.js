import React, { Component } from 'react';
import Home from './home';
import { Link } from 'react-router';
import LoginStore from '../../../stores/loginStore';
import Orders from './orders';
let config = require('../../../config');

const adminNav = [
	{
		section: 'subscriber-news',
		url: '/admin/subscriber-news',
		label: 'Newsletter'
	},{
		section: 'subscriber-shop',
		url: '/admin/subscriber-shop',
		label: 'Opening'
	},{
		section: 'project',
		url: '/admin/projects',
		label: 'Projects'
	}
];

const deliveryNav = [
	// {
	// 	section: 'order',
	// 	url: '/admin/orders',
	// 	label: 'Orders'
	// }
];

export default class Admin extends Component {

	componentDidMount(){
		
		if (!LoginStore.isLoggedIn()) {
			this.context.router.transitionTo('/login');
		}

	}

	render() {

		const { pathname } = this.props.location;

		let dom = (<div></div>);
		let content;
		if (this.props.children) {
			content = (<div className='admin__content'>{this.props.children}</div>);
		} else {
			if (LoginStore.user && LoginStore.user.type === 'delivery') {
				content = (<div className='admin__content'><Orders /></div>);
			} else {
				content = (<div className='admin__content'><Home /></div>);
			}
		}

		if (LoginStore.user && LoginStore.user.type === 'admin') {
			dom = (
				<div>
					<header className='header'>
						<nav className='admin__menu'>
							<ul className='admin__list'>
								{Object.keys(adminNav).map((index) => {
									let item = adminNav[index];
									let enabled = (pathname.indexOf(item.section) > -1) ? 'button--enabled' : '';

									return (
										<li className='admin__item' key={index}><Link className={"button "+enabled} to={item.url}>{item.label}</Link></li>
									)
								})}
							</ul>
						</nav>
					</header>
					<div className='page page--admin page--classic' ref='view'>
						<div className='page__content admin'>{content}</div>
					</div>
				</div>
			);
		} else if (LoginStore.user && LoginStore.user.type === 'delivery') {
			dom = (
				<div>
					<header className='header'>
						<nav className='admin__menu'>
							<ul className='admin__list'>
								{Object.keys(deliveryNav).map((index) => {
									let item = deliveryNav[index];
									let enabled = (pathname.indexOf(item.section) > -1) ? 'button--enabled' : '';

									return (
										<li className='admin__item' key={index}><Link className={"button "+enabled} to={item.url}>{item.label}</Link></li>
									)
								})}
							</ul>
						</nav>
					</header>
					<div className='page page--admin page--classic' ref='view'>
						<div className='page__content admin'>{content}</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				{dom}
			</div>
		);

	}
}

Admin.contextTypes = {
	router: React.PropTypes.func.isRequired
};