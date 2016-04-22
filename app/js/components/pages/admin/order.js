import React, { Component } from 'react';
import { Link } from 'react-router';
import OrderStore from '../../../stores/orderStore';
import OrderApi from '../../../utils/orderApi';
let config = require('../../../config');
let _ = require('lodash');
// let PDFDocument = require('pdfkit');
// let blobStream = require('blob-stream');
// let pdfMake = require('pdfmake');

export default class AdminOrder extends Component {

	componentWillMount(){

		this.state = {
			order: undefined,
			updated: undefined,
			error: undefined
		};

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.save = this.save.bind(this);
		this.getPdf = this.getPdf.bind(this);

	}

	componentDidMount() {

		OrderStore.addChangeListener(this.onStoreChange);

		OrderApi.getOne(this.props.params.token);

	}

	render() {

		let id, date, orderId, tracking, mail, prints = {}, total, transactionId, state, stateLabel, firstname, lastname, phone, address, zip, city, country, billFirstname, billLastname, billPhone, billAddress, billZip, billCity, billCountry, select;

		if (this.state.order) {
			id = this.state.order._id;
			date = (new Date(this.state.order.date)).toLocaleString();
			orderId = this.state.order.token;
			tracking = this.state.order.tracking;
			mail = this.state.order.mail;
			prints = this.state.order.prints;
			total = this.state.order.total;
			transactionId = this.state.order.transactionId;
			state = this.state.order.state;

			firstname = this.state.order.firstname;
			lastname = this.state.order.lastname;
			phone = this.state.order.phone;
			address = this.state.order.address;
			zip = this.state.order.zip;
			city = this.state.order.city;
			country = this.state.order.country;

			billFirstname = this.state.order.billFirstname || this.state.order.firstname;
			billLastname = this.state.order.billLastname || this.state.order.lastname;
			billPhone = this.state.order.billPhone || this.state.order.phone;
			billAddress = this.state.order.billAddress || this.state.order.address;
			billZip = this.state.order.billZip || this.state.order.zip;
			billCity = this.state.order.billCity || this.state.order.city;
			billCountry = this.state.order.billCountry || this.state.order.country;

			if (state === 'Nouvelle commande') {
				select = (
					<select id='orderState' name='orderState'>
						<option value="Nouvelle commande" selected>Nouvelle commande</option>
						<option value="Commande expédiée">Commande expédiée</option>
					</select>
				);
			} else {
				select = (
					<select id='orderState' name='orderState'>
						<option value="Commande expédiée" selected>Commande expédiée</option>
					</select>
				);
			}
		}

		let inputTracking;
		if (tracking) {
			inputTracking = (<p>{tracking}</p>);
		} else {
			inputTracking = (<input id='tracking' type='text' placeholder='Tracking' />);
		}

		return (
			<div className='admin__order'>
				<div className='submenu'><Link to='/admin/orders' className='button'>Retour aux commandes</Link></div>
				<h1 className='title title--center title--absolute'><span><Link to='/admin'>Commande — {orderId}</Link></span></h1>

				<section className='admin__section'>
				<h2 className='subtitle'>Date</h2>
				<p>{date}</p>
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Adresse de livraison</h2>
					<p><span className='admin--uppercase'>{lastname}</span> {firstname}</p>
					<p>{address}</p>
					<p>{zip} <span className='admin--uppercase'>{city}</span>, {country}</p>
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Adresse email</h2>
					<p>{mail}</p>
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Numéro de téléphone</h2>
					<p>Tél. : {phone}</p>
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Référence(s) photo(s)</h2>
					{Object.keys(prints).map((index) => {
						const product = prints[index];
						const serial = (parseInt(product.serial, 10) < 10) ? '0' + product.serial : product.serial;
						const logisticId = product.logistic_id + '_' + serial;

						return (
							<p>{logisticId}</p>
						)
					})}
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Total de la commande</h2>
					<p>{total} €</p>
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Numéro de transaction</h2>
					<p>{transactionId}</p>
				</section>

				<section className='admin__section'>
					<h2 className='subtitle'>Numéro de tracking</h2>
					{inputTracking}
				</section>

				<section className='admin__section'>
					<a className='admin__pdf' href='' onClick={this.getPdf}>Télécharger une copie de la commande</a>
				</section>

				<div className='admin__section'>
					<h2 className='subtitle'>état de la commande</h2>
					<div className='form__select'>
						{select}
					</div>
				</div>

				<section className='admin__section'>
					<a href='' className='button' onClick={this.save}>Enregistrer</a>
					{(this.state.error) ? (<div className='text'>{this.state.error}</div>) : null}
					{(this.state.updated && this.state.updated.message === 'success') ? (<div className='text'>Modifications de la commande enregistrées</div>) : null}
					{(this.state.updated && this.state.updated.message === 'error') ? (<div className='text'>Une erreur est survenur lors de la modification de la commande</div>) : null}
				</section>


			</div>
		);
										// <div className='cart__artist'>{product.project.artist}</div>
				//<section className='admin__section'>
				// 	<h2 className='subtitle'>Information</h2>
				// 	<p>State : {stateLabel}</p>
				// 	<p>Total : {total/100}€</p>
				// </section>

				// <section className='admin__section'>
				// 	<h2 className='subtitle'>Checkout</h2>
				// </section>

				// <section className='admin__section'>
				// 	<h2 className='subtitle'>Shipping address</h2>
				// 	<p>Firstname : {firstname}</p>
				// 	<p>Lastname : {lastname}</p>
				// 	<p>Phone : {phone}</p>
				// 	<p>Address : {address}</p>
				// 	<p>Zip : {zip}</p>
				// 	<p>City : {city}</p>
				// 	<p>Country : {country}</p>
				// </section>

				// {(() => {
				// 	if (billFirstname) { return (
				// 		<section className='admin__section'>
				// 			<h2 className='subtitle'>Billing address</h2>
				// 			<p>Firstname : {billFirstname}</p>
				// 			<p>Lastname : {billLastname}</p>
				// 			<p>Phone : {billPhone}</p>
				// 			<p>Address : {billAddress}</p>
				// 			<p>Zip : {billZip}</p>
				// 			<p>City : {billCity}</p>
				// 			<p>Country : {billCountry}</p>
				// 		</section>
				// 	)}
				// }.bind(this))()}

				// <section className='admin__section'>
				// 	<h2 className='subtitle'>Order details</h2>
				// 	<ul className='payment__products cart__products'>
				// 		{Object.keys(prints).map((index) => {
				// 			let product = prints[index];
				// 			let details
				// 			if (product.title) details = product.title+'. '+product.city+'. '+product.country+'. '+product.year
				// 			else details = product.city+'. '+product.country+'. '+product.year

				// 			return (
				// 				<li key={index} className='payment__product cart__product'>
				// 					<div className='cart__column'>
				// 						<div className='cart__details'>{details}</div>
				// 						<div className='cart__serial'>Edition <span className='cart__number'>{product.serial}</span></div>
				// 						<div className='cart__price'>{product.price}<span className='cart__currency'>€</span></div>
				// 					</div>
				// 					<div className='cart__column'>
				// 						<div className='cart__print'><img className='cart__image' src={'/static/prints/'+product.file+'_min.jpg'}></img></div>
				// 					</div>
				// 				</li>
				// 			)
				// 		}.bind(this))}
				// 	</ul>
				// </section>

				// <section className='admin__section'>
				// 	<a href='' className='button' onClick={this.onClickDelivered}>Delivered</a>
				// 	{(this.state.updated && this.state.updated.message === 'success') ? (<div className='text'>Order state updated</div>) : null}
				// </section>

	}

