import React from 'react'

export default class BasePage extends React.Component {
	constructor(props) {
		super(props)
		this.didTransitionInComplete = this.didTransitionInComplete.bind(this)
		this.didTransitionOutComplete = this.didTransitionOutComplete.bind(this)
		this.tlIn = new TimelineMax({
			onComplete:this.didTransitionInComplete
		})
		this.tlOut = new TimelineMax({
			onComplete:this.didTransitionOutComplete
		})
	}
	render() {
		super.render()
	}
	componentWillMount() {
	}
	componentDidMount() {
		this.resize()
		this.setupAnimations()
		setTimeout(() => this.props.isReady(this.props.hash), 0)
	}
	setupAnimations() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// transition In
		this.tlIn.to(document.querySelector('.header__title'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
		this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

		// transition Out
		this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		this.tlOut.to(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

		// reset
		this.tlIn.pause(0)
		this.tlOut.pause(0)
	}
	willTransitionIn() {
		this.tlIn.play(0)
	}
	willTransitionOut() {
		this.tlOut.play(0)
	}
	didTransitionInComplete() {
		setTimeout(() => this.props.didTransitionInComplete(), 0)
	}
	didTransitionOutComplete() {
		setTimeout(() => this.props.didTransitionOutComplete(), 0)
	}
	resize() {
	}
	forceUnmount() {
		this.tlIn.pause(0)
		this.tlOut.pause(0)
		this.didTransitionOutComplete()
	}
	componentWillUnmount() {
		this.tlIn.clear()
		this.tlOut.clear()
	}
}
