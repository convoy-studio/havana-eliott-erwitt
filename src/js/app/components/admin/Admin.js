import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import ProjectStore from 'ProjectStore'
import ProjectApi from 'ProjectApi'
let _ = require('lodash')

export default class Admin extends Page {

	constructor(props) {
		super(props)

		this.state = {
			projects: undefined
		}

		this._onStoreChange = this._onStoreChange.bind(this)
	}

	componentDidMount() {
		super.componentDidMount()

		ProjectStore.addChangeListener(this._onStoreChange);

		ProjectApi.getAll();
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

	render() {
		let projects = []
		// _(this.state.projects).forEach((project, index) => {
		// 	projects.push(<li key={index}><a href={'#/admin/'+project.slug}>{project.artist}</a></li>)
		// }).value()

		_(this.state.projects).forEach((project, index) => {
			// forsale = (print.forsale) ? defaultChecked
			projects.push(
				<tr key={index}>
					<td><a href={'#/admin/'+project.slug}>{project.artist}</a></td>
					<td><a href={'#/admin/'+project.slug}>{project.slug}</a></td>
				</tr>
			)
		}).value()

		return (
			<div className='page page--admin' ref='page-wrapper'>
				<div className='admin'>
					<div className='admin__projects'>
						<h1 className='admin__title title'>Projects</h1>
						<table>
							<tr>
								<th>Artist</th>
								<th>Slug</th>
							</tr>
							{projects}
						</table>
					</div>
				</div>
			</div>
		)
	}

	_onStoreChange() {
		this.setState({
			projects: ProjectStore.getAll()
		})
	}

}
