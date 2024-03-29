import React from 'react/addons';
import { Link } from 'react-router';
import AppStore from '../stores/appStore';
import AppActions from '../actions/appActions';
import PopupCookie from './modules/popupCookie';
import CartActions from '../actions/cartActions';
import languages from '../../data/languages'

const Transition = React.addons.TransitionGroup;
const content = AppStore.getContent()
const nav = [
	{
		section: 'news',
		url: '/news',
		label: content.nav_label_news
	},
	{
		section: 'shop',
		url: '/shop-temp',
		label: content.nav_label_shop
	},{
		section: 'photography',
		url: '/photography/elliott_erwitt',
		label: content.nav_label_photography
	},{
		section: 'fellowship',
		url: '/fellowship',
		label: content.nav_label_fellowship
	}
];

export default class Wrapper extends React.Component {
	componentWillMount() {

		const { pathname } = this.props.location;
		this.state = {
			popupVisibility: false
		};

		this.isSplash = pathname === '/' + languages[0] || pathname === '/' + languages[1]

		// binded
		this.toggleMenu = this.toggleMenu.bind(this);
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	getLanguage(url) {
		let urlSplitter = url.split('/')
		for (let urlPart of urlSplitter) {
			for (let lang of languages) {
				if(urlPart == lang) return lang
			}
		}
	}

	componentDidMount() {
		const { pathname } = this.props.location;

		this.headerMenu = document.querySelector('.header__menu');

		document.querySelector('body').addEventListener('click', this.handleClickOutside);
		window.onscroll = this.handleScroll;

		// AppStore.Lang() = this.getLanguage(window.location.pathname)
		// console.log(window.location.pathname, AppStore.Lang())
		// if(AppStore.Lang() == undefined) AppStore.Lang() = 'en'

        if (pathname != '/login' && pathname.indexOf('admin') < 0) {
			const cookies = window.localStorage.getItem('cookies');
			if (!cookies) {
				this.setState({
					popupVisibility: true
				});
			}
		}
	}

	componentWillUpdate() {
		const { pathname } = this.props.location;
		this.isSplash = pathname === '/' + languages[0] || pathname === '/' + languages[1]
	}

	render() {

		const { pathname } = this.props.location;
		const isAdmin = pathname.indexOf('/admin') !== -1 || pathname.indexOf('/login') !== -1;

		this.content = AppStore.getContent()

		return (
			<div>
				{this.state.popupVisibility && (<PopupCookie />)}
				{this.isSplash && (<canvas className='canvas'></canvas>)}

				{/* leave that div please */}
				<div></div>

				{!isAdmin && (
					<header className='header'>
						<div className='hamburger' onClick={this.openMenu}>
							<div className='hamburger__line'></div>
						</div>
						<h1 className='header__logo'>
							<Link to={AppStore.getLink("")}><div className='header__title'>{this.content.header_title}</div><div className='header__subtitle'>{this.content.header_subtitle}</div></Link>
						</h1>
						<nav className='header__menu'>
							<div className='header__close'></div>
							<ul className='header__list'>
								{Object.keys(nav).map((index) => {
									let item = nav[index];
									let enabled = (pathname.indexOf(item.section) > -1) ? 'button--enabled' : '';

									return (
										<li className='header__item' key={index}>
											<Link className={"button "+enabled} to={AppStore.getLink(item.url)}>{item.label}</Link>
										</li>
									)
								})}
								
							</ul>
						</nav>
					</header>
				)}

				<div id='pageContainer' className='page-container' ref='page-container'>
					<Transition component="div">
						{React.cloneElement(this.props.children || <div />, { key: pathname })}
					</Transition>
				</div>


				{!isAdmin && (
					<footer className='footer'>
						<ul>
							<li><Link to={AppStore.getLink("/newsletter")} className="footer__button button button--footer">{this.content.footer_news}</Link></li>
							<li><Link to={AppStore.getLink("/contact")} className="footer__button button button--footer">{this.content.footer_contact}</Link></li>
							<li><Link to={AppStore.getLink("/privacy-policy")} className="footer__button button button--footer">{this.content.footer_privacy}</Link></li>
							<li><Link to={AppStore.getLink("/cookie-policy")} className="footer__button button button--footer">{this.content.footer_cookie}</Link></li>
							
							{(() => {
								if (this.props.location.pathname.indexOf('/shop') === -1) { return (
									<li><Link to={AppStore.getLink("/terms-and-condition-of-use")} className="footer__button button button--footer">{this.content.footer_terms_conditions}</Link></li>
								)} else { return (
									<li><Link to={AppStore.getLink("/terms-and-condition-of-sale")} className="footer__button button button--footer">{this.content.footer_terms_conditions_sale}</Link></li>
								)}
							}.bind(this))()}
							<br />
							<li>
								<a href="/en" className="footer__button button button--footer">EN</a> / 
								<a href="/es" className="footer__button button button--footer">ES</a>
							</li>
						</ul>
					</footer>
				)}
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
		const { pathname } = this.props.location;
		const isAdmin = pathname.indexOf('/admin') !== -1 || pathname.indexOf('/login') !== -1;

		if (!isAdmin) {
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
