import React from 'react';
import TweenMax from 'gsap/src/uncompressed/TweenMax';

export default class PopupShop extends React.Component {

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
			<div className='popup popup--shop' ref='popup'>
				<p className='text popup__content'>Mr. Elliott Erwitt and Pernod Ricard, SA have decided to coestablish a foundation in Spain under the name “Fundación Elliott Erwitt Havana Club 7 Fellowship”. Currently, the public deed of incorporation of the above Foundation has not been issued and the Foundation is pending to be registered.</p>
				<a href='' className='popup__continue button' onClick={this.continue}>Continue</a>
			</div>
		);

	}

	continue(e) {

		e.preventDefault();

		if(typeof localStorage !== 'undefined') {
			localStorage.setItem('shop_opening', true);
		}

		TweenMax.to(this.popup, 0.3, {opacity:0, ease:Power2.easeOut, onComplete:()=>{
			this.popup.style.display = 'none';
		}});

	}

}
