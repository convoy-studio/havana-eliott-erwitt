export default {

	flush: {
		// Flush the LRU cache; see Hapi server entrypoint script.
		// TODO: put security in front of this route
		handler: (req, reply) => {
			let {cache} = req.server.app;
			let {key} = req.payload;

			if(cache) {
				if(key) {
					cache.del(key);
				} else {
					cache.reset();
				}
				return reply().code(204);
			}
			return reply().code(500);
		},

	},
};
