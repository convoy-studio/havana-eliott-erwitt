import React, { Component } from 'react';
import { Link } from 'react-router';
import NewsletterStore from '../../../stores/newsletterStore';
import NewsletterApi from '../../../utils/newsletterApi';
import MailStore from '../../../stores/mailStore';
import MailApi from '../../../utils/mailApi';
let config = require('../../../config');
let _ = require('lodash');

export default class AdminSubscribersNews extends Component {

	componentWillMount() {

		this.state = {
			subscribers: {},
			templates: {}
		};

		// binded
		this.onStoreChange = this.onStoreChange.bind(this);
		this.sendNewsletter = this.sendNewsletter.bind(this);
		
	}

	componentDidMount() {
		
		NewsletterStore.addChangeListener(this.onStoreChange);
		MailStore.addChangeListener(this.onStoreChange);

		NewsletterApi.getAll();
		MailApi.getTemplates();

	}

	render() {

		let subscribers = [];
		_(this.state.subscribers).forEach((subscriber, index) => {
			subscribers.push(
				<tr key={index}>
					<td>{subscriber.mail}</td>
				</tr>
			)
		}).value();

		let templates = [];
		_(this.state.templates).forEach((template, index) => {
			templates.push(
				<option key={index} value={template.slug}>{template.publish_name}</option>
			)
		}).value();

		return (
			<div className='admin__orders'>
				<h1 className='title title--center title--absolute'><Link to='/admin'>Subscribers opening shop</Link></h1>
				<section className='admin__section'>
					<table>
						<tr>
							<th>Mail</th>
						</tr>
						{subscribers}
					</table>
					<h2 className='subtitle subtitle--center'>Send newsletter</h2>
					<p>Choose the template</p>
					<select ref='template'>
						{templates}
					</select>
					<a href='' className='button' onClick={this.sendNewsletter}>Send a newsletter</a>
				</section>
			</div>
		);

	}

	sendNewsletter(e) {

		e.preventDefault();

		let confirmBox = confirm('Are you sure you want to send a newsletter?');
		if (confirmBox === true) {
			console.log('send newsletter with the template', this.refs.template.getDOMNode().value);
			let data = {
				template: this.refs.template.getDOMNode().value,
				recipients: this.state.subscribers,
				from: 'contact@havana-fellowship.com'
			};
			MailApi.sendDynamicTemplate(data);
		}

	} 

	onStoreChange() {

		this.setState({
			subscribers: NewsletterStore.getAll(),
			templates: MailStore.getTemplates()
		});

	}

}