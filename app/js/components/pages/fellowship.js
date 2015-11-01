import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import AppStore from '../../stores/appStore';
import Utils from '../../utils/utils';
import offset from '../../utils/offset';
import YouTube from 'react-youtube';
let raf = Utils.raf();
let config = require('../../config');

export default class Fellowship extends ComponentTransition {

	componentWillMount() {

		super.componentWillMount();
		
		this.vw = 0;
		this.vh = 0;
		if(typeof window !== 'undefined') {
			this.vw = window.innerWidth;
			this.vh = window.innerHeight;
		}

		// binded
		this.raf = this.raf.bind(this);
		this.showInterview = this.showInterview.bind(this);
		this.hideInterview = this.hideInterview.bind(this);
		this.onImageLoaded = this.onImageLoaded.bind(this);
		this.handleVideoReady = this.handleVideoReady.bind(this);


		// const
		this.PARALLAX_MARGE = 30;
		this.PARALLAX_DURATION = this.vh;
		
		// vars
		this.eShow = [];
		this.speed = .2;
		this.nImageLoaded = 0;
		this.sTop = 0;
		this.cTop = 0;
		this.eTop = 0;
		this.videoPlayed = false;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = Utils.getSupportedPropertyName('transform');

	}

	componentDidMount() {

		if(typeof document !== 'undefined') {
			this.page = document.querySelector('.page--fellowship');
			this.fellowship = document.querySelector('.fellowship');
			this.overlay = document.querySelector('.bg-video__overlay');
			this.video = document.querySelector('.youtube-wrapper');
			this.back = document.querySelector('.fellowship__back');
			this.bg = document.querySelector('.fellowship__bg');
			this.images = document.querySelectorAll('.fellowship img');
			this.buttonEe = document.querySelector('.button--ee');
			this.jsReveal = document.querySelectorAll('.js-reveal');

			this.page.style.height = this.fellowship.offsetHeight + 'px';
		}

		this.resize();
		this.loadImages();
		this.raf();

	}

	componentWillUnmount() {

		if(typeof window !== 'undefined') {
			window.cancelAnimationFrame(this.scrollRaf);
		}

	}

