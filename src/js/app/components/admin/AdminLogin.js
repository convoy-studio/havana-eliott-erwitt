import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import Input from '../modules/Input'
let _ = require('lodash')

export default class AdminLogin extends Page {

	constructor(props) {
		super(props)

		this.props = props

		this.state = {
			id: undefined,
			pwd: undefined
		}

		// binded
		this.save = this.save.bind(this)
		this.updateId = this.updateId.bind(this)
		this.updatePwd = this.updatePwd.bind(this)
	}

	componentDidMount() {
		super.componentDidMount()
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

	render() {
		return (
			<div className='page page--admin' ref='page-wrapper'>
				<div className='admin'>
					<div className='admin__login'>
						<h1 className='admin__title title'>Login</h1>
						<form className='admin__form form'>
							<div className='form__row'>
								<label className='form__label' htmlFor='id'>Identifiant</label>
								<Input 
									id='id'
									text={this.state.id}
									updateText={this.updateId}
								/>
							</div>
							<div className='form__row'>
								<label className='form__label' htmlFor='pwd'>Password</label>
								<Input 
									id='pwd'
									text={this.state.pwd}
									updateText={this.updatePwd}
								/>
							</div>
							<div className='admin__row'>
								<a href='' className='button' onClick={this.save}>Login</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}

	save(e) {
		e.preventDefault()

		console.log(this.state.id + ' / ' + this.state.pwd)

	}

	updateId(value) {
		this.setState({
			id: value
		})
	}

	updatePwd(value) {
		this.setState({
			pwd: value
		})
	}

}
