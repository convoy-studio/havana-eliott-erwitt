import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import Router, { Link } from 'react-router';
import Cart from '../modules/cart';
import AppStore from '../../stores/appStore';
import PrintStore from '../../stores/printStore';
import PrintApi from '../../utils/printApi';
import PrintActions from '../../actions/printActions';
import CartActions from '../../actions/cartActions';
import CartStore from '../../stores/cartStore';
import Utils from '../../utils/utils';
import {translate} from '../../utils/translation';

let _ = require('lodash');
let raf = Utils.raf();
let config = require('../../config');

export default class Print extends ComponentTransition {

	componentWillMount(){
		// state
		this.state = {
			print: undefined,
			selectedCombination: undefined,
			loadedPrint: undefined,
			cartItems: CartStore.getCartItems(),
			cartCount: 0,
			bigImageShowed: false,
			error: undefined
		};

		// binded
		this.toggleList = this.toggleList.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.onStoreChange = this.onStoreChange.bind(this);
		this.zoomIn = this.zoomIn.bind(this);
		this.zoomOut = this.zoomOut.bind(this);
		this.onMousemove = this.onMousemove.bind(this);
		this.raf = this.raf.bind(this);
		this.onTouchstart = this.onTouchstart.bind(this);
		this.onTouchmove = this.onTouchmove.bind(this);
		this.onTouchend = this.onTouchend.bind(this);

		// vars
		this.loaded = false;
		this.bigprintLoaded = false;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = Utils.getSupportedPropertyName('transform');
		this.printY = 0;
		this.startX = 0;
		this.deltaX = 0;

	}

