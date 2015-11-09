import React, { Component } from 'react';
import Home from './home';
import { Link } from 'react-router';
import LoginStore from '../../../stores/LoginStore';
let config = require('../../../config');

const nav = [
	{
		section: 'subscriber-news',
		url: '/admin/subscriber-news',
		label: 'Newsletter'
	},{
		section: 'subscriber-shop',
		url: '/admin/subscriber-shop',
		label: 'Opening'
	},{
		section: 'order',
		url: '/admin/orders',
		label: 'Orders'
	},{
		section: 'project',
		url: '/admin/projects',
		label: 'Projects'
	}
];

export default class Admin extends Component {

	componentDidMount(){
		
		if (!LoginStore.isLoggedIn()) {
			this.context.router.transitionTo('/login');
		}

	}

	render() {

		const { pathname } = this.props.location;

		return (
			<div>
				<header className='header'>
					<nav className='admin__menu'>
						<ul className='admin__list'>
							{Object.keys(nav).map((index) => {
								let item = nav[index];
								let enabled = (pathname.indexOf(item.section) > -1) ? 'button--enabled' : '';

								return (
									<li className='admin__item' key={index}><Link className={"button "+enabled} to={item.url}>{item.label}</Link></li>
								)
							})}
						</ul>
					</nav>
				</header>
				<div className='page page--admin page--classic' ref='view'>
					<div className='page__content admin'>
						{(() => {
							if (this.props.children) {
								return (
									<div className='admin__content'>{this.props.children}</div>
								);
							} else {
								return (
									<div className='admin__content'><Home /></div>
								);
							}
						}.bind(this))()}
					</div>
				</div>
			</div>
		);

	}
}

Admin.contextTypes = {
	router: React.PropTypes.func.isRequired
};