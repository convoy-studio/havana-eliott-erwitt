import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import AppStore from '../../stores/appStore';
import PrintApi from '../../utils/printApi';
import PrintStore from '../../stores/printStore';
import Utils from '../../utils/utils';
import offset from '../../utils/offset';
let raf = Utils.raf();
let _ = require('lodash');
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
		TweenMax = require('gsap/src/uncompressed/TweenMax');

		PrintApi.getByArtist(this.props.params.slug);
		PrintStore.addChangeListener(this.onStoreChange);

		this.view = document.querySelector('.contact-sheet');

		document.querySelector('.projects__list').style.display = 'none';

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
			title: 'Contact Sheet | Elliott Erwitt Havana Club 7 Fellowship',
			description: "Discover Magnum photographer Elliott Erwitt's new body of work in Cuba as well as his 1965 photos including Fidel Castro and Che Guevara pictures.",
			url: config.siteurl + '/photography/' + this.props.params.slug + '/contact-sheet',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		// console.log(this.state.loadedPrints);
		// console.log(this.state.prints);
		// _.map(_.sortByOrder(this.state.prints, ['year'], ['desc']), _.values);
		// console.log(this.state.prints);
		_.map(_.sortByOrder(this.state.loadedPrints, ['year'], ['desc']), _.values);

		return (
			<div className='subpage subpage--contact-sheet' ref='subview'>
				<Seo seo={seo} />
				<div className='submenu'><Link to={'/photography/'+this.props.params.slug+'?open=true'} className='button'><span className='button__content'>Back to gallery</span></Link></div>
				<div className='contact-sheet js-smooth'>
					{Object.keys(this.state.loadedPrints).map((index) => {
						let group = this.state.loadedPrints[index];
						return (
							<div key={index}>
								<div className='contact-sheet__title title js-reveal'>Elliott Erwitt {group.year}</div>
								<div className='contact-sheet__grid'>
									<div className='contact-sheet__width'></div>
									{Object.keys(group.prints).map((index, j) => {
										let print = group.prints[index];
										let src = '/static/prints/'+print.file+'_min.jpg';
										let random = Math.floor(Math.random()*6);
										printIndex++;
										return (
											<Link to={'/photography/'+this.props.params.slug+'/gallery/'+printIndex} className={'js-reveal contact-sheet__item contact-sheet__item--'+print.size+' contact-sheet__item--'+random} data-random={random} key={index}><img className='contact-sheet__image' src={src} alt={print.alt}></img></Link>
										)
									}.bind(this))}
								</div>
							</div>
						)
					})}
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
		const TweenMax = require('gsap/src/uncompressed/TweenMax');

		let e;
		this.sTop = Utils.getScrollTop();
		this.cTop += .1 * (this.sTop - this.cTop);
		e = -this.cTop;
		if (this.view) {
			this.view.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';
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
		// this.printsDate = {};
		this.printsDate = [];
		this.printsIndex = {};
		this.index = 0;

		if (this.max > 0 && !this.loaded) {
			this.loaded = true;
			_(this.state.prints).forEach((print, index) => {
				if (this.printsIndex[print.year] === undefined) {
					this.printsIndex[print.year] = this.index;
					this.index++;
				}

				if (!this.printsDate[this.printsIndex[print.year]]) {
					this.printsDate[this.printsIndex[print.year]] = {
						year: print.year,
						prints: []
					};
				}
				this.printsDate[this.printsIndex[print.year]].prints.push(print);

				// if (!this.printsDate[print.year]) this.printsDate[print.year] = [];
				// this.printsDate[print.year].push(print);

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
					document.querySelector('.subpage--contact-sheet').style.height = (this.view.offsetHeight) + 'px';
				}, 300);
			});
		}

	}

	resize() {

		let windowW = AppStore.Window.w;
		let windowH = AppStore.Window.h;
		super.resize();

		if (this.body && this.body.classList.contains('js-mobile')) {
			if (this.scrollRaf) {
				document.querySelector('.subpage--contact-sheet').style.height = 'auto'
				this.setState({
					isMobile: true
				});
				_(document.querySelectorAll('.contact-sheet__item')).forEach((el) => {
					el.style.height = document.querySelectorAll('.contact-sheet__image')[0].offsetHeight
				}).value()
				window.cancelAnimationFrame(this.scrollRaf)
				this.scrollRaf = null;
			}
		} else {
			if (!this.scrollRaf) {
				if (this.fellowship) {
					document.querySelector('.subpage--contact-sheet').style.height = this.view.offsetHeight + 'px'
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

// ContactSheet.contextTypes = {
// 	router: React.PropTypes.func.isRequired
// };
