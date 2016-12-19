import MailActions from '../actions/mailActions';
let config = require('../config');

module.exports = {

	// send mail to Havana from contact page
	sendMail : function(data) {
		const mailData = {
			'key': config.mail.key,
			'message': {
				'from_email': data.mail,
				'from_name': data.name,
				'to': [{
					'email': config.mail.contact_email,
					'type': 'to'
				}],
				'subject': data.subject,
				'html': '<p>' + data.name + ' (' + data.country + ') from www.havana-fellowship.com says:</p><br/><br/><p>' + data.message + '</p>'
			}
		};

		fetch('https://mandrillapp.com/api/1.0/messages/send.json', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mailData)
		});
	},

	// send templated mail to a specific person
	sendTemplate : function(template, mail, from = config.mail.contact_email) {
		const mailData = {
			'key': config.mail.key,
			'template_name': template,
			'template_content': [{
				'name': 'example name',
				'content': 'example content'
			}],
			'message': {
				'from_email': from,
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
			'key': config.mail.key,
			'template_name': data.template,
			'template_content': [{
				'name': 'example name',
				'content': 'example content'
			}],
			'message': {
				'from_email': data.from,
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
			'key': config.mail.key
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