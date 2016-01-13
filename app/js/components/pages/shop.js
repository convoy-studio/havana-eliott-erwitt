import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import Utils from '../../utils/utils';
import AppStore from '../../stores/appStore';
import PrintApi from '../../utils/printApi';
import PrintStore from '../../stores/printStore';
import { intro } from '../../../data/shop';
import Cart from '../modules/cart';
import CartActions from '../../actions/cartActions';
import CartStore from '../../stores/cartStore';
let raf = Utils.raf();
let _ = require('lodash');
let offset = require('../../utils/offset');
let config = require('../../config');
// let Masonry;
// if(typeof window !== 'undefined') {
// 	Masonry = require('masonry-layout');
// }

export default class Shop extends ComponentTransition {

	componentWillMount() {

		super.componentWillMount();

		this.vw = 0;
		this.vh = 0;
		if(typeof window !== 'undefined') {
			this.vw = window.innerWidth;
			this.vh = window.innerHeight;
		}

		// state
		this.state = {
			prints: {},
			loaded: false,
			open: false,
			cartItems: CartStore.getCartItems(),
			cartCount: 0
		};

		// binded
		this.onStoreChange 		= this.onStoreChange.bind(this);
		this.raf 				= this.raf.bind(this);
		this.discover 			= this.discover.bind(this);
		this.onImageLoaded 		= this.onImageLoaded.bind(this);

		// vars
		this.eShow = [];
		this.nImageLoaded = 0;
		this.loaded = false;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = Utils.getSupportedPropertyName('transform');
		this.sTop = 0;
		this.cTop = 0;

	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');

		PrintApi.getForSale();
		PrintStore.addChangeListener(this.onStoreChange);
		CartStore.addChangeListener(this.onStoreChange);

		if(typeof document !== 'undefined') {
			this.body 		= document.querySelector('body');
			this.page 		= document.querySelector('.page--shop');
			this.shop 		= document.querySelector('.shop');
			this.overlay 	= document.querySelector('.shop__overlay');
			this.intro 		= document.querySelector('.shop__intro');
			this.list 		= document.querySelector('.shop__list');
		}

		if (Utils.getURLParameter('open')) this.discover();

		if (this.vw > 958) {
			this.raf()
		}

	}

	componentDidUpdate() {

		let file;
		this.max = _.size(this.state.prints);

		if (this.max > 0 && !this.loaded) {
			this.loaded = true;
			_(this.state.prints).forEach((print, index) => {
				file = new Image();
				file.onload = this.onImageLoaded;
				file.src = '/static/prints/'+print.file+'_medium.jpg';
			}).value();
		}

	}

	componentWillUnmount() {

		if(typeof window !== 'undefined') {
			window.cancelAnimationFrame(this.scrollRaf);
		}
		PrintStore.removeChangeListener(this.onStoreChange);

	}

