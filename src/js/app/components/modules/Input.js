import React from 'react'
import dom from 'domquery'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'
import Utils from 'Utils'
let _ = require('lodash')
let scroll = Utils.Scroll()

export default class Input extends React.Component {

	constructor(props) {
		super(props)

		// props
		this.props = props

		// state
		// this.state = {
		// 	text: this.props.text
		// }

		// binded
		this.onchange = this.onchange.bind(this)
	}

	componentWillMount() {
	}

	componentDidMount() {
	}

	componentDidUpdate() {
		// if (!this.state.text) {
		// 	this.setState({
		// 		text: this.props.text
		// 	})
		// }
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<input className='form__input form__input--text' type='text' id={this.props.id} value={this.props.text} onChange={this.onchange} />
		)
	}

	onchange(e) {
		this.props.updateText(e.target.value)
		// this.setState({
		// 	text: e.target.value
		// })
	}

}
