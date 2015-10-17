import React from 'react/addons';
// import ReactAddons from 'react/addons';
import { Link } from 'react-router';
import AppStore from '../stores/appStore';
import AppActions from '../actions/appActions';

// const { TransitionGroup } = React.addons;
const Transition = React.addons.TransitionGroup;
const nav = [
	{
		url: '/news',
		label: 'News'
	},
	{
		url: '/shop',
		label: 'Shop'
	},{
		url: '/photography/elliott_erwitt',
		label: 'Photography'
	},{
		url: '/fellowship',
		label: 'Fellowship'
	}
];

export default class Wrapper {

	componentWillMount() {
		
		this.splash = AppStore.getSplash();
		if (this.splash && this.props.children.type.name !== 'Home') {
			this.splash = false;
			AppActions.disableSplash();
		}

	}

	render() {

		const { pathname } = this.props.location;

		return (
			<div>
				{(() => {
					if (this.splash) {
						return (
							<canvas	className='canvas'></canvas>
						)
					}
				}.bind(this))()}
				<header className='header'>
					<div className='hamburger' onClick={this._toggleMenuBinded}>
						<div className='hamburger__line'></div>
					</div>
					<h1 className='header__logo'>
						<Link to="/"><div className='header__title'>Elliott Erwitt Havana Club 7</div><div className='header__subtitle'>Fellowship</div></Link>
					</h1>
					<nav className='header__menu'>
						<ul className='header__list'>
							{Object.keys(nav).map((index) => {
								let item = nav[index];
								let enabled = (pathname.indexOf(item.url) > -1) ? 'button--enabled' : '';

								return (
									<li className='header__item' key={index}><Link className={"button "+enabled} to={item.url}>{item.label}</Link></li>
								)
							})}
							
						</ul>
					</nav>
				</header>
				<div id='pageContainer' className='page-container' ref='page-container'>
					<Transition component="div">
						{React.cloneElement(this.props.children || <div />, { key: pathname })}
					</Transition>
				</div>
				<footer className='footer'>
					<ul>
						<li><Link to="/contact" className="footer__button button button--footer">Contact</Link></li>
						<li><Link to="/privacy" className="footer__button button button--footer">Privacy</Link></li>
						<li><Link to="/legal" className="footer__button button button--footer">Legal</Link></li>
					</ul>
				</footer>
			</div>

		);
					// <CSSTransitionGroup component="div" transitionName="transition">
					// 	{React.cloneElement(this.props.children || <div />, { key: pathname })}
					// </CSSTransitionGroup>
		
			// <div id='frontContainer' className='front-container' ref='front-container'>
			// 	<header id='header' className='header'>
			// 		<div className='hamburger' onClick={this._toggleMenuBinded}>
			// 			<div className='hamburger__line'></div>
			// 		</div>
			// 		<h1 className='header__logo'><Link to="/"><div className='header__title'>Elliott Erwitt Havana Club 7</div><div className='header__subtitle'>Fellowship</div></Link></h1>
			// 		<nav className='header__menu'>
			// 			<ul className='header__list'>
			// 				<li className='header__item'><Link className="button" to="/news">News</Link></li>
			// 				<li className='header__item'><Link className="button" to="/shop">Shop</Link></li>
			// 				<li className='header__item'><Link className="button" to="/photography">Photography</Link></li>
			// 				<li className='header__item'><Link className="button" to="/fellowship">Fellowship</Link></li>
			// 			</ul>
			// 		</nav>
			// 	</header>
			// 	<div id='pageContainer' className='page-container' ref='page-container'>
			// 		{this.props.children}
			// 	</div>
			// 	<footer id='footer' className='footer'>
			// 		<ul>
			// 			<li><Link to="/contact" className="footer__button button button--footer">Contact</Link></li>
			// 			<li><Link to="/privacy" className="footer__button button button--footer">Privacy</Link></li>
			// 			<li><Link to="/legal" className="footer__button button button--footer">Legal</Link></li>
			// 		</ul>
			// 	</footer>
			// </div>
	}
}