	onStoreChange() {

		this.setState({
			order: OrderStore.getOne(),
			updated: OrderStore.getUpdated()
		});

	}

	save(e) {

		e.preventDefault();

		let tracking = document.getElementById('tracking').value;
		let status = document.getElementById('orderState').value;

		if (tracking === '') {
			this.setState({
				error: 'Veuillez renseigner le numéro de tracking'
			});
		} else {
			this.setState({
				error: undefined
			});
			OrderApi.updateOrder(this.state.order._id, status, tracking);
		}

	}

	getPdf(e) {

		e.preventDefault();

		let id = this.state.order._id;
		let orderId = this.state.order.token;
		let date = (new Date(this.state.order.date)).toLocaleString();
		let mail = this.state.order.mail;
		let prints = this.state.order.prints;
		let total = this.state.order.total;
		let state = this.state.order.state;
		let transactionId = this.state.order.transactionId;
		let tracking = this.state.order.tracking || '-';

		let firstname = this.state.order.firstname;
		let lastname = this.state.order.lastname;
		let phone = this.state.order.phone;
		let address = this.state.order.address;
		let zip = this.state.order.zip;
		let city = this.state.order.city;
		let country = this.state.order.country;

		let billFirstname = this.state.order.billFirstname || this.state.order.firstname;
		let billLastname = this.state.order.billLastname || this.state.order.lastname;
		let billPhone = this.state.order.billPhone || this.state.order.phone;
		let billAddress = this.state.order.billAddress || this.state.order.address;
		let billZip = this.state.order.billZip || this.state.order.zip;
		let billCity = this.state.order.billCity || this.state.order.city;
		let billCountry = this.state.order.billCountry || this.state.order.country;

		var refs = [];
		_(prints).forEach((print, index) => {
			let product = prints[index];
			let serial = (parseInt(product.serial, 10) < 10) ? '0' + product.serial : product.serial;
			let logisticId = product.logistic_id + '_' + serial;
			refs.push({text:logisticId});
		}).value();

		var docDefinition = {
			content: [
				{
					image: 'data:image/png;base64,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BAKBQCAwpQiEEjelBRdsBwKBQCAQCAQCgcBsIxBK3GyXf+Q+EAgEAoFAIBAIBKYUgVDiprTggu1AIBAIBAKBQCAQmG0EQomb7fKP3AcCgUAgEAgEAoHAlCIQStyUFlywHQgEAoFAIBAIBAKzjUAocbNd/pH7QCAQCAQCgUAgEJhSBEKJm9KCC7YDgUAgEAgEAoFAYLYRCCVutss/ch8IBAKBQCAQCAQCU4pAKHFTWnDBdiAQCAQCgUAgEAjMNgLLznb2I/eBQCCwNBH45z//2fzud79r/vGPfzT3uMc9mvve975Lk51IOxAIBAKBqUIglLipKq5gdhII/Otf/2qOOOKI5m9/+1vTtm0mKT43cq19fS1hll122WaDDTZoVlllleYPf/hDs8022zR3utOdBr+73OUug+s73vGOjfzucIc75Gto/vvf/84/lBj4efrTn95stdVWJNH89a9/bQ455JBmmWWWyT/i8eNeX3MPL6uvvnrz5Cc/Ocet/ZH/Y489tvnlL385oAM9nNCVdOB5hRVWaF760pfWSPZ+R55/+tOfNp/+9Keb0047rbnuuuua//znPxlz0rznPe/ZPOxhD2se85jHNOuvv36z1lprNXe9612r9In/3e9+tznyyCObX//6181vf/vbjCXY8g4n+cEHq7vd7W7NiSeeuGBKI8rpQQcd1PziF78YlLstf3hBRv7rv/6rWX755Qd5JO7ZZ5+df5QRcnD/+9+/ecADHtA86EEPau5zn/tkpXellVZqXv7yl+d4f//735vTTz894wjG8uOlXOOTJjKCzHru97//fXPqqac2yAh88POuwXXttdduFi9e3Jx//vnNJz7xiRxOZFMwpuzufve7Z7xR0rfeeuvmzne+c/OlL30p8/urX/2q+ctf/pLLi7Qol3vf+97Nve51r/yT64c85CHNE57whOaxj33sgpWZh0c8CwRu6wiEEndbL6Hgb+II0NHQER511FFZoRgnATpEOqMVV1wxd4h0Wlyfcsopzc9//vOB4gVt0uMnTl/zTDpZOtg//vGPWYnjGcrIMccckxUTiYtv48PHi170ouZ5z3ueDla8RrmBz69//esDJUcCa9rw89SnPrXZfvvt5fXYPvm55pprmv3226+56KKLcj7//Oc/ZyVBEyX9q6++uvnqV7/afOYzn8kK3cte9rJmo402yrzosPb63HPPbX72s58NlELStA5F6jnPeU7zqEc9KuNu39t7sILulVdememiqPexFpLOaqutlhXFk046KStdQps8otCALUoqsoiD35/85CfNtttum5VS8BFFVBRAfMqF34YbbjhQ4hgAoHx95StfyQqRpCU+tEmXfB9++OHyeI6PHF9++eXNGWec0dx8880DjIgveMLD4qS8bbLJJpkmco/i/b//+795MCMyBI9c4xOGAQ/3/B760IdmPlE8RYmHvuTN+qSJnKP0ooButtlmzStf+cqs9M3JRDwIBGYIgWVSxZnb0s0QAJHV2UTgT3/6U3P99dc3O+64Y3PBBRcMgUCHQQf1rGc9K1sD6DjoJH/zm99kC8I555yTw9OpfOQjH2m22GKL3MExLYgCR2eFhUkc9F74whc2K6+8crZWYNmQzhkfuvBAp43Fiw4URzjoXXbZZc3OO++c+RWa+HSGWCfoPMVCAU9djiqPhQeF4a1vfWvzxS9+cU4ULCAouWussUa2jKB0jOvII5313nvvndMESzrpJz3pSVnxpFMmH/CFZeZ73/te87nPfa659NJLczisc1hmnvGMZzTvec97skJgecGSSZ4uueSSZv/992++853v2CDZArf77rs3u+66a7aQ3u9+98v05wRUD7CwPvOZz2xuvPHGHAcF6FWvepUKUb7EOoZMvPvd784WVUKSb+Tqwx/+cIN1CSsV+aMsb7jhhkwb5RqrFGWJNRLLGfnHysg7rFjQwRKGxQ6HIgSP3/jGN7KCA8baIYOEx7KL1a9k3aQMkEfKgXxSFtrBExZP5BT8uKd8seB99rOfbV7zmtfo4Pma+vOpT30qW4pRWMkr+bvpppuyFfL8ZMkTJwreVskajVWbMFgzf/CDHzRXXXVVDkaayOdTnvKUbFF++MMfLtHDDwRmD4FUacMFAjOJQOr42zStyCBm6Jc6uPbb3/52m6xibVKs2jTdk/3UobdJqWqT4tOmTrFNnUn7sY99bAi71Hm2yVozRI9whx12WJs6x/xLFo5WfqljblPn3SYlrk3TZe0LXvCCIXrcwEPqfIdownPq5DLd1CHOidPnAfGSUjCHLnlLlo42TeP1IVMNA4199tmnTdOAbVI8clrgkSxybbKaZTySQt1SFvzAOik+bVKC26QQDPGWlIE2KcJtUlyKaYI/cZMiPRQXvEj3/e9/fzGufZGU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',
					width: 250,
					alignment: 'center',
					margin: [ 0, 0, 0, 54 ]
				},{
					text: 'DATE',
					style: 'title'
				},{
					text: date,
					style: 'lastLine'
				},{
					text: 'ADRESSE DE LIVRAISON',
					style: 'title'
				},
				lastname + ' ' + firstname,
				address,
				{
					text: zip + ' ' + city + ', ' + country,
					style: 'lastLine'
				},{
					text: 'ADRESSE EMAIL',
					style: 'title'
				},{
					text: mail,
					style: 'lastLine'
				},{
					text: 'NUMÉRO DE TÉLÉPHONE',
					style: 'title'
				},{
					text: 'Tél.: ' + phone,
					style: 'lastLine'
				},{
					text: 'RÉFÉRENCE(S) PHOTO(S)',
					style: 'title'
				},{
					ul: refs
				},{
					text: 'TOTAL DE LA COMMANDE',
					style: 'title',
					margin: [ 0, 24, 0, 6 ]
				},{
					text: (total) + '€',
					style: 'lastLine'
				},{
					text: 'NUMÉRO DE TRANSACTION',
					style: 'title'
				},{
					text: transactionId,
					style: 'lastLine'
				},{
					text: 'NUMÉRO DE TRACKING',
					style: 'title'
				},{
					text: '' + tracking,
					style: 'lastLine'
				}
			],
			footer: {
				text: 'www.havana-fellowship.com',
				fontSize: 12,
				alignment: 'center'
			},
			styles: {
				title: {
					fontSize: 14,
					bold: true,
					margin: [ 0, 0, 0, 6 ]
				},
				lastLine: {
					margin: [ 0, 0, 0, 24 ]
				}
			},
			pageMargins: [ 60, 60, 60, 60 ]
		};

 		pdfMake.createPdf(docDefinition).open();

	}

}
