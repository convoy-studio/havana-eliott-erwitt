var providers = {
	facebook : {
		provider: 'facebook',
        password: 'hapiauth',
        clientId: '646684068764207', // fill in your FB ClientId here
        clientSecret: 'ff23469e91e02c8d9e87a7ed6db8bc27', // fill in your FB Client Secret here
        isSecure: false, // Terrible idea but required if not using HTTPS
        providerParams: {
            display: 'touch'
        }
	},
	twitter : {
		provider: 'twitter',
        password: 'hapiauth',
        clientId: 'kzbkA8DM5uUSiOpVynw4y21nQ', // fill in your Google ClientId here
        clientSecret: '2KszdTHgITuVxfMpEdygHYQZedMMe2SgvzXEfaqQyolMHMuRkK', // fill in your Google Client Secret here
        isSecure: false // Terrible idea but required if not using HTTPS
	}
};

module.exports = providers;