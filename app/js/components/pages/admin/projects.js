import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectApi from '../../../utils/projectApi';
import ProjectStore from '../../../stores/projectStore';
let config = require('../../../config');
let _ = require('lodash');

export default class AdminProjects extends Component {

	componentWillMount(){
	
		this.state = {
			projects: {}
		};

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);

	}

	componentDidMount() {

		ProjectApi.getAll();
		ProjectStore.addChangeListener(this.onStoreChange);

	}

	render() {

		let projects = [];
		_(this.state.projects).forEach((project, index) => {
			projects.push(
				<tr key={index}>
					<td><Link to={'/admin/project/'+project.slug}>{project.artist}</Link></td>
					<td><Link to={'/admin/project/'+project.slug}>{project.slug}</Link></td>
				</tr>
			)
		}).value()

		return (
			<div className='admin__projects'>
				<h1 className='title title--center title--absolute'><span><Link to='/admin'>Projects</Link></span></h1>
				<table>
					<tr>
						<th>Artist</th>
						<th>Slug</th>
					</tr>
					{projects}
				</table>
			</div>
		);

	}

	onStoreChange() {

		this.setState({
			projects: ProjectStore.getAll()
		});

	}

}