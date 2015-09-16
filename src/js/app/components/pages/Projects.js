import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import ProjectApi from 'ProjectApi'
import ProjectStore from 'ProjectStore'
import PrintApi from 'PrintApi'
import PrintStore from 'PrintStore'
import PrintActions from 'PrintActions'
import Utils from 'Utils'
import Slideshow from 'Slideshow'
let _ = require('lodash')

export default class Projects extends Page {
	constructor(props) {
		super(props)
		this.props = props

		// state
		this.state = { 
			projects: {},
			currentProject: this.props.idSection,
			prints: {},
			current: 0,
			bigPrintsLoaded: false,
			projectOpened: false
		}

		// vars
		this.nProjectsLoaded = 0
		this.nPrintsLoaded = 0
		this.nBigPrintsLoaded = 0
		this.projectsLoaded = false
		this.printsLoaded = false
		this.bigPrintsLoaded = false

		// function binded
		this._onStoreChangeBinded = this._onStoreChange.bind(this)
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this._hoverBinded = this._hover.bind(this)
		this._outBinded = this._out.bind(this)
		this._showInfosBinded = this._showInfos.bind(this)
		this._showSlideshowBinded = this._showSlideshow.bind(this)
		this._updateCurrentBinded = this._updateCurrent.bind(this)
	}

	componentDidMount() {
		super.componentDidMount()

		let hack = setTimeout(() => {
			this.zoom = PrintStore.getZoom()
			if (this.zoom !== undefined) {
				this.setState({
					projectOpened: true,
					current: this.zoom
				})
			}
		}.bind(this), 10);
		
		if (this.props.idSection) PrintApi.getByArtist(this.props.idSection);
		ProjectApi.getFirsts();
		ProjectStore.addChangeListener(this._onStoreChangeBinded);
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);
	}

	componentDidUpdate() {
		let file
		this.nProjects = _.size(this.state.projects)
		if (this.nProjects > 0 && !this.projectsLoaded && this.zoom === undefined) {
			this.projectsLoaded = true
			_(this.state.projects).forEach((project, index) => {
				file = new Image()
				file.onload = this.onProjectLoaded.bind(this)
				file.src = '/static/img/'+project.print.file+'_big.jpg'
			}.bind(this)).value();
		}
	}

	onProjectLoaded(e) {
		this.nProjectsLoaded++;

		if (this.nProjectsLoaded >= this.nProjects) {
			_(document.querySelectorAll('.projects__button')).forEach((el) => {
				el.addEventListener('mouseover', this._hoverBinded);
				el.addEventListener('mouseout', this._outBinded);
				el.addEventListener('click', this._showInfosBinded);
			}.bind(this)).value();
		}
	}

	componentWillUnmount() {
		ProjectStore.removeChangeListener(this._onStoreChangeBinded);
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);
	}

	render() {
		let introClass = (this.state.projectOpened) ? 'projects__intro--hidden' : '';
		let slideshowClass = (this.state.projectOpened) ? '' : 'project__slideshow--hidden';
		let projectList
		if (_.size(this.state.projects) > 1) {
			projectList = (
				<div>
					<h3 className='projects__title text text--title'>Fellows:</h3>
					<ul>
						{Object.keys(this.state.projects).map((index) => {
							let project = this.state.projects[index];
							let classes = (project.slug === this.state.currentProject) ? 'projects__item--enabled' : ''
							return (
								<li key={index} className={'projects__item ' + classes}>
									<a href={'#/photography/'+project.slug} className='projects__button button' onClick={this._showInfosBinded} data-project={project.slug}>{project.artist}</a>
								</li>
							)
						}.bind(this))}
					</ul>
				</div>
			)
		}

		return (
			<div className='page page--projects' ref='page-wrapper'>
				<div className='projects'>
					<div className={'projects__intro ' + introClass}>
						{projectList}
						<div className='projects__contents'>
							{Object.keys(this.state.projects).map((index) => {
								let project = this.state.projects[index];
								let classes = (project.slug === this.state.currentProject) ? 'projects__contents--enabled' : ''
								return (
									<div key={index} className={'projects__content projects__content--' + project.slug + ' ' + classes}>
										<div className='projects__image'>
											<img src={'/static/img/' + project.print.file + '_big.jpg'}/>
										</div>
										<div className='projects__details'>
											<h2 className='title'>{project.artist}</h2>
											<div className='paragraph paragraph--2'>
												{Object.keys(project.desc).map((index) => {
													return (
														<p key={index} className='text'>{project.desc[index]}</p>
													)
												}.bind(this))}
											</div>
											<div className='projects__loader text'>Chargement...</div>
											<div className='projects__discover projects__discover--disabled button' onClick={this._showSlideshowBinded}>Discover the project</div>
										</div>
									</div>
								)
							}.bind(this))}
						</div>
					</div>

					{(() => {
						if (_.size(this.state.prints) > 0) {
							return (
								<div>
									<div className='project__contact submenu'><a href={'#/photography/'+this.state.currentProject+'/contact-sheet'} className='button'>Contact sheet</a></div>
									<Slideshow
										prints={this.state.prints}
										show={this.state.projectOpened}
										current={this.state.current}
										updateCurrent={this._updateCurrentBinded}
									/>								
								</div>
							)
						}
					}.bind(this))()}
				</div>
			</div>
		)
	}

	// PROJECTS
	_hover(e) {
		let _image = document.querySelector('.projects__content--'+e.target.dataset.project+' .projects__image');
		_image.style.zIndex = 5;
		TweenMax.to(_image, 0.3, {opacity: 1, ease:Power2.easeOut});
	}

	_out(e) {
		let _image = document.querySelector('.projects__content--'+e.target.dataset.project+' .projects__image');
		TweenMax.to(_image, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: () => {
			_image.style.zIndex = 0;
		}});
	}

	_showInfos(e) {
		e.preventDefault()

		this.setState({
			currentProject: e.target.dataset.project
		})
		PrintApi.getByArtist(e.target.dataset.project)
	}

	// SLIDESHOW PRINTS
	_showSlideshow() {
		this.setState({
			projectOpened: true
		});
	}

	_updateCurrent(current) {
		this.setState({
			current: current
		});
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()

		if (this._prints && this._image && this._footer) {
			this._content.style.width = this._image.offsetWidth + 'px'
			this._footer.style.width = this._image.offsetWidth + 'px'
		}
	}

	_onStoreChange() {
		this.setState({
			projects: ProjectStore.getFirsts()
		}, () => {
			if (_.size(this.state.projects) < 2) {
				this.setState({
					currentProject: this.state.projects[0].slug
				})
				PrintApi.getByArtist(this.state.projects[0].slug)
			}
		})
	}

	_onPrintStoreChange() {
		this.setState({
			prints: PrintStore.getArtistPrints()
		}, () => {
			this.nPrints = _.size(this.state.prints)
		})
	}
}
