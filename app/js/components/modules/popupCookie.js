import React from 'react';

export default class PopupCookie extends React.Component {

	constructor(props) {

		super();

		// props
		this.props = props;

		// binded
		this.continue = this.continue.bind(this);

	}

	componentDidMount() {
	
		this.popup = this.refs.popup.getDOMNode();

	}

	render() {

		return (
			<div className='popup popup--cookie' ref='popup'>
				<p className='text cookie__content'>Cookies help us offer a better and more personalized experience. By browsing this website, you agree to our use of cookies. <a className='underline' href='/privacy' target='_blank'>Learn more</a> and update your cookie settings.</p>
				<a href='' className='cookie__continue button' onClick={this.continue}>Continue</a>
			</div>
		);

	}

	continue(e) {

		e.preventDefault();

		if(typeof localStorage !== 'undefined') {
			localStorage.setItem('cookies', true);
		}
		
		TweenMax.to(this.popup, 0.3, {y:this.popup.offsetHeight, ease:Power2.easeOut, onComplete:()=>{
			this.popup.style.display = 'none';
		}});

	}

}
