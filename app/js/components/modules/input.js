import React from 'react';

export default class Input extends React.Component {

	constructor(props) {

		super();

		// props
		this.props = props;

		// binded
		this.onchange = this.onchange.bind(this);

	}

	render() {

		return (
			<input className='form__input form__input--text' type='text' id={this.props.id} value={this.props.text} onChange={this.onchange} />
		);

	}

	onchange(e) {

		this.props.updateText(e.target.value);

	}

}
