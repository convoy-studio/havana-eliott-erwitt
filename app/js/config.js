const env = process.env;

let config = {
	'siteurl': 'http://www.havana-fellowship.com',
};

if(typeof window !== 'undefined') {
	let getUrl = window.location;
	let baseUrl = getUrl.protocol + "//" + getUrl.host;
	config = {
		'siteurl': baseUrl,
		// 'siteurl': 'http://localhost:3000'
		// 'siteurl': 'http://havana.hi9.fr'
		// 'siteurl': 'http://www.havana-fellowship.com',
		prestashop: {
			languages: {
				// ISO code => prestashop language id
				'en': 1,
				'es': 2,
			},
			proxy: {
				scheme: window.location.protocol.slice(0, -1),
				host: window.location.host,
				root: '/shop/api',
			},
		},
	};
}

export default config;

// vim: ts=2 sts=2 sw=2 noet