	_enterStyle() {

		let el = this.refs.view.getDOMNode();
		let logo = document.querySelector('.header__logo');
		// let hamburger = document.querySelector('.hamburger');
		let body = document.querySelector('body');

		logo.style.display = 'table';
		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn}, 0);
		this.enterTl.to(logo, 0.3, {opacity:1, ease:Power2.easeIn}, 0);
		// if (body && body.classList.contains('js-mobile')) this.enterTl.set(logo, {width:window.innerWidth-116, backgroundColor:'#000000'}, 0);
		// this.enterTl.set(hamburger, {backgroundColor:'#000000'}, 0);

	}

	_leaveStyle(callback) {

		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});

	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');

		this.body = document.querySelector('body');

		PrintApi.getOneForSale(this.props.params.token)
		PrintApi.getForSale();
		PrintStore.addChangeListener(this.onStoreChange);
		CartStore.addChangeListener(this.onStoreChange);

		document.addEventListener('mousemove', this.onMousemove);
		document.addEventListener('touchstart', this.onTouchstart);
		document.addEventListener('touchmove', this.onTouchmove);
		document.addEventListener('touchend', this.onTouchend);
	}

	componentDidUpdate(nextProps, nextState) {

		if (nextState.cartCount !== this.state.cartCount && nextState.cartCount < 3) {
			this.setState({
				error: undefined
			});
		}
	}

	componentWillUnmount() {

		PrintStore.removeChangeListener(this.onStoreChange);
		CartStore.removeChangeListener(this.onStoreChange);
		PrintActions.receive(null);

		document.removeEventListener('mousemove', this.onMousemove);
		document.removeEventListener('touchstart', this.onTouchstart);
		document.removeEventListener('touchmove', this.onTouchmove);
		document.removeEventListener('touchend', this.onTouchend);
	}

	render() {

		let {print, prints, next, prev} = this.state;
		let links = this.createNextPreviousLinks(next, prev);

		return (
			<div className='page page--print' ref='view'>
				{this.createSeoComponent(print)}
				<div className='submenu'><Link to='/shop?open=true' className='button'>Back to shop</Link></div>
				<div>
					<div className='print__nav'>
						{links.prev}
						{links.next}
					</div>
					{this.createPrintElement(print)}
					{this.createBigPrintElement(print)}
				</div>
				{this.createMobilePrintElement(print)}
				<Cart />
			</div>
		);
	}

	raf() {

		if (this.body.classList.contains('js-mobile') && this.scrollRaf) {
			Utils.clearRaf(this.scrollRaf);
		} else {
			if (this.scrollIndex % 3) this.scrollOk = true
			else this.scrollOk = true
			this.scrollIndex++

			if (this.scrollOk) {
				this.handleScroll()
			}

			this.scrollRaf = raf(this.raf);
		}

	}

	handleScroll() {

		let el = document.querySelector('.bigprint__image');
		if (el) {
			this.printY += (((this.cursorY / window.innerHeight) * (el.offsetHeight - window.innerHeight)) - this.printY) * 0.1;
			let top = -this.printY;
			el.style[this.transform] = 'translate3d(0, ' + top + 'px, 0)';
		}

	}

	getValidCombinations(print, cartItems) {
		let validCombinations = [];

		const cartCombinations = _.pluck(_.filter(cartItems, { 'token': print.token }), 'serial');

		_(print.combinations).forEach((value, index) => {
			if (_.indexOf(cartCombinations, index+1) > -1) validCombinations[index] = false;
			else if (_.indexOf(print.serials_blocked, index+1) > -1) validCombinations[index] = false;
			else if (_.indexOf(print.serials_solded, index+1) > -1) validCombinations[index] = false;
			else validCombinations[index] = value;
		}).value();

		return validCombinations;

	}

	selectCombination(combo) {
		if (!combo) {
			return;
		}

		this.toggleList();
		this.setState({
			selectedCombination: combo
		});
	}

	getDefaultCombination(print) {
		if (!print || !print.combinations) {
			return null;
		}

		let combos = print.combinations;

		if (combos.length) {

			//let defaultCombo = combos.reduce((result, combo) => {
			//	if (result) {
			//		return result;
			//	}
			//	return combo.stock > 0 ? combo : null;
			//}, null);

			//return defaultCombo || combos[0];
			return combos[0];
		}

		return null;
	}

	addToCart(e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}

		let {print, selectedCombination} = this.state;

		CartActions.addToCart({
			product: print,
			combination: selectedCombination,
			quantity: 1
		});

		CartActions.updateCartEnabled(true, true);
	}

	toggleList(e) {
		e && e.preventDefault();

		if (!document.querySelector('body').classList.contains('js-mobile')) {
			// document.querySelectorAll('.print__serial-list')[0].classList.toggle('enabled');
			_(document.querySelectorAll('.print__serial-list')).forEach((el) => {
				el.classList.toggle('enabled');
			}).value();
		}
	}

	loadPrint() {

		let print = this.state.print;

		if (!print) {
			return;
		}

		return new Promise((resolve) => {
			let image = new Image();

			image.onload = () => resolve(image);
			image.src = print.image;
		})

		.then((image) => {
			let orientation = image.height >= image.width * 1.2 ? 'portrait' : 'landscape';

			this.setState({
				loadedPrint: (
					<div className='print__left'>
						<div className={'print__image print__image--'+orientation}>
							<img className='print__file' src={print.image} alt={print.title} onClick={this.zoomIn}></img>
						</div>
					</div>
				),
			});
		})
	}

	onBigImageLoaded(e) {
		this.setState({
			bigImageShowed: true
		}, () => {
			this.raf()
		});
	}

	zoomIn() {
		document.querySelector('body').classList.add('body--hidden');
		document.querySelector('.print__mobile').classList.add('print__mobile--hidden');
		document.querySelector('.bigprint').classList.remove('bigprint--hidden');

		let {print} = this.state;

		if (!this.bigprintLoaded) {
			this.bigprintLoaded = true;
			let file = new Image();
			file.onload = () => this.onBigImageLoaded();
			file.src = print.image;
		}
	}

	zoomOut() {
		document.querySelector('body').classList.remove('body--hidden');
		document.querySelector('.print__mobile').classList.remove('print__mobile--hidden');
		document.querySelector('.bigprint').classList.add('bigprint--hidden');
	}

	onMousemove(e) {
		this.cursorY = e.clientY;
	}

	onTouchstart(e) {
		this.startX = e.changedTouches[0].clientX;
	}

	onTouchmove(e) {
		this.deltaX = e.changedTouches[0].clientX - this.startX;
	}

	onTouchend(e) {

		if (this.deltaX > 100) {
			this.context.router.transitionTo('/shop/'+this.state.print.prev);
			// this.router.transitionTo('/shop/'+this.state.print.prev);
		}

		if (this.deltaX < -100) {
			this.context.router.transitionTo('/shop/'+this.state.print.next);
			// this.router.transitionTo('/shop/'+this.state.print.next);
		}

		this.deltaX = 0;

	}

	onStoreChange() {
		const print = PrintStore.getOne();
		const prints = PrintStore.getForSale(); 

		let {selectedCombination} = this.state;

		if (print && !selectedCombination) {
			selectedCombination = this.getDefaultCombination(print);
		}

		this.setState({
			print: print,
			prints: prints,
			next: this.getNextPrint(print, prints),
			prev: this.getPreviousPrint(print, prints),
			cartItems: CartStore.getCartItems(),
			cartCount: CartStore.getCartCount(),
			selectedCombination: selectedCombination,
		});

		this.loadPrint();
	}

	/**
	 * Return the print in the prints series at the given relative offset
	 * (in relation to current). Return null if not found.
	 * @see #getNextPrint()
	 * @see #getPreviousPrint()
	 * @param {Object} current - a print payload
	 * @param {Number} reloffset - relative offset
	 * @return {Object|null}
	 */
	getPrintAtRelativeOffset(current, prints, reloffset) {
		if (current && prints && prints.length) {
			let finder = p => p.id === current.id;
			let index = _.findIndex(prints, finder) + reloffset;

			if (prints[index]) {
				return prints[index];
			}
		}

		return null;
	}

	/**
	 * Given a print payload, figure out the "next" print in the series.
	 * @param {Object} current - a print payload
	 * @param {Array} prints - all prints
	 * @return {Object|null}
	 */
	getNextPrint(current, prints) {
		return this.getPrintAtRelativeOffset(current, prints, 1);
	}

	/**
	 * Given a print payload, figure out the "previous" print in the series.
	 * @param {Object} current - a print payload
	 * @param {Array} prints - all prints
	 * @return {Object|null}
	 */
	getPreviousPrint(current, prints) {
		return this.getPrintAtRelativeOffset(current, prints, -1);
	}

	/**
	 * @param {Object} print - print payload
	 * @param {String} className
	 * @param {String} arrowClass
	 * @return {react-router:Link}
	 */
	createPrintLink(print, className, arrowClass) {
		if (!print) {
			return null;
		}

		let language = AppStore.Lang();

		return (
			<Link to={`/${language}/shop/${print.id}`} className={className}>
				<div className={`arrow ${arrowClass}`}></div>
			</Link>
		);
	}

	/**
	 * @param {Object} next - print payload
	 * @param {Object} prev - print payload
	 * @return {Object} - a dictionary that contains React.Elements
	 */
	createNextPreviousLinks(next, prev) {
		return {
			next: this.createPrintLink(next, 'print__next', 'arrow--right'),
			prev: this.createPrintLink(prev, 'print__prev', 'arrow--left'),
		};
	}

	/**
	 * @param {Object} print - print payload
	 * @return {react:Element}
	 */
	createSeoComponent(print) {
		if (!print) {
			return null;
		}

		let description = [
			`Buy the limited edition "${print.name}"`,
			`origin print by ${print.manufacturer}`,
		];

		let seo = {
			title: print.name,
			description: description.join(' '),
			url: `${config.siteurl}/shop/${print.id}`,
			image: print.image,
		};

		return <Seo seo={seo} />
	}

	/**
	 * @param {Object} print - print payload
	 * @param {Object} combo - combination payload
	 * @param mixed key
	 * @return {react:Element}
	 */
	createCombinationElement(print, combo, key=null) {
		//let enabled = combo.stock > 0;
		let enabled = true;

		if (enabled) {
			return (
				<li className='print__serial' onClick={() => this.selectCombination(combo)} key={key||combo.id}>{combo.name}</li>
			);
		}

		return (<li className='print__serial print__serial--disabled' key={key||combo.id}>{combo.name}</li>)
	}

	/**
	 * @param {Object} print - print payload
	 * @return {react:Element}
	 */
	createCombinationListElement(print) {
		let combos = print.combinations || [];

		return (
			<ul className='print__serial-list'>
				{combos.map((combo, i) => {
					return this.createCombinationElement(print, combo, i);
				})}
			</ul>
		);
	}

	/**
	 * @param {Object} print - a print payload
	 * @return {react:Element}
	 */
	createPrintElement(print) {
		if (!print) {
			return null;
		}

		let {loadedPrint, selectedCombination: combo} = this.state;

		return (
			<div className='print'>
				{loadedPrint}
				<div className='print__infos'>
					<h3 className='print__artist text'>{print.manufacturer}</h3>
					<h3 className='print__location text'>{print.name}</h3>
					<div className='print__price text text--small'>{print.price}€</div>
					<p className='print__desc text text--small'>{print.description}</p>
					<div className='print__serials'>
						{(() => {

							//if (!print.forsale) {
							//	return (<div className='text'>Out of stock</div>);
							//}

							return (
								<div>
									<div className='print__serial-wrapper'>
										<div className='print__serial-opt text'>{translate('choose_edition')}</div>
										<div className='print__select text'>
											{() => {
												if (combo) {
											    return <div className='print__serial--selected' onClick={this.toggleList}>{combo.name}</div>
												}
												return null;
											}()}
											{this.createCombinationListElement(print)}
										</div>
									</div>
									<div className='print__buy-wrapper'>
										<a href='#' className='print__buy button' onClick={this.addToCart}>{translate('add_to_cart')}</a>
										{(this.state.error) ? (<div className='text print__buy-error'>{this.state.error}</div>) : null}
									</div>
								</div>
							);

						})()}
					</div>
				</div>
			</div>
		);
	}

	/**
	 * @param {Object} print
	 * @return {react:Element}
	 */
	createMobilePrintElement(print) {
		if (!print) {
			return null;
		}

		let combos = print.combinations;

		return (
			<div className='print__mobile'>
				{(() => {

					if (combos && combos.length > 0 && this.state.selectedCombination) {
						return (
							<div>
								<div className='print__serial-wrapper' onClick={this.toggleList}>
									<div className='print__serial-opt text'>{translate('choose_edition')}</div>
									<div className='print__select text'>
										<div className='print__serial--selected'>{this.state.selectedCombination.name}</div>
										{this.createCombinationListElement(print)}
									</div>
								</div>
								<a href='#' className='print__buy button' onClick={this.addToCart}>{translate('add_to_cart')} ({this.state.cartCount})</a>
							</div>
						);
					} 

					return (
						<div className='text'>Out of stock</div>
					);
				}.bind(this))()}
			</div>
		);
	}

	/**
	 * @param {Object} print
	 * @return {react:Element}
	 */
	createBigPrintElement(print) {
		if (!print) {
			return null;
		}

		let bigPrintClass = (this.state.bigImageShowed) ? '' : 'bigprint--hidden';

		return (
			<div className={'bigprint ' + bigPrintClass}>
				<img className='bigprint__image' src={print.image} alt={print.title} onClick={this.zoomOut}></img>
			</div>
		);
	}

}

// vim: ts=2 sts=2 sw=2 noet
