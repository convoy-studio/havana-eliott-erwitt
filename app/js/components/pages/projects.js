import React from 'react';
import ComponentTransition from '../componentTransition';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import ProjectApi from '../../utils/projectApi';
import ProjectStore from '../../stores/projectStore';
import AppStore from '../../stores/appStore';
let _ = require('lodash');
let config = require('../../config');

const Transition = React.addons.TransitionGroup;

export default class Projects extends ComponentTransition {

	componentWillMount() {

		// state
		this.state = {
			projects: {},
			prints: {},

			menuShowed: true
		};

		// vars
		this.nProjectsLoaded = 0;
		this.nPrintsLoaded = 0;
		this.nBigPrintsLoaded = 0;
		this.projectsLoaded = false;
		this.printsLoaded = false;
		this.bigPrintsLoaded = false;

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.hideMenu = this.hideMenu.bind(this);

		this.content = AppStore.getContent()

	}

	_enterStyle() {

		let el = this.refs.view.getDOMNode();
		let subel = this.refs.subview.getDOMNode();
		let logo = document.querySelector('.header__logo');

		logo.style.display = 'table';
		if (subel.hasChildNodes()) {
			el.style.opacity = 1;
			this.enterTl = new TimelineMax({delay:0.3});
			this.enterTl.to(logo, 0.3, {opacity:1, ease:Power2.easeIn}, 0);
			this.enterTl.fromTo(subel, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn});
		} else {
			this.enterTl = new TimelineMax({delay:0.3});
			this.enterTl.to(logo, 0.3, {opacity:1, ease:Power2.easeIn}, 0);
			this.enterTl.fromTo(el, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn});
		}

	}

	_leaveStyle(callback) {

		let el = this.refs.view.getDOMNode();
		let subel = this.refs.subview.getDOMNode();

		if (subel.hasChildNodes()) {
			this.leaveTl = new TimelineMax({onComplete:()=>{
				el.style.opacity = 0;
			}});
			this.leaveTl.to(subel, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
		} else {
			TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
		}

	}

	componentDidMount() {
		TweenMax = require('gsap/src/uncompressed/TweenMax');

		ProjectApi.getFirsts();
		ProjectStore.addChangeListener(this.onStoreChange);

	}

	componentWillUnmount() {

		ProjectStore.removeChangeListener(this.onStoreChange);

	}

	render() {

		const { pathname } = this.props.location.pathname;

		let seo = {
			title: this.content.projects_title,
			description: this.content.projects_description,
			url: config.siteurl + '/photography',
			image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
		};

		let introClass = (this.props.params.token || this.props.children && this.props.children.type.name === 'ContactSheet' || !this.state.menuShowed) ? 'projects__list--hidden' : '';
		let projectList;
		if (_.size(this.state.projects) > 1) {
			projectList = (
				<div>
					<h3 className='projects__title text text--title'>{this.content.projects_fellows}:</h3>
					<ul>
						{Object.keys(this.state.projects).map((index) => {
							let project = this.state.projects[index];
							let classes = (project.slug === this.props.params.slug) ? 'projects__item--enabled' : ''
							return (
								<li key={index} className={'projects__item ' + classes}>
									<Link to={AppStore.getLink('/photography/'+project.slug)} className='projects__button button' data-project={project.slug}>{project.artist}</Link>
									<div className='projects__image'>
										<img src={'/static/prints/' + project.print.file + '_big.jpg'}/>
									</div>
								</li>
							)
						}.bind(this))}
					</ul>
				</div>
			)
		}

		if (this.props.children) this.props.children.props.hideMenu = this.hideMenu;
		return (
			<div className='page page--projects' ref='view'>
				<Seo seo={seo} />
				<div className='projects'>
					<div className={'projects__list ' + introClass}>
						{projectList}
					</div>
					<div ref='subview'>
						{this.props.children}
					</div>
				</div>
			</div>
		);

	}

	hideMenu() {

		this.setState({
			menuShowed: false
		});

	}

	onStoreChange() {

		this.setState({
			projects: ProjectStore.getFirsts()
		});

	}

	static fetchData() {

		ProjectApi.getFirsts();

	}

}

// Projects.contextTypes = {
// 	router: React.PropTypes.func.isRequired
// };
