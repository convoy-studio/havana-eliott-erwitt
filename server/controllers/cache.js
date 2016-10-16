export default {

	flush: {

		// Flush the LRU cache; see Hapi server entrypoint script.
		// TODO: put security in front of this route
		handler: (req, reply) => {
			let {cache} = req.server.app;

			cache && cache.reset();

			return reply().code(204);
		}
	}
};