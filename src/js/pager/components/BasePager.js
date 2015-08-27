import React from 'react'
import {PagerStore, PagerActions, PagerConstants, PagerDispatcher} from 'Pager'
import _capitalize from 'lodash/String/capitalize'
import PrintStore from 'PrintStore'
import PrintActions from 'PrintActions'

export default class BasePager extends React.Component {

	constructor(props) {
		super(props)
		this.currentPageDivRef = 'page-b'
		this.willPageTransitionIn = this.willPageTransitionIn.bind(this)
		this.willPageTransitionOut = this.willPageTransitionOut.bind(this)
		this.components = {
			'new-component': undefined,
			'old-component': undefined
		}
	}

	render() {
		return (
			<div id='pagesContainer'>
				<div className='pages' ref='page-a'></div>
				<div className='pages' ref='page-b'></div>
			</div>
		)
	}

	componentWillMount() {
		PagerStore.on(PagerConstants.PAGE_TRANSITION_IN, this.willPageTransitionIn)
		PagerStore.on(PagerConstants.PAGE_TRANSITION_OUT, this.willPageTransitionOut)
	}

	setupNewComponent(hash, Type, idSection) {
		let id = _capitalize(hash.replace("/", ""))
		this.oldPageDivRef = this.currentPageDivRef
		this.currentPageDivRef = (this.currentPageDivRef === 'page-a') ? 'page-b' : 'page-a'
		let el = React.findDOMNode(this.refs[this.currentPageDivRef])
		let page = 
			<Type 
				id={this.currentPageDivRef} 
				isReady={this.onPageReady} 
				hash={hash}
				idSection={idSection}
				didTransitionInComplete={this.didPageTransitionInComplete.bind(this)}
				didTransitionOutComplete={this.didPageTransitionOutComplete.bind(this)}
			/>
		this.components['old-component'] = this.components['new-component']
		this.components['new-component'] = React.render(page, el)
		if(PagerStore.pageTransitionState === PagerConstants.PAGE_TRANSITION_IN_PROGRESS) {
			this.components['old-component'].forceUnmount()
		}
	}

	onPageReady(hash) {
		PagerActions.onPageReady(hash)
	}

	willPageTransitionIn() {
		this.switchPagesDivIndex()
		this.components['new-component'].willTransitionIn()
	}

	willPageTransitionOut() {
		this.components['old-component'].willTransitionOut()
	}

	didPageTransitionInComplete() {
		// console.log('didPageTransitionInComplete')
		PagerActions.pageTransitionDidFinish()
		this.unmountComponent('old-component')
	}

	didPageTransitionOutComplete() {
		this.zoom = PrintStore.getZoom()
		window.scrollTo(0, 0)
		if (this.zoom) {
			window.scrollTo(0, document.querySelector('.project__slideshow').offsetTop - window.innerHeight*0.2 - 40);
			PrintActions.setPrintZoom(undefined);
		}
		// console.log('didPageTransitionOutComplete')
		PagerActions.onTransitionOutComplete()
	}

	switchPagesDivIndex() {
		var newEl = React.findDOMNode(this.refs[this.currentPageDivRef])
		var oldEl = React.findDOMNode(this.refs[this.oldPageDivRef])
		newEl.style.zIndex = 2
		oldEl.style.zIndex = 1
	}

	unmountComponent(ref) {
		if(this.components[ref] !== undefined) {
			var id = this.components[ref].props.id
			var domToRemove = React.findDOMNode(this.refs[id])
			React.unmountComponentAtNode(domToRemove)
		}
	}

	componentWillUnmount() {
		PagerStore.off(PagerConstants.PAGE_TRANSITION_IN, this.willPageTransitionIn)
		PagerStore.off(PagerConstants.PAGE_TRANSITION_OUT, this.willPageTransitionOut)
		this.unmountComponent('old-component')
		this.unmountComponent('new-component')
	}
}