	render(){

		let seo = {
			title: 'Fellowship | Elliott Erwitt Havana Club 7 Fellowship',
			description: "The fellowship will allow aspiring photographers to follow Elliott's footsteps capturing the human condition through documentary photography in Cuba.",
			url: config.siteurl + '/fellowship',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		const opts = {
			height: AppStore.Window.h - 206,
			width: (AppStore.Window.h - 206) * 16 / 9,
			playerVars: { // https://developers.google.com/youtube/player_parameters 
				autoplay: 0,
				showinfo: 0
			}
		};

		return (
			<div className='page page--fellowship' ref='view'>
				<Seo seo={seo} />
				<div className='fellowship__submenu submenu'><Link to='/friends-of-fellowship' className='button'>Friends of the fellowship</Link></div>

				<div className='bg-video fellowship__video'>
					<div className='youtube-wrapper'>
						<YouTube
							className='youtube-video'
							url={'https://youtu.be/KcjK36YKLqY'}
							opts={opts}
							onReady={this.handleVideoReady}
						/>
					</div>
					<img className='fellowship__bg' src='/static/img/fellowship-mobile.jpg'/>
					<div className='bg-video__overlay'></div>
				</div>
				
				<div className='fellowship__back button' onClick={this.hideInterview}>Back to fellowship page</div>

				<div className='fellowship'>
					<div className='fellowship__intro'>
						<h2 className='title js-reveal'>Why a fellowship and Cuba?</h2>
						<p className='paragraph paragraph--2 text js-reveal'>In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.<br/>Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again after 51 years – this time to initiate the fellowship with Havana Club 7. A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century. Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.</p>
						<div className='fellowship__watch button button--margin js-reveal' onClick={this.showInterview}>Watch Elliott Erwitt interview</div>
						<h2 className='title js-reveal'>How will the fellowship work?</h2>
						<p className='paragraph paragraph--2 text js-reveal'>In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy. In addition to the proceeds from print sales Havana Club 7 will fund a similar amount to give more photographers the chance to tell the story of Cuba.<br/>The following fellowship photographers will be selected by a committee headed by Elliott Erwitt comprising of Cuban and international photography professionals ensuring the next fellow will continue the legacy of cuba and the human condition in Cuba through documentary photography and give us their own vision.</p>
					</div>
					<div className='fellowship__biography'>
						<h2 className='title js-reveal'>Elliott Erwitt biography</h2>
						<div className='row'>
							<div className='column'>
								<img className='fellowship__elliott js-reveal' src='/static/img/elliott-erwitt.jpg'/>
								<a className='button button--margin button--ee js-reveal' href='http://www.elliotterwitt.com' target='_blank'>Elliott Erwitt official website</a>
							</div>
							<div className='column'>
								<p className='paragraph text js-reveal'>Elliott Erwitt is one of the world’s most popular and admired photographers. A visual poet and humorist of everyday life, he has created some of the most memorable images of our time, from his observations of daily life at street level, to portraits of the iconic personalities including Marilyn Monroe on the set of the film The Misfits and Truman Capote’s epic 1966 Black and White Ball in New York City. He has photographed Khrushchev and Nixon arguing in Moscow, Fidel Castro and Che Guevara in Havana and President JFK in the Oval office.</p>
								<p className='paragraph text js-reveal'>Born in Paris in 1928 to Russian parents, Erwitt moved to the US with his family in 1939 and it was there that he met Edward Steichen and Roy Stryker. Recruited to Magnum Photos by Robert Capa in 1953 Erwitt has been a member of the prestigious agency ever since and has served several terms as its president.</p>
								<p className='paragraph text js-reveal'>To date Erwitt has produced more than 25 photography books including Eastern Europe (1965), The Private Experience (1974), Personal Exposures (1988), To the Dogs (1992), and Personal Best (2010). His photographs have been featured in solo shows all over the world, including at the ICP and The Museum of Modern Art, New York; The Art Institute of Chicago; The Barbican, London, and The Reina Sofia Museum, Madrid. Erwitt lives and works in New York City and likes children and dogs.</p>
							</div>
						</div>
						<Link to='/photography/elliott_erwitt' className='fellowship__discover button js-reveal'>Discover his project</Link>
					</div>
				</div>

				<div className='fellowship__menu'>
					<div className='fellowship__item button' onClick={this.showInterview}>Elliott Erwitt interview</div>
					<Link to='/photography/elliott_erwitt' className='fellowship__item button'>Discover his project</Link>
				</div>
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

		if (this.fellowship) {
			this.fellowship.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';
		}

		_(this.jsReveal).forEach((el, index) => {
			this.lTop = offset(el).top;
			
			if (!this.eShow[index]) {
				this.eShow[index] = false;
			}

			// in viewport
			if (this.lTop - window.innerHeight < 0 && !this.eShow[index]) {
				this.eShow[index] = true;
				TweenMax.to(el, 1.2, {y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random()*0.2});
			}
			
			// off viewport
			if (this.lTop - window.innerHeight > 0 && this.eShow[index]) {
				this.eShow[index] = false;
				TweenMax.set(el, {y: 70, opacity: 0});
			}

		}).value();

	}

	loadImages() {

		let file;
		this.max = _.size(this.images);

		_(this.images).forEach((img, index) => {
			file = new Image();
			file.onload = this.onImageLoaded;
			file.src = img.src;
		}.bind(this)).value();

	}

	onImageLoaded(e) {

		this.nImageLoaded++;

		if (this.nImageLoaded >= this.max) {
			this.page.style.height = this.fellowship.offsetHeight + 'px';
		}

	}

	showInterview() {

		this.player.playVideo();
		this.fellowship.classList.add('fellowship--hidden');
		this.overlay.classList.add('bg-video__overlay--hidden');
		this.bg.classList.add('fellowship__bg--hidden');
		this.back.classList.add('fellowship__back--visible');

	}

	hideInterview() {

		this.player.pauseVideo();
		this.fellowship.classList.remove('fellowship--hidden');
		this.overlay.classList.remove('bg-video__overlay--hidden');
		this.bg.classList.remove('fellowship__bg--hidden');
		this.back.classList.remove('fellowship__back--visible');

	}

	handleVideoReady(e) {
		this.player = e.target;
	}

	resize() {

		let windowW = AppStore.Window.w;
		let windowH = AppStore.Window.h;
		super.resize();

		// resize youtube video
		this.video.style.height = AppStore.Window.h - 206 + 'px';
		this.video.style.width = (AppStore.Window.h - 206) * 16 / 9 + 'px';

		if (windowW < 958) {
			if (document.querySelector('.page--fellowship')) document.querySelector('.page--fellowship').style.height = 'auto'
			window.cancelAnimationFrame(this.scrollRaf)
			if (this.scrollRaf) {
				this.scrollRaf = null;
			}
			this.buttonEe.style.display = 'none';

			// resize youtube video
			this.video.style.width = AppStore.Window.w + 'px';
			this.video.style.height = (AppStore.Window.w * 9 / 16) + 'px';
		} else {
			if (this.fellowship) {
				document.querySelector('.page--fellowship').style.height = this.fellowship.offsetHeight + 'px'
			}
			if (!this.scrollRaf) {
				this.raf()
			}
			this.buttonEe.style.display = 'block';

			// resize youtube video
			this.video.style.height = AppStore.Window.h - 206 + 'px';
			this.video.style.width = (AppStore.Window.h - 206) * 16 / 9 + 'px';
		}

	}

}