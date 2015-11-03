import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import Utils from '../../utils/utils';
import Cursor from './cursor';
let _ = require('lodash');
let raf = Utils.raf();
let config = require('../../config');

export default class Gallery extends Component {

	componentWillMount() {

		// state
		this.state = {
			current: parseInt(this.props.current || 0),
			bigPrintsLoaded: false,
			isMobile: false,
			sizes: undefined,
			cursorState: 'hidden'
		};

		// vars
		this.largerImage = undefined;
		this.nPrintsLoaded = 0;
		this.nBigPrintsLoaded = 0;
		this.printsLoaded = false;
		this.bigPrintsLoaded = false;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = Utils.getSupportedPropertyName('transform');
		this.printY = 0;
		this.cursorY = 0;
		this.startX = 0;
		this.deltaX = 0;
		this.sizes = [];

		// binded
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.zoomIn = this.zoomIn.bind(this);
		this.zoomOut = this.zoomOut.bind(this);
		this.raf = this.raf.bind(this);
		this.onMousemove = this.onMousemove.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
		this.onTouchstart = this.onTouchstart.bind(this);
		this.onTouchmove = this.onTouchmove.bind(this);
		this.onTouchend = this.onTouchend.bind(this);
		this.onMouseenter = this.onMouseenter.bind(this);
		this.onMouseleave = this.onMouseleave.bind(this);
		this.facebookShare = this.facebookShare.bind(this);

	}

	componentDidMount() {

		this.body = document.querySelector('body');
		this.print = document.querySelector('.project__print');

		document.addEventListener('mousemove', this.onMousemove);
		document.addEventListener('keydown', this.onkeydown);
		document.addEventListener('touchstart', this.onTouchstart);
		document.addEventListener('touchmove', this.onTouchmove);
		document.addEventListener('touchend', this.onTouchend);
		this.print.addEventListener('mouseenter', this.onMouseenter);
		this.print.addEventListener('mouseleave', this.onMouseleave);
		
		let file;
		this.nPrints = _.size(this.props.prints);

		if (this.nPrints > 0 && !this.printsLoaded) {
			this.printsLoaded = true;
			_(this.props.prints).forEach((print, index) => {
				file = new Image();
				file.onload = this.onPrintLoaded.bind(this, index);
				file.src = '/static/prints/'+print.file+'_big.jpg';
			}.bind(this)).value();
		}

	}

	componentDidUpdate() {

		this.nPrints = _.size(this.props.prints);

	}

	componentWillUnmount() {

		document.removeEventListener('mousemove', this.onMousemove);
		document.removeEventListener('keydown', this.onkeydown);
		document.removeEventListener('touchstart', this.onTouchstart);
		document.removeEventListener('touchmove', this.onTouchmove);
		document.removeEventListener('touchend', this.onTouchend);

	}

	onPrintLoaded(index, e) {

		this.nPrintsLoaded++;

		let size, path = e.explicitOriginalTarget || e.target || e.path[0];
		if (path.height >= path.width*1.2) size = 'portrait';
		else size = 'landscape';

		this.sizes[index] = size;

		if (this.nPrintsLoaded >= this.nPrints) {
			document.querySelector('.project__loader').classList.add('project__loader--disabled');
			document.querySelector('.project__discover').classList.remove('project__discover--disabled');
			
			this.content = document.querySelector('.project__content');
			this.prints = document.querySelector('.project__prints');
			this.image = document.querySelector('.project__image');
			this.footer = document.querySelector('.project__footer');

			_(document.querySelectorAll('.project__image')).forEach((print) => {
				if (this.largerImage) {
					this.largerImage = (print.offsetWidth > this.largerImage.offsetWidth) ? print : this.largerImage;
				} else {
					this.largerImage = print;
				}
			}).value()

			// this.prints.style.width = this.largerImage.offsetWidth + 'px'
			this.footer.style.width = this.largerImage.offsetWidth + 'px';

			this.raf();

			this.setState({
				sizes: this.sizes
			});
		}
	}

	onBigPrintLoaded(e) {

		this.nBigPrintsLoaded++;

		if (this.nBigPrintsLoaded >= this.nPrints) {
			this.setState({
				bigPrintsLoaded: true
			});
		}

	}

