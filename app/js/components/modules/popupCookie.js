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

		console.log(this.props.visible)
		let visibility = (this.props.visible) ? 'popup--visible' : '';

		return (
			<div className={'popup popup--cookie '+visibility} ref='popup'>
				<p className='text cookie__content'>
					Mr. Elliott Erwitt and Pernod Ricard, SA have decided to co-establish a foundation in Spain under the name “Fundación Elliott Erwitt Havana Club 7 Fellowship”. Currently, the public deed of incorporation of the above Foundation has not been issued and the Foundation is pending to be registered.<br/><br/>Cookies help us offer a better and more personalized experience. By continuing to browse, you consent to the use of first and third party cookies on your device for profiling and analytical purposes. Consult our <a className='underline' href='/cookie-policy' target='_blank'>cookies policy.</a>
				</p>
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
