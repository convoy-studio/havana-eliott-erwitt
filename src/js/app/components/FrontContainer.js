import React from 'react'
import BaseComponent from 'BaseComponent'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'

export default class FrontContainer extends BaseComponent {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		AppStore.on(AppConstants.PAGE_HASHER_CHANGED, this.didHasherChange)
	}
	render() {
		let menuData = AppStore.menuContent()
		let menuItems = menuData.map((item, index)=>{
			let pathUrl = '#' + item.url
			return(
				<li key={index}><a href={pathUrl}>{item.name}</a></li>
			)
		})
		let footerMenuData = AppStore.footerMenuContent()
		let footerMenuItems = footerMenuData.map((item, index)=>{
			let pathUrl = '#' + item.url
			return(
				<li key={index}><a href={pathUrl}>{item.name}</a></li>
			)
		})

		return (
			<div id='front-container' ref='front-container'>
				<header id="header">
					<h1 className='header-title'><a href='#/home'>Elliot Erwitt — Havana Club 7 — Fellowship</a></h1>
					<ul>
						{menuItems}
					</ul>
				</header>
				<footer id="footer">
					<ul>
						{footerMenuItems}
					</ul>
				</footer>
			</div>
		)
	}
	didHasherChange() {
		// Update or highlight parts of interface depends the route
	}
}
