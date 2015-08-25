import React from 'react'
import BaseComponent from 'BaseComponent'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'

export default class FrontContainer extends BaseComponent {

	constructor(props) {
		super(props)

		this.didHasherChangeBinded = this.didHasherChange.bind(this)
		this.state = {
			hash: undefined
		}
	}

	componentWillMount() {
		AppStore.on(AppConstants.PAGE_HASHER_CHANGED, this.didHasherChangeBinded)
	}

	render() {
		let menuData = AppStore.menuContent()
		let menuItems = menuData.map((item, index)=>{
			let pathUrl = '#' + item.url
			let classes = (item.id === this.state.hash) || (item.id === this.state.hash+'s') ? 'button--enabled' : ''
			return(
				<li className={'header__item ' + classes} key={index}><a href={pathUrl}><p className='button button--small'>{item.name}</p></a></li>
			)
		}).reverse()
		let footerMenuData = AppStore.footerMenuContent()
		let footerMenuItems = footerMenuData.map((item, index)=>{
			let pathUrl = '#' + item.url
			let classes = (item.id === this.state.hash) || (item.id === this.state.hash+'s') ? 'button--enabled' : ''
			return(
				<li key={index} className={'button button--right button--small ' + classes}><a href={pathUrl}>{item.name}</a></li>
			)
		})

		return (
			<div id='frontContainer' className='front-container' ref='front-container'>
				<header id='header' className='header'>
					<h1 className='header__title'><a href='#/'>Elliott Erwitt Havana Club 7<div className='heaser__subtitle'>Fellowship</div></a></h1>
					<nav className='header__menu'>
						<ul className='header__list'>
							{menuItems}
						</ul>
					</nav>
				</header>
				<footer id='footer' className='footer'>
					<ul>
						{footerMenuItems}
					</ul>
				</footer>
			</div>
		)
	}

	didHasherChange() {
		this.setState({
			hash: AppStore.hash()
		})
	}

}
