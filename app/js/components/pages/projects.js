// import React, { Component } from 'react';
// import React from 'react/addons';
// import React from 'react';

import React from 'react';
import ComponentTransition from '../componentTransition';

import Helmet from 'react-helmet';
import Seo from '../modules/seo';
import { Link } from 'react-router';
import ProjectApi from '../../utils/projectApi';
import ProjectStore from '../../stores/projectStore';
let _ = require('lodash');
let config = require('../../config');

// const { CSSTransitionGroup } = React.addons;
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

	}

	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();
		let subel = this.refs.subview.getDOMNode();

		if (subel.hasChildNodes()) {
			el.style.opacity = 1;
			this.enterTl = new TimelineMax({delay:0.3});
			this.enterTl.fromTo(subel, 0.3, {opacity:0}, {opacity:1, ease:Power2.easeIn});
		} else {
			this.enterTl = new TimelineMax({delay:0.3});
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

		super.componentDidMount();

		ProjectApi.getFirsts();
		ProjectStore.addChangeListener(this.onStoreChange);

	}

	componentWillUnmount() {

		ProjectStore.removeChangeListener(this.onStoreChange);

	}

	render() {

		const { pathname } = this.props.location.pathname;

		let seo = {
			title: 'Elliott Erwitt Havana Club 7 Fellowship | Photography',
			description: 'Lorem ipsum dolor sit amet',
			url: config.siteurl + '/photography',
			image: config.siteurl + '/static/img/elliott-erwitt.jpg'
		};

		let introClass = (this.props.params.token || this.props.children && this.props.children.type.name === 'ContactSheet' || !this.state.menuShowed) ? 'projects__intro--hidden' : '';
		let projectList;
		if (_.size(this.state.projects) > 1) {
			projectList = (
				<div>
					<h3 className='projects__title text text--title'>Fellows:</h3>
					<ul>
						{Object.keys(this.state.projects).map((index) => {
							let project = this.state.projects[index];
							let classes = (project.slug === this.props.params.slug) ? 'projects__item--enabled' : ''
							return (
								<li key={index} className={'projects__item ' + classes}>
									<Link to={'/photography/'+project.slug} className='projects__button button' data-project={project.slug}>{project.artist}</Link>
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
					<div className={'projects__intro ' + introClass}>
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

}