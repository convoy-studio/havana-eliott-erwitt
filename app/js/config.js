let env = process.env;

let config = {
	'siteurl': 'http://www.havana-fellowship.com',
	prestashop: {
		proxy: env.PRESTASHOP_API_PROXY_PATH || '/shop/api',
	},
};

if(typeof window !== 'undefined') {
	let getUrl = window.location;
	let baseUrl = getUrl.protocol + "//" + getUrl.host;
	config = {
		'siteurl': baseUrl,
		// 'siteurl': 'http://localhost:3000'
		// 'siteurl': 'http://havana.hi9.fr'
		// 'siteurl': 'http://www.havana-fellowship.com',

	};
}

export default config;
