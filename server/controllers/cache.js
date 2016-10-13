export default {

	flush: {

		// Flush the LRU cache; see Hapi server entrypoint script.
		handler: (req, reply) => {
			let {cache} = req.server.app;

			cache && cache.reset();

			return reply().code(204); 
		}
	},
	
};

// vim: ts=2 sts=2 sw=2 noet
