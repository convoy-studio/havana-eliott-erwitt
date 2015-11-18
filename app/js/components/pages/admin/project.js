import React, { Component } from 'react';
import { Link } from 'react-router';
import PrintStore from '../../../stores/printStore';
import PrintApi from '../../../utils/printApi';
import ProjectStore from '../../../stores/projectStore';
import ProjectApi from '../../../utils/projectApi';
let config = require('../../../config');
let _ = require('lodash');

export default class AdminProject extends Component {

	componentWillMount() {

		this.state = {
			project: undefined,
			prints: undefined,
			edit: undefined
		};

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.check = this.check.bind(this);
		
	}

	componentDidMount() {

		PrintStore.addChangeListener(this.onStoreChange);

		PrintApi.getByArtist(this.props.params.slug);
		ProjectApi.getBySlug(this.props.params.slug);

	}

	render() {

		let prints = [], forsale, artist;

		_(this.state.prints).forEach((print, index) => {
			prints.push(
				<tr key={index}>
					<td>{print.token}</td>
					<td><img src={'/static/prints/'+print.file+'_min.jpg'}/></td>
					<td>{(print.title) ? print.title : '–'}</td>
					<td>{(print.city) ? print.city : '–'}</td>
					<td>{(print.country) ? print.country : '–'}</td>
					<td>{(print.year) ? print.year : '–'}</td>
					<td>{(print.price) ? print.price : 0}€</td>
					<td>{(print.forsale) ? 'yes' : 'no'}</td>
					<td><Link to={'/admin/project/'+this.state.project.slug+'/'+print.token}>Edit</Link></td>
				</tr>
			)
		}).value()

		if (this.state.project) {
			artist = this.state.project.artist
		}

		return (
			<div className='admin__project'>
				<div className='submenu'><Link to='/admin/projects' className='button'>Back to projects</Link></div>
				<h1 className='title title--center title--absolute'><span><Link to='/admin'>Project — {artist}</Link></span></h1>
				<table>
					<tr>
						<th>Token</th>
						<th>Print</th>
						<th>Title</th>
						<th>City</th>
						<th>Country</th>
						<th>Year</th>
						<th>Price</th>
						<th>For sale?</th>
						<th></th>
					</tr>
					{prints}
				</table>
			</div>
		);

	}

	check(index, e) {

		this.setState({
			edit: index
		});

	}

	onStoreChange() {

		this.setState({
			project: ProjectStore.getOne(),
			prints: PrintStore.getArtistPrints()
		}, () => {
			_(document.querySelectorAll('.admin__checkbox')).forEach((el, index) => {
				el.addEventListener('change', this.check.bind(this,index))
			}).value()
		});

	}

}