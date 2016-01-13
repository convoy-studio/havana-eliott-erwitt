import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import AppStore from '../../stores/appStore';
import Utils from '../../utils/utils';
import news from '../../../data/news';
let raf = Utils.raf();
let offset = require('../../utils/offset');
let config = require('../../config');

export default class News extends ComponentTransition {
	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');
	}

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
			isMobile: false
		};

		// binded
		this.raf = this.raf.bind(this);

		this.eShow = [];
		this.sTop = 0;
		this.cTop = 0;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = Utils.getSupportedPropertyName('transform');
		this.onImageLoaded = this.onImageLoaded.bind(this)

	}

	componentDidMount() {

		super.componentDidMount();

		if(typeof document !== 'undefined') {
			this.body = document.querySelector('body');
			this.page = document.querySelector('.page--news');

			this.news = document.querySelector('.news');

			this.newsDates = document.getElementsByClassName('news__date')
			this.newsContents = document.getElementsByClassName('news__content')

			// this.page.style.height = this.news.offsetHeight + 'px';

		}

		var imgs = document.getElementsByTagName("img");
		for (var i = 0; i < imgs.length; i++) {
			var img = imgs[i]
			var image = new Image()
			image.onload = this.onImageLoaded
			image.src = img.src
		};

		document.querySelector('.page--news').style.height = this.news.offsetHeight + 'px'

		this.resizeTitles()

		this.raf();
		// this.resize();

	}

	onImageLoaded() {
		document.querySelector('.page--news').style.height = this.news.offsetHeight + 'px'
	}

	resizeTitles() {
		for (var i = 0; i < this.newsDates.length; i++) {
			var date = this.newsDates[i]
			var content = this.newsContents[i]
			date.style.height = content.clientHeight + 'px'
			// console.log(date, content, content.clientHeight)
		};
	}

	render() {

		let seo = {
			title: 'News | Elliott Erwitt Havana Club 7 Fellowship',
			description: 'Find out the latest news about the Fellowship documentary photography project',
			url: config.siteurl + '/news',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		let newsItems = news.map((item, index)=>{
			// var imageDiv = (item.image != undefined) ? <img src={"assets/images/news/" + item.image}/> : ''
			var images = item.images.map((image, imgIndex)=>{
				return(
					<img key={imgIndex} src={"assets/images/news/" + image}/>
				)
			})

			if (typeof document !== 'undefined' && document.querySelector('body').classList.contains('js-mobile')) { return (
				<article key={index} className='news__item'>
					<div className="top-container">

						<div className='news__date title'><p dangerouslySetInnerHTML={{__html: item.date}}></p></div>
						<div className='news__content text'>{item.content}</div>
					</div>
					<div className="news_images_container">{images}</div>
				</article>
			)} else if (index % 2 === 0) { return (
				<article key={index} className='news__item news__item--right'>
					<div className="top-container">
						<div className='news__content text'>{item.content}</div>
						<div className='news__date title'><p dangerouslySetInnerHTML={{__html: item.date}}></p></div>
					</div>
					<div className="news_images_container">{images}</div>
				</article>
			)} else { return (
				<article key={index} className='news__item news__item--left'>
					<div className="top-container">
						<div className='news__date title'><p dangerouslySetInnerHTML={{__html: item.date}}></p></div>
						<div className='news__content text'>{item.content}</div>
					</div>
					<div className="news_images_container">{images}</div>
				</article>
			)}
		});

		return (
			<div className='page page--news' ref='view'>
				<Seo seo={seo} />
				{(() => {
					if (newsItems.length > 0) { return (
						<section className='news'>{newsItems}</section>
					)} else { return (
						<section className='news news--empty'>
							<p className='text text--center news__message'>Watch this space for news, please subscribe to our <Link className='underline' to='/newsletter'>Fellowship News</Link> to be notified</p>
						</section>
					)}
				}.bind(this))()}
			</div>
		);

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
		this.cTop += .1 * (this.sTop - this.cTop);
		e = -this.cTop;

		if (this.news) {
			this.news.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';
		}

		_(document.querySelectorAll('.news__item')).forEach((el, index) => {
			this.lTop = offset(el).top;
			if (!this.eShow[index]) {
				this.eShow[index] = false;
			}

			// in viewport
			if (this.lTop - this.vh < 0 && !this.eShow[index]) {
				this.eShow[index] = true;
				TweenMax.to(el, 0.6, {y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random()*0.2});
			}

			// off viewport
			if (this.lTop - this.vh > 0 && this.eShow[index]) {
				this.eShow[index] = false;
				TweenMax.set(el, {y: 100, opacity: 0});
			}
		}).value();

	}

	resize() {

		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()

		if (windowW < 958) {
			if (this.scrollRaf) {
				document.querySelector('.page--news').style.height = 'auto'
				this.setState({
					isMobile: true
				});
				window.cancelAnimationFrame(this.scrollRaf)
				this.scrollRaf = null;
			}
		} else {
			if (!this.scrollRaf) {
				if (this.fellowship) {
					document.querySelector('.page--news').style.height = this.news.offsetHeight + 'px'
				}
				this.setState({
					isMobile: false
				});
				this.raf()
			}
		}

	}

}
