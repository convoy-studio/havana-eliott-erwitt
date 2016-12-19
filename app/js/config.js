import { merge } from 'lodash';

const env = process.env;

let config = {
	'siteurl': 'http://www.havana-fellowship.com',
		'prestashop': {
			'url': env.PRESTASHOP_FRONTEND_URL,
		},
    'mail': {
        'key': 'WQWpRUmtpFCK_9LBVuxH6w',
        'newsletter_email': 'contact@havana-fellowship.com',
        'reopening_email': 'support@havana-fellowship.com',
        'contact_email': 'contact@havana-fellowship.com'
    }
};

if(typeof window !== 'undefined') {
	let getUrl = window.location;
	let baseUrl = getUrl.protocol + "//" + getUrl.host;

	merge(config, {
		'siteurl': baseUrl,
		// 'siteurl': 'http://localhost:3000'
		// 'siteurl': 'http://havana.hi9.fr'
		// 'siteurl': 'http://www.havana-fellowship.com',
	});
}

export default config;

// vim: ts=2 sts=2 sw=2 noet
