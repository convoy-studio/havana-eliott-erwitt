import React, { Component } from 'react';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import ProjectApi from '../../utils/projectApi';
import ProjectStore from '../../stores/projectStore';
import PrintApi from '../../utils/printApi';
import PrintStore from '../../stores/printStore';
import Gallery from '../modules/gallery';
import Utils from '../../utils/utils';
let _ = require('lodash');
let config = require('../../config');

export default class Project extends Component {

	componentWillMount() {

		// state
		this.state = {
			project: undefined,
			prints: undefined,

			open: (this.props.params.token) ? true : (Utils.getURLParameter('open')) ? true : false
			// open: (Utils.getURLParameter('open')) ? true : false
		};

		this.eventAdded = false;

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.showGallery = this.showGallery.bind(this);
		this.content = AppStore.getContent()
        this.onOrientationChange = this.orientationChange.bind(this);

	}

	componentWillAppear(callback) {

		setTimeout(callback, 1); // need at least one tick to fire transition

	}

	componentDidAppear() {

		this._enterStyle();

	}

	componentWillEnter(callback) {

		setTimeout(callback, 1);

	}

	componentDidEnter() {

		this._enterStyle();

	}

	componentWillLeave(callback) {
		this._leaveStyle(callback);
		// setTimeout(callback, 300); // matches transition duration

	}

	componentDidLeave() {


	}

	_enterStyle() {

		let el = this.refs.item.getDOMNode();
		let logo = document.querySelector('.header__logo');

		logo.style.display = 'table';
		this.enterTl = new TimelineMax({delay:0.3});
		this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn});
		this.enterTl.to(logo, 0.3, {opacity:1, ease:Power2.easeIn}, 0);
		this.enterTl.addCallback(()=>{
			ProjectApi.getBySlug(this.props.params.slug);
			PrintApi.getByArtist(this.props.params.slug);
		}, 0);

	}

	_leaveStyle(callback) {

		let el = this.refs.item.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});

	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');

		ProjectStore.addChangeListener(this.onStoreChange);
		PrintStore.addChangeListener(this.onStoreChange);

		// window.setTimeout(()=>{
			ProjectApi.getBySlug(this.props.params.slug);
			PrintApi.getByArtist(this.props.params.slug);
		// }, 300);

		if (this.state.open) this.props.hideMenu();

	}

	componentWillUnmount() {

		ProjectStore.removeChangeListener(this.onStoreChange);
		PrintStore.removeChangeListener(this.onStoreChange);
        if (this.eventAdded) {
            window.removeEventListener('orientationchange', this.onOrientationChange)
            this.eventAdded = false;
        }
	}

	render() {

		let artist, slug, desc = {};
		if (_.size(this.state.project) > 0) {
			artist = this.state.project.artist;
			slug = this.state.project.slug;
			desc = this.state.project.desc;
		}

		let projectVisibility = (this.state.open) ? 'project__details--hidden' : '';

		let description = '';
		_(desc).forEach((value, index) => {
			description += value;
		}.bind(this)).value();
		let seo = {
			title: this.content.project_title,
			description: this.content.project_description,
			url: config.siteurl + '/photography/' + this.props.params.slug,
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};


					// <Link to={'/photography/'+this.props.params.slug+'?open=true'} className='projects__discover projects__discover--disabled button'>Discover the project</Link>
		return (
			<div className='project-wrapper' ref="item">
				<Seo seo={seo} />
				<div className={'project__details ' + projectVisibility}>
					<div className='project__infos'>
						<h2 className='title'>{artist}</h2>
						<div className='paragraph paragraph--2'>
							{Object.keys(desc).map((index) => {
								return (
									<p key={index} className='text'>{desc[index]}</p>
								)
							}.bind(this))}
						</div>
					</div>
					<div className='project__loader text'>{this.content.loading_message}...</div>
					<div className='project__discover project__discover--disabled button' onClick={this.showGallery}>{this.content.discover_project}</div>
				</div>

				{(() => {
					if (_.size(this.state.prints) > 0) {
						return (
							<div className='project__gallery-wrapper'>
								<Gallery
									ref='gallery'
									prints={this.state.prints}
									show={this.state.open}
									project={slug}
									current={this.props.params.token}
									updateCurrent={this._updateCurrentBinded}
									isMobile={this.state.isMobile}
								/>
							</div>
						)
					}
				}.bind(this))()}
			</div>
		);
	}
			// <div ref="item" className='project-wrapper'>
			// 	<Seo seo={seo} />
			// 	<div className={'projects__details '+projectVisibility}>
			// 		<div className='projects__infos'>
			// 			<h2 className='title'>{artist}</h2>
			// 			<div className='paragraph paragraph--2'>
			// 				{Object.keys(desc).map((index) => {
			// 					return (
			// 						<p key={index} className='text'>{desc[index]}</p>
			// 					)
			// 				}.bind(this))}
			// 			</div>
			// 		</div>
			// 		<div className='projects__loader text'>Chargement...</div>
			// 		<div className='projects__discover projects__discover--disabled button' onClick={this.showGallery}>Discover the project</div>
			// 	</div>

			// 	{(() => {
			// 		if (_.size(this.state.prints) > 0) {
			// 			return (
			// 				<div className='project__gallery-wrapper'>
			// 					<Gallery
			// 						prints={this.state.prints}
			// 						show={this.state.open}
			// 						project={slug}
			// 						current={this.props.params.token}
			// 						updateCurrent={this._updateCurrentBinded}
			// 						isMobile={this.state.isMobile}
			// 					/>
			// 				</div>
			// 			)
			// 		}
			// 	}.bind(this))()}
			// </div>

	showGallery() {

		this.props.hideMenu();
		this.setState({
			open: true
		});

	}

	orientationChange() {
		const { pathname } = this.props.location;

		if (window.orientation === 90 || window.orientation === -90) {
			if (this.refs.gallery && this.state.open) {
				document.getElementById('landscape').style.display = 'none';
				this.refs.gallery.zoomIn();
			} else {
				document.getElementById('landscape').style.display = 'block';
			}
		} else {
			document.getElementById('landscape').style.display = 'none';
			if (this.refs.gallery && this.state.open) {
				this.refs.gallery.zoomOut();
			}
		}

	}

	onStoreChange() {

		this.setState({
			project: ProjectStore.getOne(),
			prints: PrintStore.getArtistPrints()
		}, ()=>{
			if(window.innerWidth < 768 && _.size(this.state.prints) > 0 && !this.eventAdded) {
				this.orientationChange();
				window.addEventListener('orientationchange', this.onOrientationChange, false);
                this.eventAdded = true;
			} else if (window.innerWidth >= 768 && this.eventAdded) {
                window.removeEventListener('orientationchange', this.onOrientationChange)
                this.eventAdded = false;
            }
		});

	}

}
