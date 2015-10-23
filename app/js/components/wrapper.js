import React from 'react/addons';
// import ReactAddons from 'react/addons';
import { Link } from 'react-router';
import AppStore from '../stores/appStore';
import AppActions from '../actions/appActions';
import PopupCookie from './modules/popupCookie';
import CartActions from '../actions/cartActions';

// const { TransitionGroup } = React.addons;
const Transition = React.addons.TransitionGroup;
const nav = [
	{
		section: 'news',
		url: '/news',
		label: 'News'
	},
	{
		section: 'shop',
		url: '/shop',
		label: 'Shop'
	},{
		section: 'photography',
		url: '/photography/elliott_erwitt',
		label: 'Photography'
	},{
		section: 'fellowship',
		url: '/fellowship',
		label: 'Fellowship'
	}
];

export default class Wrapper {

	componentWillMount() {
		
		this.splash = AppStore.getSplash();

		const { pathname } = this.props.location;
		if (this.splash && pathname !== '/') {
			this.splash = false;
			AppActions.disableSplash();
		}

		// binded
		this.toggleMenu = this.toggleMenu.bind(this);
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.handleScroll = this.handleScroll.bind(this);

		let cartStorage;
		if(typeof localStorage !== 'undefined') {
			cartStorage = localStorage.getItem('cart');
		}
		if (cartStorage) {
			cartStorage = JSON.parse(cartStorage);
			_(cartStorage).forEach((item)=>{
				CartActions.addToCart(item);
			}).value();
		}

	}

	componentDidMount() {
	
		this.headerMenu = document.querySelector('.header__menu');

		document.querySelector('body').addEventListener('click', this.handleClickOutside);
		window.onscroll = this.handleScroll;

	}

	render() {

		const { pathname } = this.props.location;

		if(typeof localStorage !== 'undefined') {
			this.cookies = window.localStorage.getItem('cookies');
		}

		return (
			<div>
				{(!this.cookies) ? (<PopupCookie />) : null}
				{(this.splash) ? (<canvas	className='canvas'></canvas>) : null}

				{(() => {
					if (this.props.location.pathname.indexOf('/admin') === -1) {
						return (
							<header className='header'>
								<div className='hamburger' onClick={this.openMenu}>
									<div className='hamburger__line'></div>
								</div>
								<h1 className='header__logo'>
									<Link to="/"><div className='header__title'>Elliott Erwitt Havana Club 7</div><div className='header__subtitle'>Fellowship</div></Link>
								</h1>
								<nav className='header__menu'>
									<div className='header__close'></div>
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
						)
					}
				}.bind(this))()}
				
				<div id='pageContainer' className='page-container' ref='page-container'>
					<Transition component="div">
						{React.cloneElement(this.props.children || <div />, { key: pathname })}
					</Transition>
				</div>

				{(() => {
					if (this.props.location.pathname.indexOf('/admin') === -1) {
						return (
							<footer className='footer'>
								<ul>
									<li><Link to="/contact" className="footer__button button button--footer">Contact</Link></li>
									<li><Link to="/privacy" className="footer__button button button--footer">Privacy</Link></li>
									<li><Link to="/legal" className="footer__button button button--footer">Legal</Link></li>
								</ul>
							</footer>
						)
					}
				}.bind(this))()}
			</div>

		);

	}

	toggleMenu(e) {

		this.headerMenu.classList.toggle('header__menu--open');

	}

	openMenu() {
	
		this.headerMenu.classList.add('header__menu--open');
	
	}

	closeMenu() {
	
		if (this.props.location.pathname.indexOf('/admin') === -1) {
			this.headerMenu.classList.remove('header__menu--open');
		}
	
	}

	handleClickOutside(e) {
		
		// if (!e.target.classList.contains('hamburger') && !e.target.classList.contains('header__list')) {
		if (this.headerMenu.classList.contains('header__menu--open')) {
			this.closeMenu();
		}

	}

	handleScroll() {

		if (this.headerMenu.classList.contains('header__menu--open')) {
			this.closeMenu();
		}

	}

}