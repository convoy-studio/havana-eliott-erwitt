import React from 'react';

export default class Input extends React.Component {

	constructor(props) {

		super();

		// props
		this.props = props;

		// binded
		this.onClick = this.onClick.bind(this);

		document.addEventListener('mousemove', this.onMousemove.bind(this));

	}

	componentDidMount() {
	
		this.view = this.refs.cursor.getDOMNode();

		this.view.addEventListener('click', this.onClick)

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

	onClick(e) {

		e.stopPropagation();
		e.preventDefault();

	}

}