	render() {

		let current = this.props.prints[this.state.current];
		let artist, title, city, country, year, story, forsale, url, details, desc = [];

		if (current) {
			title = current.title;
			city = current.city;
			country = current.country;
			year = current.year;
			story = current.desc;
			forsale = current.forsale;
			url = '/shop-temp';
			// url = '/shop/' + current.token;
		}

		if (title) details = title+'. '+city+'. '+country+'. '+year;
		else details = city+'. '+country+'. '+year;

		let slideshowClass = (this.props.show) ? '' : 'project__slideshow--hidden';
		let bigSlideshowClass = (this.state.bigPrintsLoaded) ? '' : 'project__bigslideshow--hidden';

		let prev = (this.state.current-1 < 0) ? this.nPrints-1 : this.state.current-1;
		let next = (this.state.current+1 >= this.nPrints) ? 0 : this.state.current+1;

		// SEO
		let image = config.siteurl + '/static/img/elliott-erwitt.jpg';
		if (_.size(this.props.prints) > 0) {
			image = config.siteurl + '/static/prints/' + this.props.prints[this.state.current].file + '.jpg';
		}

		this.seo = {
			title: 'Elliott Erwitt Havana Club 7 Fellowship | Gallery',
			description: details,
			url: config.siteurl + '/photography/' + this.props.project + '/gallery/' + this.state.current,
			image: image,
			twitter: 'Elliott%20Erwitt%20Havana%20Club%207%20Fellowship%20%7C%20Gallery'
		};
		let seoComponent;
		if (this.props.show) {
			seoComponent = (<Seo seo={this.seo} />);
		}

		// <div className="fb-share-button button project__social project__social--facebook" data-href="http://www.havana-fellowship.com/" data-layout="link">Facebook</div>
		return (
			<div>
				{seoComponent}
				<Cursor
					state={this.state.cursorState}
				/>
				<div className={'project__slideshow ' + slideshowClass}>
					<div className='project__contact submenu'><Link to={'/photography/'+this.props.project+'/contact-sheet'} className='button'>Contact sheet</Link></div>
					<div className='project__content'>
						<div className='project__prints'>
							{Object.keys(this.props.prints).map((id, index) => {
								let file = this.props.prints[id].file + '_big.jpg';
								let alt = this.props.prints[id].alt;
								let status = (index === this.state.current) ? 'project__print--current ' : '';
								let size;
								if (this.state.sizes) size = 'project__print--'+this.state.sizes[index];
								return (
									<div className={'project__print '+status+size} onClick={this.zoomIn} key={id}>
										<img className='project__image' src={'/static/prints/'+file} alt={alt}></img>
									</div>
								)
							})}
						</div>
						<div className='project__nav'>
							<div className='project__prev' onClick={this.prev}><div className='arrow'></div></div>
							<div className='project__next' onClick={this.next}><div className='arrow arrow--right'></div></div>
						</div>
					</div>
					<div className='project__footer'>
						<div className='project__section'>
							{(() => {
								if (forsale) return (
									<Link to={url} className='project__buy button'>Buy print</Link>
								)
							})()}
						</div>
						<div className='project__section project__infos'>
							{(() => {
								if (forsale) return (
									<h3 className='text'>{details}</h3>
								)
							})()}
						</div>
						<div className='project__section'>
							<div className='project__sharer'>
								<a href='#' className='project__share'>Share</a>
								<div className='project__socials'>
									<a className='button project__social project__social--facebook' href={"https://www.facebook.com/sharer/sharer.php?u="+this.seo.url} target="_blank">Facebook</a>
									<a className='twitter-share-button button project__social project__social--twitter' href={'https://twitter.com/intent/tweet?url='+this.seo.url+'&text='+this.seo.twitter}>Twitter</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={'project__bigslideshow ' + bigSlideshowClass}>
					<div className='project__bigcontent'>
						<div className='project__bigprints'>
							{Object.keys(this.props.prints).map((id, index) => {
								let file = this.props.prints[id].file + '_big.jpg';
								let alt = this.props.prints[id].alt;
								let status = (index === this.state.current) ? 'project__bigprint--current' : ''
								return (
									<div className={'project__bigprint '+status} onClick={this.zoomOut} key={id}>
										<img className='project__bigimage' src={'/static/prints/'+file} alt={alt}></img>
									</div>
								)
							})}
						</div>
						<div className='project__nav'>
							<div className='project__bigprev' onClick={this.prev}><div className='arrow'></div></div>
							<div className='project__bignext' onClick={this.next}><div className='arrow arrow--right'></div></div>
						</div>
					</div>
				</div>
			</div>
		);

	}

