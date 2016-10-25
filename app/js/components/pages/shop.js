import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import Utils from '../../utils/utils';
import AppStore from '../../stores/appStore';
import PrintApi from '../../utils/printApi';
import PrintStore from '../../stores/printStore';
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

class PrintPreview extends React.Component {

	render() {
		let {print, content, language} = this.props;

		return (
			<div className='shop__print'>
				<Link to={`/${language}/shop/${print.id}`}>
					<img src={print.image} alt={print.alt}></img>
					<div className='shop__hover'>
						<div className='shop__detail-wrapper'>
							<div className='shop__detail'>
								<div className='text'>{print.manufacturer}</div>
								<div className='text'>{print.name}</div>
								<div className='shop__price text'>{print.price}€</div>
								<div className='shop__button button'>{content.shop_details}</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

export default class Shop extends ComponentTransition {

	componentWillMount() {
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
        this.vw = 0;
        this.vh = 0;
		this.eShow = [];
		this.nImageLoaded = 0;
		this.loaded = false;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = Utils.getSupportedPropertyName('transform');
		this.sTop = 0;
		this.cTop = 0;

		this.content = AppStore.getContent()

	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');

		PrintApi.getForSale();
		PrintStore.addChangeListener(this.onStoreChange);
		CartStore.addChangeListener(this.onStoreChange);

		if(typeof document !== 'undefined') {
			this.vw = window.innerWidth;
			this.vh = window.innerHeight;
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
				file.src = print.image;
			}).value();
		}

	}

	componentWillUnmount() {

		if(typeof window !== 'undefined') {
			window.cancelAnimationFrame(this.scrollRaf);
		}
		PrintStore.removeChangeListener(this.onStoreChange);
		CartStore.removeChangeListener(this.onStoreChange);

	}

	render() {
		let language = AppStore.Lang();
		let {prints} = this.state;
		let columns = this.columnize(prints, 3);

		let pageClass = this.state.open ? '' : 'page--hidden';

				// <div className='submenu'><Link to='/shop-temp' className='button'>See temporary shop page</Link></div>
		return (
			<div className={'page page--shop ' + pageClass} onClick={this.discover} ref='view'>
				{this.createSeoComponent(language)}
				<div className='shop js-smooth'>
					<div className='shop__intro'>
						<h2 className='title'>{this.content.shop_intro_title}</h2>
						{Object.keys(this.content.shop_intro_paragraph).map((index) => {
							return (
								<p className='shop__paragraph paragraph text' dangerouslySetInnerHTML={{ __html: this.content.shop_intro_paragraph[index] }} key={index}></p>
							)
						})}
						<div className='shop__discover button' onClick={this.discover}>{this.content.shop_discover}</div>
					</div>
					<div className='shop__overlay'></div>
					<div className='shop__list'>
						{columns.map((column, index) => {
							return (
								<div className='shop__column' key={index}>
									{column.map((print, index) => {
										return <PrintPreview key={index} language={language} print={print} content={this.content}/>
									})}
								</div>
							)
						})}
					</div>
				</div>
			</div>
		);
	}

	onImageLoaded(e) {

		this.nImageLoaded++;

		if (this.nImageLoaded >= this.max) {
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

	/**
	 * @param {String} language
	 * @return {Seo}
	 */
	createSeoComponent(language) {
		let seo = {
			title: this.content.shop_title,
			description: this.content.shop_description,
			url: `${config.siteurl}/${language}/shop`,
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		return <Seo seo={seo} />;
	}

	/**
	 * Return an Array contains n nested Arrays, each representing a column.
	 * Distribute items evenly across the columns.
	 * @param {Array} items
	 * @param {Number} n - the number of columns
	 * @return {Array}
	 */
	columnize(items=[], n=3) {
		let columns = _.range(n).map(() => []);
		let distribute = (item, index) => columns[index % n].push(item);

		items && items.length && _.each(items, distribute);

		return columns;
	}
}

// vim: ts=2 sts=2 sw=2 noet
