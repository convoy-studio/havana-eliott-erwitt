import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
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
			selectedSerial: undefined,
			loadedPrint: undefined,
			cartItems: CartStore.getCartItems(),
			cartCount: 0,
			validSerials: [],
			bigImageShowed: false,
			techDesc: ''
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
		this.validSerials = [];
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
		let hamburger = document.querySelector('.hamburger');
		let body = document.querySelector('body');

		logo.style.display = 'table';
		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn}, 0);
		this.enterTl.to(logo, 0.3, {opacity:1, ease:Power2.easeIn}, 0);
		if (body && body.classList.contains('js-mobile')) this.enterTl.set(logo, {width:window.innerWidth-116, backgroundColor:'#000000'}, 0);
		this.enterTl.set(hamburger, {backgroundColor:'#000000'}, 0);
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
	
	}

	componentDidMount() {

		super.componentDidMount();

		this.body = document.querySelector('body');

		PrintApi.getOneForsale(this.props.params.token);
		PrintStore.addChangeListener(this.onStoreChange);
		CartStore.addChangeListener(this.onStoreChange);

		document.addEventListener('mousemove', this.onMousemove);
		document.addEventListener('touchstart', this.onTouchstart);
		document.addEventListener('touchmove', this.onTouchmove);
		document.addEventListener('touchend', this.onTouchend);

	}

	componentDidUpdate() {

		let file;
		if (!this.loaded) {
			this.loadImage();
		}

	}

	componentWillUnmount() {

		super.componentWillUnmount();

		PrintStore.removeChangeListener(this.onStoreChange);
		CartStore.removeChangeListener(this.onStoreChange);

		document.removeEventListener('mousemove', this.onMousemove);
		document.removeEventListener('touchstart', this.onTouchstart);
		document.removeEventListener('touchmove', this.onTouchmove);
		document.removeEventListener('touchend', this.onTouchend);

	}

	render() {

		let title, city, country, year, price, desc, serials, artist, file, bigfile, alt, details, prev, next;

		if (this.state.print) {
			this.validSerials = this.getValidSerials();
			this.selectedSerial = this.state.selectedSerial || this.getFirstSerial();

			title = this.state.print.title;
			city = this.state.print.city;
			country = this.state.print.country;
			year = this.state.print.year;
			price = this.state.print.price;
			desc = this.state.print.desc;
			serials = this.state.print.serials;
			artist = this.state.print.project.artist;
			file = '/static/prints/'+this.state.print.file+'_medium.jpg';
			bigfile = '/static/prints/'+this.state.print.file+'.jpg';
			alt = this.state.print.alt;
			prev = this.state.print.prev;
			next = this.state.print.next;
		}

		if (title) {
			details = title+'. '+city+'. '+country+'. '+year;
		} else {
			details = city+'. '+country+'. '+year;
		}
		
		let bigPrintClass = (this.state.bigImageShowed) ? '' : 'bigprint--hidden';

		let seoTitle;
		if (title) {
			seoTitle = 'Elliott Erwitt Print | ' + title + ' | ' + country + ' ' + year;
		} else {
			seoTitle = 'Elliott Erwitt Print | ' + city + ' | ' + country + ' ' + year;
		}

		let seoDesc;
		if (title) {
			seoDesc = 'Buy the limited edition "' + title + '" original print by ' + artist;
		} else {
			seoDesc = 'Buy the limited edition "' + city + '" original print by ' + artist;
		}

		let seo = {
			title: seoTitle,
			description: 'Buy the limited edition "' + title + '" original print by ' + artist,
			url: config.siteurl + '/shop/' + this.props.params.token,
			image: config.siteurl + file
		};

		return (
			<div className='page page--print' ref='view'>
				<Seo seo={seo} />
				<div className='submenu'><Link to='/shop?open=true' className='button'>Back to shop</Link></div>
				<div>
					<div className='print__nav'>
						<Link to={'/shop/'+prev} className='print__prev'><div className='arrow'></div></Link>
						<Link to={'/shop/'+next} className='print__next'><div className='arrow arrow--right'></div></Link>
					</div>
					<div className='print'>
						{this.state.loadedPrint}
						<div className='print__infos'>
							<h3 className='print__artist text'>{artist}</h3>
							<h3 className='print__location text'>{details}</h3>
							<div className='print__price text text--small'>{price}€</div>
							<p className='print__desc text text--small'>{this.state.techDesc}</p>
							<div className='print__serials'>
								{(() => {
									if (serials && serials.length > 0 && this.selectedSerial !== 0) { return (
										<div>
											<div className='print__serial-wrapper'>
												<div className='print__serial-opt text'>Choose edition</div>
												<div className='print__select text'>
													<div className='print__serial--selected' onClick={this.toggleList}>{this.selectedSerial}</div>
													<ul className='print__serial-list'>
														{Object.keys(this.validSerials).map((index) => {
															let enabled = this.validSerials[index]
															let serial = parseInt(index)+1
															// let classSelected = (serial === this.state.serial) ? 'print__serial--selected' : ''
															// let classEnabled = (enabled) ? 'print__serial--enabled' : ''
															if (enabled) {
																return (<li className='print__serial' onClick={this.selectSerial.bind(this, serial)} key={index}>{serial}</li>)
															} else {
																return (<li className='print__serial print__serial--disabled' key={index}>{serial}</li>)
															}
														})}
													</ul>
												</div>
											</div>
											<a href='#' className='print__buy button' onClick={this.addToCart}>Add to cart</a>
										</div>
									)} else { return (
										<div className='text'>Out of stock</div>
									)}
								}.bind(this))()}
							</div>
						</div>
					</div>
					<div className={'bigprint ' + bigPrintClass}>
						<img className='bigprint__image' src={bigfile} alt={alt} onClick={this.zoomOut}></img>
					</div>
				</div>
				<div className='print__mobile'>
					{(() => {
						if (serials && serials.length > 0 && this.selectedSerial !== 0) { return (
							<div>
								<div className='print__serial-wrapper' onClick={this.toggleListMobile}>
									<div className='print__serial-opt text'>Choose edition</div>
									<div className='print__select text'>
										<div className='print__serial--selected'>{this.selectedSerial}</div>
										<ul className='print__serial-list'>
											{Object.keys(this.validSerials).map((index) => {
												let enabled = this.validSerials[index]
												let serial = parseInt(index)+1
												// let classSelected = (serial === this.state.serial) ? 'print__serial--selected' : ''
												// let classEnabled = (enabled) ? 'print__serial--enabled' : ''
												if (enabled) {
													return (<li className='print__serial' onClick={this.selectSerial.bind(this, serial)} key={index}>{serial}</li>)
												} else {
													return (<li className='print__serial print__serial--disabled' key={index}>{serial}</li>)
												}
											})}
										</ul>
									</div>
								</div>
								<a href='#' className='print__buy button' onClick={this.addToCart}>Add to cart ({this.state.cartCount})</a>
							</div>
						)} else { return (
							<div className='text'>Out of stock</div>
						)}
					}.bind(this))()}
				</div>
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

	getValidSerials() {

		this.validSerials = [];
		this.cartSerials = _.pluck(_.filter(this.state.cartItems, { 'token': this.state.print.token }), 'serial');
		_(this.state.print.serials).forEach((value, index) => {
			if (_.indexOf(this.cartSerials, index+1) > -1) this.validSerials[index] = false;
			else this.validSerials[index] = value;
		}).value();

		return this.validSerials;

	}

	getFirstSerial() {

		return _.indexOf(this.validSerials, true) + 1;

	}

	selectSerial(serial, e) {

		this.toggleList();
		// document.querySelector('.serial--enabled').removeClass('serial--enabled');
		// document.querySelector(e.target).addClass('serial--enabled');
		this.setState({
			selectedSerial: serial
		});

	}

	addToCart(e) {

		e.stopPropagation();
		e.preventDefault();

		let update = {
			token: this.state.print.token,
			title: this.state.print.title,
			city: this.state.print.city,
			country: this.state.print.country,
			year: this.state.print.year,
			price: this.state.print.price,
			serial: this.state.selectedSerial,
			file: this.state.print.file,
			copies: this.state.print.copies,
			project: this.state.print.project
		};
		CartActions.addToCart(update);
		CartActions.updateCartEnabled(true, true);

		this.setState({
			selectedSerial: this.getFirstSerial()
		});

	}

	toggleList() {

		console.log('toggleList');
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

	// resize() {

	// 	let windowW = AppStore.Window.w
	// 	let windowH = AppStore.Window.h
	// 	super.resize()

	// 	// if (document.querySelector('body').classList.contains('js-mobile')) {
			
	// 	// }

	// }

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

		this.setState({
			print: PrintStore.getOne(),
			cartItems: CartStore.getCartItems(),
			cartCount: CartStore.getCartCount(),
			// selectedSerial: this.getFirstSerial()
		}, () => {
			this.setState({
				selectedSerial: this.getFirstSerial()
			});
		});

	}

}