import React from 'react'
import dom from 'domquery'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'
import Utils from 'Utils'
let _ = require('lodash')
let scroll = Utils.Scroll()

export default class IsMobile extends React.Component {

	constructor() {
		super()
		
		document.addEventListener('resize', this.resize.bind(this))
	}

	componentWillMount() {

	}

	componentDidMount() {

	}

	componentDidUpdate() {
	
	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div>{this.props.children}</div>
		)
	}

	resize() {
		console.log(window.innerWidth)
	}

}
