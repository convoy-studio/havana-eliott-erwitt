import React from 'react/addons';
import { Link } from 'react-router';
import AppStore from '../stores/appStore';
import AppActions from '../actions/appActions';
import PopupCookie from './modules/popupCookie';
import CartActions from '../actions/cartActions';

const Transition = React.addons.TransitionGroup;
const nav = [
	{
		section: 'news',
		url: '/news',
		label: 'News'
	},
	{
		section: 'shop',
		url: '/shop-temp',
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

export default class Wrapper extends React.Component {

	componentWillMount() {

		this.state = {
			popupVisibility: false
		};
		
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

		this.visible = false;

		let cartStorage;
		if (typeof localStorage !== 'undefined' && typeof localStorage['cart'] !== 'undefined' && localStorage['cart'] !== 'undefined') {
			cartStorage = JSON.parse(localStorage['cart']);
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
			if (!this.cookies) {
				if (pathname === '/') {
					TweenMax.delayedCall(12.4, ()=>{
						this.setState({
							popupVisibility: true
						});
					}.bind(this));
				} else {
					this.setState({
						popupVisibility: true
					});
				}
			}
		}

		return (
			<div>
				{(!this.cookies) ? (<PopupCookie visible={this.state.popupVisibility} />) : null}
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
									<li><Link to="/newsletter" className="footer__button button button--footer">Fellowship News</Link></li>
									<li><Link to="/contact" className="footer__button button button--footer">Contact</Link></li>
									<li><Link to="/privacy-policy" className="footer__button button button--footer">Privacy Policy</Link></li>
									<li><Link to="/cookie-policy" className="footer__button button button--footer">Cookie Policy</Link></li>
									{(() => {
										if (this.props.location.pathname.indexOf('/shop') === -1) { return (
											<li><Link to="/terms-and-condition-of-use" className="footer__button button button--footer">Terms and conditions of use</Link></li>
										)} else { return (
											<li><Link to="/terms-and-condition-of-sale" className="footer__button button button--footer">Terms and conditions of sale</Link></li>
										)}
									}.bind(this))()}
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
		if (document.querySelector('body').classList.contains('js-mobile') && this.headerMenu.classList.contains('header__menu--open')) {
			this.closeMenu();
		}

	}

	handleScroll() {

		if (document.querySelector('body').classList.contains('js-mobile') && this.headerMenu.classList.contains('header__menu--open')) {
			this.closeMenu();
		}

	}

}