	render() {

		let seo = {
			title: 'Buy Elliott Erwitt Print | Havana Club 7 Fellowship',
			description: 'Buy limited edition prints signed originals by Elliot Erwitt and other documentary photographers member of the Fellowship project.',
			url: config.siteurl + '/shop',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		let pageClass = this.state.open ? '' : 'page--hidden';

		this.prints = []
		_(this.state.prints).forEach((print, index) => {
			if (index % 3 === 0) {
				if (!this.prints[0]) this.prints[0] = []
				this.prints[0].push(print);
			} else if (index % 2 === 0) {
				if (!this.prints[1]) this.prints[1] = []
				this.prints[1].push(print);
			} else {
				if (!this.prints[2]) this.prints[2] = []
				this.prints[2].push(print);
			}
		}).value();

				// <div className='submenu'><Link to='/shop-temp' className='button'>See temporary shop page</Link></div>
		return (
			<div className={'page page--shop ' + pageClass} onClick={this.discover} ref='view'>
				<Seo seo={seo} />
				<div className='shop js-smooth'>
					<div className='shop__intro'>
						<h2 className='title'>{intro.title}</h2>
						{Object.keys(intro.paragraphs).map((index) => {
							return (
								<p className='shop__paragraph paragraph text' key={index}>{intro.paragraphs[index]}</p>
							)
						})}
						<div className='shop__discover button' onClick={this.discover}>Discover and buy photographs.</div>
					</div>
					<div className='shop__overlay'></div>
					<div className='shop__list'>
						{Object.keys(this.prints).map((index) => {
							let prints = this.prints[index];
							return (
								<div className='shop__column' key={index}>
									{Object.keys(prints).map((index) => {
										let print = prints[index];
										let file = print.file + '_medium.jpg';
										let details;
										if (print.title) details = print.title+'. '+print.city+'. '+print.country+'. '+print.year;
										else details = print.city+'. '+print.country+'. '+print.year;

										return (
											<div className='shop__print' key={index}>
												<Link to={'/shop/'+print.token}>
													<img src={'/static/prints/'+file} alt={print.alt}></img>
													<div className='shop__hover'>
														<div className='shop__detail-wrapper'>
															<div className='shop__detail'>
																<div className='text'>{print.artist}</div>
																<div className='text'>{details}</div>
																<div className='shop__price text'>{print.price}€</div>
																<div className='shop__button button'>More details</div>
															</div>
														</div>
													</div>
												</Link>
											</div>
										)
									}.bind(this))}
								</div>
							)
						}.bind(this))}
					</div>
				</div>
				<Cart />
			</div>
		);
									// {Object.keys(prints).map((index) => {
									// 	let print = prints[index];
									// 	console.log(print);
									// 	let file = print.file + '_medium.jpg';
									// 	let details;
									// 	if (print.title) details = print.title+'. '+print.city+'. '+print.country+'. '+print.year;
									// 	else details = print.city+'. '+print.country+'. '+print.year;

									// 	return (
									// 		<div className='shop__print' key={id}>
									// 			<Link to={'/shop/'+print.token}>
									// 				<img src={'/static/prints/'+file}></img>
									// 				<div className='shop__hover'>
									// 					<div className='shop__detail'>
									// 						<div className='text'>{print.artist}</div>
									// 						<div className='text'>{details}</div>
									// 						<div className='shop__price text'>{print.price}€</div>
									// 						<div className='shop__button button'>More details</div>
									// 					</div>
									// 				</div>
									// 			</Link>
									// 		</div>
									// 	)
									// }.bind(this))}

		// {Object.keys(this.state.prints).map((id, index) => {
		// 					let print = this.state.prints[id]
		// 					let file = print.file + '_medium.jpg'
		// 					let details
		// 					if (print.title) details = print.title+'. '+print.city+'. '+print.country+'. '+print.year
		// 					else details = print.city+'. '+print.country+'. '+print.year

		// 					return (
		// 						<div className='shop__print' key={id}>
		// 							<Link to={'/shop/'+print.token}>
		// 								<img src={'/static/prints/'+file}></img>
		// 								<div className='shop__hover'>
		// 									<div className='shop__detail'>
		// 										<div className='text'>{print.artist}</div>
		// 										<div className='text'>{details}</div>
		// 										<div className='shop__price text'>{print.price}€</div>
		// 										<div className='shop__button button'>More details</div>
		// 									</div>
		// 								</div>
		// 							</Link>
		// 						</div>
		// 					)
		// 				}.bind(this))}
	}

	onImageLoaded(e) {

		this.nImageLoaded++;

		if (this.nImageLoaded >= this.max) {
			// if(typeof window !== 'undefined') {
			// 	let msnry = new Masonry( '.shop__list', {
			// 		itemSelector: '.shop__print',
			// 		columnWidth: '.shop__print',
			// 		gutter: 10
			// 	});
			// }
			document.querySelector('.page--shop').style.height = this.shop.offsetHeight + 'px';
		}

	}

	raf() {

		if (this.scrollIndex % 3) this.scrollOk = true;
		else this.scrollOk = true;
		this.scrollIndex++;

		if (this.scrollOk) {
			this.handleScroll();
		}

		this.scrollRaf = raf(this.raf);

	}

	handleScroll() {

		let e;
		this.sTop = Utils.getScrollTop();
		this.cTop += 0.1 * (this.sTop - this.cTop);
		e = -this.cTop;
		if (this.shop) {
			this.shop.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';
		}

		_(document.querySelectorAll('.shop__print')).forEach((el, index) => {
			this.lTop = offset(el).top
			if (!this.eShow[index]) {
				this.eShow[index] = false
			}

			// in viewport
			if (this.lTop - this.vh < 0 && !this.eShow[index]) {
				this.eShow[index] = true
				TweenMax.to(el, 0.6, {y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random()*0.2})
			}

			// off viewport
			if (this.lTop - this.vh > 0 && this.eShow[index]) {
				this.eShow[index] = false
				TweenMax.set(el, {y: 100, opacity: 0})
			}
		}).value();
	}

	discover() {

		this.setState({
			open: true
		});
		// this.page.classList.remove('page--overflow')
		// this.overlay.classList.add('shop__overlay--hidden')
		// this.intro.classList.add('shop__intro--hidden')
		document.querySelector('.page--shop').style.height = this.shop.offsetHeight + 'px'

	}

	resize() {

		let windowW = AppStore.Window.w;
		let windowH = AppStore.Window.h;
		super.resize();

		if (this.body && this.body.classList.contains('js-mobile')) {
			if (this.scrollRaf) {
				document.querySelector('.page--shop').style.height = 'auto';
				Utils.clearRaf(this.scrollRaf);
				this.scrollRaf = null;
			}
		} else {
			if (!this.scrollRaf) {
				if (this.fellowship) document.querySelector('.page--shop').style.height = this.fellowship.offsetHeight + 'px';
				this.raf();
			}
		}

	}

	onStoreChange() {

		this.setState({
			prints: PrintStore.getForSale(),
			cartItems: CartStore.getCartItems(),
			cartCount: CartStore.getCartCount()
		});

	}

}
