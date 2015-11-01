import React from 'react';

export default class Input extends React.Component {

	constructor(props) {

		super();

		// props
		this.props = props;

		// binded
		document.addEventListener('mousemove', this.onMousemove.bind(this));

	}

	componentDidMount() {
	
		this.view = this.refs.cursor.getDOMNode();

	}

	componentWillUnmount() {

		document.removeEventListener('mousemove', this.onMousemove.bind(this));

	}

	render() {

		return (
			<div className={'cursor cursor--'+this.props.state} ref='cursor'></div>
		);

	}

	onMousemove(e) {

		this.view.style.transform = 'translate('+e.clientX+'px, '+e.clientY+'px)';

	}

}
