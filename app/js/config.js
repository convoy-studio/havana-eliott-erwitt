let env = process.env;

let config = {
	'siteurl': 'http://www.havana-fellowship.com'
};

if(typeof window !== 'undefined') {
	let getUrl = window.location;
	let baseUrl = getUrl.protocol + "//" + getUrl.host;
	config = {
		'siteurl': baseUrl
		// 'siteurl': 'http://localhost:3000'
		// 'siteurl': 'http://havana.hi9.fr'
		// 'siteurl': 'http://www.havana-fellowship.com',

    prestashop: {
      key: env.PRESTASHOP_API_KEY,
      scheme: env.PRESTASHOP_API_SCHEME || 'https',
      host: env.PRESTASHOP_API_HOST,
      root: env.PRESTASHOP_API_ROOT || '/api',
    },
	};
}

export default config;
