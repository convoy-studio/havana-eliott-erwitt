import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import ProjectStore from 'ProjectStore'
import ProjectApi from 'ProjectApi'
let _ = require('lodash')

export default class AdminProject extends Page {

	constructor(props) {
		super(props)

		this.props = props

		this.state = {
			project: undefined,
			prints: undefined,
			edit: undefined
		}
		console.log(this.props)
		this._onStoreChange = this._onStoreChange.bind(this)
		this.check = this.check.bind(this)
	}

	componentDidMount() {
		super.componentDidMount()

		PrintStore.addChangeListener(this._onStoreChange);
		// ProjectStore.addChangeListener(this._onProjectStore);

		// PrintApi.getAll();
		PrintApi.getByArtist(this.props.idSection)
		ProjectApi.getBySlug(this.props.idSection);
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
		let prints = [], forsale
		_(this.state.prints).forEach((print, index) => {
			// forsale = (print.forsale) ? defaultChecked

			// if (this.state.edit === index && !print.forsale) {
			// 	prints.push(
			// 		<tr key={index}>
			// 			<td>{print.token}</td>
			// 			<td><img src={'/static/img/'+print.file+'_min.jpg'}/></td>
			// 			<td><input className='form__input form__input--text' type='text' id='title'/></td>
			// 			<td><input className='form__input form__input--text' type='text' id='city'/></td>
			// 			<td><input className='form__input form__input--text' type='text' id='country'/></td>
			// 			<td><input className='form__input form__input--text' type='text' id='year'/></td>
			// 			<td><input className='form__input form__input--text' type='text' id='price'/></td>
			// 			<td><input type='submit' className='form__input' /></td>
			// 		</tr>
			// 	)
			// } else {
			// 	prints.push(
			// 		<tr key={index}>
			// 			<td>{print.token}</td>
			// 			<td><img src={'/static/img/'+print.file+'_min.jpg'}/></td>
			// 			<td>{(print.title) ? print.title : '–'}</td>
			// 			<td>{(print.city) ? print.city : '–'}</td>
			// 			<td>{(print.country) ? print.country : '–'}</td>
			// 			<td>{(print.year) ? print.year : '–'}</td>
			// 			<td>{(print.price) ? print.price : 0}€</td>
			// 			<td>
			// 				<input className='admin__checkbox form__input form__input--checkbox' type='checkbox' id={'adminForsale_'+index} defaultChecked={print.forsale}/>
			// 				<label className='form__label form__label--pointer' htmlFor={'adminForsale_'+index}><p className='form__text'>{(print.forsale)?'yes':'no'}</p></label>
			// 			</td>
			// 		</tr>
			// 	)
			// }

			prints.push(
				<tr key={index}>
					<td>{print.token}</td>
					<td><img src={'/static/img/'+print.file+'_min.jpg'}/></td>
					<td>{(print.title) ? print.title : '–'}</td>
					<td>{(print.city) ? print.city : '–'}</td>
					<td>{(print.country) ? print.country : '–'}</td>
					<td>{(print.year) ? print.year : '–'}</td>
					<td>{(print.price) ? print.price : 0}€</td>
					<td>{(print.forsale) ? 'yes' : 'no'}</td>
					<td><a href={'#/admin/'+this.state.project.slug+'/'+print.token}>Edit</a></td>
				</tr>
			)

		}).value()

		let artist
		if (this.state.project) {
			artist = this.state.project.artist
		}

		return (
			<div className='page page--admin' ref='page-wrapper'>
				<div className='admin'>
					<div className='admin__prints'>
						<h1 className='admin__title title'>{artist}</h1>
						<table>
							<tr>
								<th>Token</th>
								<th>Print</th>
								<th>Title</th>
								<th>City</th>
								<th>Country</th>
								<th>year</th>
								<th>Price</th>
								<th>For sale?</th>
								<th></th>
							</tr>
							{prints}
						</table>
						<div className='admin__row'>
							<a href='#/admin' className='button'>Cancel</a>
						</div>
					</div>
				</div>
			</div>
		)
	}

	check(index, e) {
		this.setState({
			edit: index
		})
	}

	_onStoreChange() {
		this.setState({
			project: ProjectStore.getOne(),
			prints: PrintStore.getArtistPrints()
		}, () => {
			_(document.querySelectorAll('.admin__checkbox')).forEach((el, index) => {
				console.log(el, index)
				el.addEventListener('change', this.check.bind(this,index))
			}).value()
		})
	}

}
