import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import Router, { Link } from 'react-router';
import Cart from '../modules/cart';
import PrintStore from '../../stores/printStore';
import PrintApi from '../../utils/printApi';
import CartActions from '../../actions/cartActions';
import CartStore from '../../stores/cartStore';
import Utils from '../../utils/utils';
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
			validCombinations: [],
			bigImageShowed: false,
			techDesc: '',
			error: undefined
		};

		// binded
		this.toggleList = this.toggleList.bind(this);
		this.toggleListMobile = this.toggleListMobile.bind(this);
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

		PrintApi.getOneForsale(this.props.params.token);
		PrintStore.addChangeListener(this.onStoreChange);
		CartStore.addChangeListener(this.onStoreChange);

		document.addEventListener('mousemove', this.onMousemove);
		document.addEventListener('touchstart', this.onTouchstart);
		document.addEventListener('touchmove', this.onTouchmove);
		document.addEventListener('touchend', this.onTouchend);

	}

	componentDidUpdate(nextProps, nextState) {

		let file;
		if (!this.loaded) {
			this.loadImage();
		}

		if (nextState.cartCount !== this.state.cartCount && nextState.cartCount < 3) {
			this.setState({
				error: undefined
			});
		}

	}

	componentWillUnmount() {

		PrintStore.removeChangeListener(this.onStoreChange);
		CartStore.removeChangeListener(this.onStoreChange);

		document.removeEventListener('mousemove', this.onMousemove);
		document.removeEventListener('touchstart', this.onTouchstart);
		document.removeEventListener('touchmove', this.onTouchmove);
		document.removeEventListener('touchend', this.onTouchend);

	}

	render() {

		let {print, prints, next, prev} = this.state;
		let links = this.createPrintLinks(print, prints);
		let seoComponent  = this.createSeoComponent(print);

		return (
			<div className='page page--print' ref='view'>
				{seo}
				<div className='submenu'><Link to='/shop?open=true' className='button'>Back to shop</Link></div>
				<div>
					<div className='print__nav'>
						{links.prev}
						{links.next}
					</div>
					{this.createPrintElement(print)}
					<div className={'bigprint ' + bigPrintClass}>
						<img className='bigprint__image' src={print.image} alt={print.alt} onClick={this.zoomOut}></img>
					</div>
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
		_(print.serials).forEach((value, index) => {
			if (_.indexOf(cartCombinations, index+1) > -1) validCombinations[index] = false;
			else if (_.indexOf(print.serials_blocked, index+1) > -1) validCombinations[index] = false;
			else if (_.indexOf(print.serials_solded, index+1) > -1) validCombinations[index] = false;
			else validCombinations[index] = value;
		}).value();

		return validCombinations;

	}

	selectCombination(combo, e) {

		this.toggleList();
		this.setState({
			selectedCombination: combo
		});

	}

	addToCart(e) {

		e.stopPropagation();
		e.preventDefault();

		if (this.state.cartCount < 3) {
			let update = {
				token: this.state.print.token,
				title: this.state.print.title,
				city: this.state.print.city,
				country: this.state.print.country,
				year: this.state.print.year,
				price: this.state.print.price,
				serial: this.state.selectedCombination,
				file: this.state.print.file,
				copies: this.state.print.copies,
				project: this.state.print.project,
				logistic_id: this.state.print.logistic_id
			};
			CartActions.addToCart(update);
			CartActions.updateCartEnabled(true, true);
			PrintApi.blockCombination(update.token, update.serial);
		} else {
			this.setState({
				error: 'Your cart is full (max 3)'
			});
		}

	}

	toggleList() {
		if (!document.querySelector('body').classList.contains('js-mobile')) {
			// document.querySelectorAll('.print__serial-list')[0].classList.toggle('enabled');
			_(document.querySelectorAll('.print__serial-list')).forEach((el) => {
				el.classList.toggle('enabled');
			}).value();
		}

	}

	toggleListMobile() {

		if (document.querySelector('body').classList.contains('js-mobile')) {
			_(document.querySelectorAll('.print__serial-list')).forEach((el) => {
				el.classList.toggle('enabled');
			}).value();
		}

	}

	loadImage() {

		if (_.size(this.state.print) > 0) {
			let file = new Image();
			file.onload = this.onImageLoaded.bind(this);
			file.src = '/static/prints/'+this.state.print.file+'_medium.jpg';
		}

	}

	onImageLoaded(e) {

		let size, path = e.explicitOriginalTarget || e.target || e.path[0];
		if (path.height >= path.width*1.2) size = 'portrait';
		else size = 'landscape';
		let dim = '27.9 × 35.6 cm'; // gérer la conversion (11 × 14 inches)
		this.print = (
			<div className='print__left'>
				<div className={'print__image print__image--'+size}>
					<img className='print__file' src={'/static/prints/'+this.state.print.file+'_medium.jpg'} alt={this.state.print.alt} onClick={this.zoomIn}></img>
				</div>
			</div>
		);

		this.techDesc = (
			<div className='print__tech'>
				<p>Silver gelatin print measuring</p>
				<p>{dim}, unframed.</p>
				<p>Printed under the direct supervision of the artist.</p>
				<p>One of a signed, limited edition of {this.state.print.copies}.</p>
			</div>
		);

		// if (params.path[0].height >= params.path[0].width*1.2) {
		// 	this.print = <div className='print__left'><div className='print__image print__image--portrait'><img src={'/static/prints/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
		// } else {
		// 	this.print = <div className='print__left'><div className='print__image print__image--landscape'><img src={'/static/prints/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
		// }
		this.setState({
			'loadedPrint': this.print,
			'techDesc': this.techDesc
		});

		this.loaded = true;

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

		if (!this.bigprintLoaded) {
			this.bigprintLoaded = true;
			let file = new Image();
			file.onload = this.onBigImageLoaded.bind(this);
			file.src = '/static/prints/'+this.state.print.file+'.jpg';
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
		const prints = PrintStore.getForSal(); 
		const cartItems = CartStore.getCartItems();
		const validCombinations = this.getValidCombinations(print, cartItems);

		this.setState({
			print: print,
			prints: prints,
			next: this.getNextPrint(print, prints),
			prev: this.getPreviousPrint(print, prints),
			cartItems: cartItems,
			cartCount: CartStore.getCartCount(),
			validCombinations: this.getValidCombinations(print, cartItems),
			selectedCombination: _.indexOf(validCombinations, true) + 1
		});
	}

	/**
	 * Return the print in the prints series at the given relative offset
	 * (in relation to the current print). Return null if not found.
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
	 * @return {Object|null}
	 */
	getNextPrint(current, prints) {
		return this.getPrintAtRelativeOffset(current, prints, 1);
	}

	/**
	 * Given a print payload, figure out the "previous" print in the series.
	 * @param {Object} current - a print payload
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
		if (print) {
			return (
				<Link to={'/shop/'+print.id} className=className>
					<div className={`arrow ${arrowClass}`}></div>
				</Link>
			);
		}
		return null;
	}

	/**
	 * @param {Object} next - print payload
	 * @param {Object} prev - print payload
	 * @return {Object} - a dictionary that contains React.Elements
	 */
	createPrintLinks(next, prev) {
		return {
			next: this.createPrintLink(next, 'print__next', 'arrow--left'),
			prev: this.createPrintLink(prev, 'print__prev', 'arrow--right'),
		};
	}

	/**
	 * @param {Object} print - print payload
	 * @return {react:Element}
	 */
	createSeoComponent(print) {
		let description = [
			`Buy the limited edition "${print.name}"`,
			`origin print by ${print.manufacturer}`,
		];

		let props = {
			title: print.name,
			description: description.join(' '),
			url: `${config.siteurl}/shop/${print.id}`,
			image: print.image,
		};

		return <Seo ...props/>
	}

	/**
	 * @param {Object} print - print payload
	 * @param {Object} combo - combination payload
	 * @return {react:Element}
	 */
	createCombinationElement(print, combo) {
		let enabled = combo.stock > 0;

		if (enabled) {
			return (
				<li className='print__serial' onClick={() => this.selectCombination(combo)} key={combo.id}>{combo.name}</li>
			);
		}

		return (<li className='print__serial print__serial--disabled' key={combo.id}>{combo.name}</li>)
	}

	createCombinationList(print) {
		return (
			<ul className='print__serial-list'>
				{print.combinations.map((combo) => {
					return this.createCombinationElement(print, combo);
				})}
			</ul>
		);
	}

	/**
	 * @param {Object} print - a print payload
	 * @return {react:Element}
	 */
	createPrintElement(print) {
		return (
			<div className='print'>
				{this.state.loadedPrint}
				<div className='print__infos'>
					<h3 className='print__artist text'>{print.manufacturer}</h3>
					<h3 className='print__location text'>{print.name}</h3>
					<div className='print__price text text--small'>{print.price}€</div>
					<p className='print__desc text text--small'>{print.description}</p>
					<div className='print__serials'>
						{(() => {

							if (!print.forsale) {
								return (<div className='text'>Out of stock</div>);
							}

							return (
								<div>
									<div className='print__serial-wrapper'>
										<div className='print__serial-opt text'>Choose edition</div>
										<div className='print__select text'>
											<div className='print__serial--selected' onClick={this.toggleList}>{this.state.selectedCombination.name}</div>
											{this.createCombinationList(print)}
										</div>
									</div>
									<div className='print__buy-wrapper'>
										<a href='#' className='print__buy button' onClick={this.addToCart}>Add to cart</a>
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
		let combos = print.combinations;

		return (
			<div className='print__mobile'>
				{(() => {
					if (combos && combos.length > 0 && this.state.selectedCombination) {
						return (
							<div>
								<div className='print__serial-wrapper' onClick={this.toggleListMobile}>
									<div className='print__serial-opt text'>Choose edition</div>
									<div className='print__select text'>
										<div className='print__serial--selected'>{this.state.selectedCombination.name}</div>
										{this.createCombinationList(print)}
									</div>
								</div>
								<a href='#' className='print__buy button' onClick={this.addToCart}>Add to cart ({this.state.cartCount})</a>
							</div>
						);
					} 

					return (
						<div className='text'>Out of stock</div>
					}
				}.bind(this))()}
			</div>
		);
	}
}

// vim: ts=2 sts=2 sw=2 noet
