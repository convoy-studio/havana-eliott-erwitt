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
				<li className='header__item ' key={index}><a href={pathUrl} className={'button ' + classes}>{item.name}</a></li>
			)
		}).reverse()
		let footerMenuData = AppStore.footerMenuContent()
		let footerMenuItems = footerMenuData.map((item, index)=>{
			let pathUrl = '#' + item.url
			let classes = (item.id === this.state.hash) || (item.id === this.state.hash+'s') ? 'button--enabled' : ''
			return(
				<li key={index}><a href={pathUrl} className='footer__button button button--footer'>{item.name}</a></li>
			)
		})

		return (
			<div id='frontContainer' className='front-container' ref='front-container'>
				<header id='header' className='header'>
					<h1 className='header__logo'><a href='#/'><div className='header__title'>Elliott Erwitt Havana Club 7</div><div className='header__subtitle'>Fellowship</div></a></h1>
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
