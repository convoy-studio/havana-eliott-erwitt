import React, { Component } from 'react';
import { Link } from 'react-router';
let config = require('../../../config');

export default class AdminHome extends Component {

	componentWillMount(){
		
	}

	render() {

		return (
			<div>
				<h1 className='title title--center title--absolute'><span><Link to='/admin'>Admin</Link></span></h1>
			</div>
		);

	}
}