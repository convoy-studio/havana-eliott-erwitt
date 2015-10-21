import React, { Component } from 'react';
import { Link } from 'react-router';
import PrintStore from '../../../stores/printStore';
import PrintApi from '../../../utils/printApi';
import Input from '../../modules/input';
let config = require('../../../config');

export default class AdminPrint extends Component {

	componentWillMount(){
		
		this.state = {
			project: undefined,
			prints: undefined,
			edit: undefined,

			forsale: undefined,
			title: undefined,
			city: undefined,
			country: undefined,
			year: undefined,
			price: undefined
		};

		this.onStoreChange = this.onStoreChange.bind(this);
		this.save = this.save.bind(this);
		this.updateTitle = this.updateTitle.bind(this);
		this.updateCity = this.updateCity.bind(this);
		this.updateCountry = this.updateCountry.bind(this);
		this.updateYear = this.updateYear.bind(this);
		this.updatePrice = this.updatePrice.bind(this);
		this.toggleForsale = this.toggleForsale.bind(this);

	}

	componentDidMount() {

		PrintStore.addChangeListener(this.onStoreChange);
		
		PrintApi.getOne(this.props.params.token);

	}

	render() {

		let title, city, country, year, price, file, forsale, artist;
		if (this.state.print) {
			title = this.state.print.title;
			city = this.state.print.city;
			country = this.state.print.country;
			year = this.state.print.year;
			price = this.state.print.price;
			file = '/static/prints/'+this.state.print.file+'_min.jpg';
			forsale = this.state.print.forsale;
			artist = this.state.print.project.artist;
		}

		return (
			<div className='admin__print'>
				<div className='submenu'><Link to={'/admin/project/'+this.props.params.slug} className='button'>Back to project</Link></div>
				<h1 className='title title--center title--absolute'><Link to='/admin'>{artist} — Print</Link></h1>
				<div className='admin__img'><img src={file}/></div>
				<form className='admin__form form'>
					<div className='form__row'>
						<input className='form__input form__input--checkbox' type='checkbox' id='forsale' checked={forsale} onChange={this.toggleForsale} />
						<label className='form__label form__label--pointer' htmlFor='forsale'><p className='form__text'>For sale?</p></label>
					</div>
					<div className='form__row'>
						<label className='form__label' htmlFor='title'>Title</label>
						<Input 
							id='title'
							text={this.state.title}
							updateText={this.updateTitle}
						/>
					</div>
					<div className='form__row'>
						<label className='form__label' htmlFor='city'>City</label>
						<Input 
							id='city'
							text={this.state.city}
							updateText={this.updateCity}
						/>
					</div>
					<div className='form__row'>
						<label className='form__label' htmlFor='country'>Country</label>
						<Input 
							id='country'
							text={this.state.country}
							updateText={this.updateCountry}
						/>
					</div>
					<div className='form__row'>
						<label className='form__label' htmlFor='year'>Year</label>
						<Input 
							id='year'
							text={this.state.year}
							updateText={this.updateYear}
						/>
					</div>
					<div className='form__row'>
						<label className='form__label' htmlFor='price'>Price (€)</label>
						<Input 
							id='price'
							text={this.state.price}
							updateText={this.updatePrice}
						/>
					</div>
					<div className='admin__row'>
						<Link to={'/admin/project/'+this.props.params.slug} className='button'>Cancel</Link>
					</div>
					<div className='admin__row'>
						<a href='' className='button' onClick={this.save}>Save change</a>
					</div>
				</form>
			</div>
		);

	}

	save(e) {

		e.preventDefault()

		PrintApi.update(this.state.print.token, {
			forsale: this.state.forsale,
			title: this.state.title,
			city: this.state.city,
			country: this.state.country,
			year: this.state.year,
			price: this.state.price
		});

	}

	updateTitle(value) {

		this.setState({
			title: value
		});

	}

	updateCity(value) {

		this.setState({
			city: value
		});

	}

	updateCountry(value) {

		this.setState({
			country: value
		});

	}

	updateYear(value) {

		this.setState({
			year: value
		});

	}

	updatePrice(value) {

		this.setState({
			price: value
		});

	}

	toggleForsale() {

		this.setState({
			forsale: !this.state.forsale
		});

	}

	onStoreChange() {

		this.setState({
			print: PrintStore.getOne()
		}, () => {
			this.setState({
				forsale: this.state.print.forsale,
				title: this.state.print.title,
				city: this.state.print.city,
				country: this.state.print.country,
				year: this.state.print.year,
				price: this.state.print.price
			})
		});

	}

}