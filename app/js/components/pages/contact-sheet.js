import React from 'react';
import ComponentTransition from '../componentTransition';
import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import AppStore from '../../stores/appStore';
import PrintApi from '../../utils/printApi';
import PrintStore from '../../stores/printStore';
import Utils from '../../utils/utils';
import offset from '../../utils/offset';
let raf = Utils.raf();
let config = require('../../config');

export default class ContactSheet extends ComponentTransition {

	componentWillMount(){

		super.componentWillMount();
		
		// state
		this.state = { 
			prints: [],
			loadedPrints: []
		};

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.raf = this.raf.bind(this);
		
		// const
		this.OPACITY_MARGE = 30;
		this.OPACITY_DURATION = 300;
		
		// vars
		this.speed = 2;
		this.sTop = 0;
		this.cTop = 0;
		this.eShow = [];
		this.eTop = 0;
		this.loaded = false;
		this.nImageLoaded = 0;
		this.prints = [];
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = Utils.getSupportedPropertyName('transform');

	}

	componentDidMount() {
		
		PrintApi.getByArtist(this.props.params.slug);
		PrintStore.addChangeListener(this.onStoreChange);

		this.gallery = document.querySelector('.gallery');

		document.querySelector('.projects__intro').style.display = 'none';
		
		this.raf();

	}

	componentWillUnmount() {

		if(typeof window !== 'undefined') {
			window.cancelAnimationFrame(this.scrollRaf);
		}
		PrintStore.removeChangeListener(this.onStoreChange);

	}

	render() {

		let printIndex = -1;

		let seo = {
			title: 'Elliott Erwitt Havana Club 7 Fellowship | Contact sheet',
			description: 'Lorem ipsum dolor sit amet',
			url: config.siteurl + '/photography/' + this.props.params.slug + '/contact-sheet',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		return (
			<div className='subpage subpage--gallery' ref='subview'>
				<Seo seo={seo} />
				<div className='submenu'><Link to={'/photography/'+this.props.params.slug+'?open=true'} className='button'><span className='button__content'>Back to gallery</span></Link></div>
				<div className='gallery js-smooth'>
					{Object.keys(this.state.loadedPrints).reverse().map((year, i) => {
						return (
							<div key={year+'_'+i}>
								<div className='gallery__title title js-reveal'>Elliott Erwitt {year}</div>
								<div className='gallery__grid'>
									<div className='gallery__width'></div>
									{Object.keys(this.state.loadedPrints[year]).map((printId, j) => {
										let print = this.state.loadedPrints[year][printId]
										let src = '/static/prints/'+print.file+'_min.jpg'
										let random = Math.floor(Math.random()*6)
										printIndex++
										return (
											<Link to={'/photography/'+this.props.params.slug+'/gallery/'+printIndex} className={'js-reveal gallery__item gallery__item--'+print.size+' gallery__item--'+random} data-random={random} key={printId}><img className='gallery__image' src={src}></img></Link>
										)
									}.bind(this))}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		);
											// <div className={'js-reveal gallery__item gallery__item--'+print.size+' gallery__item--'+random} data-random={random} key={printId} onClick={this.zoomPrint.bind(this, printIndex)}><img className='gallery__image' src={src}></img></div>

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
		if (this.gallery) {
			this.gallery.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';
		}

		_(document.querySelectorAll('.js-reveal')).forEach((el, index) => {
			this.lTop = offset(el).top;
			if (!this.eShow[index]) {
				this.eShow[index] = false;
			}

			// in viewport
			if (this.lTop - window.innerHeight < 0 && !this.eShow[index]) {
				this.eShow[index] = true;
				TweenMax.to(el, 0.6, {y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random()*0.2});
			}
			
			// off viewport
			if (this.lTop - window.innerHeight > 0 && this.eShow[index]) {
				this.eShow[index] = false;
				TweenMax.set(el, {y: 100, opacity: 0});
			}

		}).value();

	}

	componentDidUpdate() {

		let file;
		this.max = _.size(this.state.prints);
		this.printsDate = {};

		if (this.max > 0 && !this.loaded) {
			this.loaded = true;
			_(this.state.prints).forEach((print, index) => {
				if (!this.printsDate[print.year]) this.printsDate[print.year] = [];
				this.printsDate[print.year].push(print);

				file = new Image();
				file.onload = this.onImageLoaded.bind(this, print);
				file.src = '/static/prints/'+print.file+'_min.jpg';
			}.bind(this)).value();
		}
	}

	onImageLoaded(print, e) {

		this.nImageLoaded++;

		let path = e.explicitOriginalTarget || e.target || e.path[0];
		if (path.height >= path.width*1.2) print.size = 'small';
		else print.size = 'large';
		
		if (this.nImageLoaded >= this.max) {
			this.setState({
				'loadedPrints': this.printsDate
			}, () => {
				// hack
				setTimeout(()=>{
					document.querySelector('.subpage--gallery').style.height = (this.gallery.offsetHeight-100) + 'px';
				}, 300);
			});
		}

	}

	zoomPrint(id) {
		
		// PrintActions.setPrintZoom(id);

		// if(typeof window !== 'undefined') {
		// 	window.cancelAnimationFrame(this.scrollRaf);
		// 	window.location.href = '#/photography/'+this.props.idSection;
		// }

	}

	resize() {

		let windowW = AppStore.Window.w;
		let windowH = AppStore.Window.h;
		super.resize();

		if (this.body && this.body.classList.contains('js-mobile')) { 
			if (this.scrollRaf) {
				document.querySelector('.subpage--gallery').style.height = 'auto'
				this.setState({
					isMobile: true
				});
				_(document.querySelectorAll('.gallery__item')).forEach((el) => {
					el.style.height = document.querySelectorAll('.gallery__image')[0].offsetHeight
				}).value()
				window.cancelAnimationFrame(this.scrollRaf)
				this.scrollRaf = null;
			}
		} else {
			if (!this.scrollRaf) {
				if (this.fellowship) {
					document.querySelector('.subpage--gallery').style.height = this.gallery.offsetHeight + 'px'
				}
				this.setState({
					isMobile: false
				});
				this.raf()
			}
		}

	}

	onStoreChange() {

		this.setState({
			prints: PrintStore.getArtistPrints()
		});

	}

}