	raf() {

		if (this.body.classList.contains('js-mobile') && this.scrollRaf) {
			Utils.clearRaf(this.scrollRaf);
		} else {
			if (this.scrollIndex % 3) this.scrollOk = true;
			else this.scrollOk = true;
			this.scrollIndex++;

			if (this.scrollOk) {
				this.handleScroll();
			}

			this.scrollRaf = raf(this.raf);
		}

	}

	handleScroll() {

		this.content.style.width = this.largerImage.offsetWidth + 'px';
		this.footer.style.width = this.largerImage.offsetWidth + 'px';

		let el = document.querySelector('.project__bigprint--current .project__bigimage');
		if (el) {
			this.printY += (((this.cursorY / window.innerHeight) * (el.offsetHeight - window.innerHeight)) - this.printY) * 0.1;
			let top = -this.printY;
			el.style[this.transform] = 'translate3d(0, ' + top + 'px, 0)';
		}

	}

	prev() {

		this.setState({
			current: (this.state.current-1 < 0) ? this.nPrints-1 : this.state.current-1
		});

	}

	next() {

		this.setState({
			current: (this.state.current+1 >= this.nPrints) ? 0 : this.state.current+1
		});

	}

	zoomIn() {

		this.zoomed = true;

		document.querySelector('body').classList.add('body--hidden');
		document.querySelector('.project__bigslideshow').classList.remove('project__bigslideshow--hidden');

		this.nBigPrints = _.size(this.state.prints)
		if (this.nBigPrints > 0 && !this.bigPrintsLoaded) {
			this.bigPrintsLoaded = true;
			let file;
			_(this.state.prints).forEach((print, index) => {
				file = new Image();
				file.onload = this.onBigPrintLoaded.bind(this);
				file.src = '/static/prints/'+print.file+'_big.jpg';
			}.bind(this)).value();
		}

		this.setState({
			cursorState: 'less'
		});

	}

	zoomOut() {

		if (window.orientation === 0 || window.orientation === undefined) {
			this.zoomed = false;

			this.setState({
				cursorState: 'hidden'
			});

			document.querySelector('body').classList.remove('body--hidden');
			document.querySelector('.project__bigslideshow').classList.add('project__bigslideshow--hidden');
		}

	}

	onMousemove(e) {

		this.cursorY = e.clientY;

	}

	onkeydown(e) {

		if (this.props.show) {
			if (e.keyCode === 37) this.prev();
			if (e.keyCode === 39) this.next();
		}

	}

	onTouchstart(e) {

		if (e.touches.length < 2) {
			this.startX = e.changedTouches[0].clientX;
		}

	}

	onTouchmove(e) {

		if (e.touches.length < 2) {
			this.deltaX = e.changedTouches[0].clientX - this.startX;
		}	

	}

	onTouchend(e) {

		if (e.touches.length < 2) {
			if (this.deltaX > 100) {
				this.prev();
			}

			if (this.deltaX < -100) {
				this.next();
			}
		}	

		this.deltaX = 0;

	}

	facebookShare(e) {

		e.preventDefault();

		// window.FB.ui({
		// 	method: 'feed',
		// 	link: this.seo.url,
		// 	picture: this.seo.image,
		// 	caption: this.seo.title,
		// 	description: this.seo.description
		// });

		window.postToFeed(this.seo.title, this.seo.description, this.seo.url, this.seo.image);

	}

	onMouseenter() {

		this.setState({
			cursorState: 'more'
		});

	}

	onMouseleave() {
		
		if (!this.zoomed) {
			this.setState({
				cursorState: 'hidden'
			});
		}

	}

}
