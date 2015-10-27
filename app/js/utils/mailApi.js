import MailActions from '../actions/mailActions';
let config = require('../config');

module.exports = {

	send : function(mail) {
		const mailData = {
			'key': 'yLxCSYWSZH8p8vNT83_i3w',
			'message': {
				'from_email': 'nicolas.daniel.29@gmail.com',
				'to': [{
					'email': 'nicolas.daniel.29@gmail.com',
					'name': 'Nicolas Daniel',
					'type': 'to'
				}],
				'subject': 'title',
				'html': 'html can be used'
			}
		};

		console.log(mailData);

		fetch('https://mandrillapp.com/api/1.0/messages/send.json', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mailData)
		});
		// .then(function(response) {
		// 	return response.json();
		// }).then(function(json) {
		// 	OrderActions.created(json);
		// }).catch(function(err) {
		// 	console.log('parsing failed', err);
		// });
	},

	// send templated mail to a specific person
	sendTemplate : function(template, mail) {
		const mailData = {
			'key': 'yLxCSYWSZH8p8vNT83_i3w',
			'template_name': template,
			'template_content': [{
				'name': 'example name',
				'content': 'example content'
			}],
			'message': {
				'from_email': 'nicolas.daniel.29@gmail.com',
				'to': [{
					'email': mail,
					'type': 'to'
				}],
				'subject': 'Elliott Erwitt Havana Club 7 Fellowship - Shop opening subscribe',
				'html': 'html can be used'
			}
		};

		fetch('https://mandrillapp.com/api/1.0/messages/send-template.json', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mailData)
		});
	},

	sendTemplateData : function(mail) {
		const mailData = {
			'key': 'yLxCSYWSZH8p8vNT83_i3w',
			'template_name': 'havana-payment-confirmation',
			'template_content': [{
				'name': 'example name',
				'content': 'example content'
			}],
			'message': {
				'from_email': 'nicolas.daniel.29@gmail.com',
				'to': [{
					'email': 'nicolas.daniel.29@gmail.com',
					'name': 'Nicolas Daniel',
					'type': 'to'
				}],
				'subject': 'Elliott Erwitt Havana Club 7 Fellowship - Shop opening subscribe',
				'merge_language': 'handlebars',
				'global_merge_vars': [
					{
						'name': 'order_id',
						'content': '12345'
					}
				],
				'html': '<h1>order #{{orderid}}</h1>'
			}
		};

		console.log(mailData);

		fetch('https://mandrillapp.com/api/1.0/messages/send-template.json', {
		// fetch('https://mandrillapp.com/api/1.0/messages/send.json', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mailData)
		});
		// .then(function(response) {
		// 	return response.json();
		// }).then(function(json) {
		// 	OrderActions.created(json);
		// }).catch(function(err) {
		// 	console.log('parsing failed', err);
		// });
	},

	// send newsletter to the subscribers
	// template: Mandrill template slug
	// recipients: list of mails/id
	sendDynamicTemplate : function(data) {

		let recipients = [];
		let mergeVars = [];
		_(data.recipients).forEach((recipient)=>{
			recipients.push({
				'email': recipient.mail,
				'type': 'to'
			});
			mergeVars.push({
				'rcpt': recipient.mail,
				'vars': [{
					'name': 'unsubscribe_link',
					'content': config.siteurl + '/unsubscribe?id=' + recipient._id
				}]
			});
		}).value();

		const mailData = {
			'key': 'yLxCSYWSZH8p8vNT83_i3w',
			'template_name': data.template,
			'template_content': [{
				'name': 'example name',
				'content': 'example content'
			}],
			'message': {
				'from_email': 'nicolas.daniel.29@gmail.com',
				'to': recipients,
				'subject': 'Elliott Erwitt Havana Club 7 Fellowship - Newsletter',
				'merge_language': 'handlebars',
				'preserve_recipients': false,
				'merge_vars': mergeVars,
				'html': 'content'
			}
		};

		fetch('https://mandrillapp.com/api/1.0/messages/send-template.json', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mailData)
		});
	},

	getTemplates() {
		const data = {
			'key': 'yLxCSYWSZH8p8vNT83_i3w',
		};

		fetch('https://mandrillapp.com/api/1.0/templates/list.json', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			MailActions.receiveTemplates(json);
		}).catch(function(err) {
			console.log('parsing failed', err);
		});
	}

};