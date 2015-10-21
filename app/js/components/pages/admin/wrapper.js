import React, { Component } from 'react';
import Home from './home';
import { Link } from 'react-router';
let config = require('../../../config');

const nav = [
	{
		section: 'users',
		url: '/admin/users',
		label: 'Users'
	},{
		section: 'fellowship',
		url: '/fellowship',
		label: 'Fellowship'
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

	componentWillMount(){
		
	}

	render() {

		const { pathname } = this.props.location;

		return (
			<div>
				<header className='header'>
					<nav className='header__menu'>
						<ul className='header__list'>
							{Object.keys(nav).map((index) => {
								let item = nav[index];
								let enabled = (pathname.indexOf(item.section) > -1) ? 'button--enabled' : '';

								return (
									<li className='header__item' key={index}><Link className={"button "+enabled} to={item.url}>{item.label}</Link></li>
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