import MetaInspector from 'node-metainspector';

const controller = {

	crawlWebsite : {
		handler : function(request, reply){
			const payload = request.payload;
			const client = new MetaInspector(payload.url, {});
			client.on('fetch', function(){
				const response = {
					url : client.url,
					rootUrl : client.rootUrl,
					host : client.host,
					title : client.title,
					desc : client.description,
					image : client.image
				};

				return reply(response);
			});

			client.on('error', function(err){
			    console.log(error);
			});
			 
			client.fetch();
		}
	},

	getCrawl : {
		handler : function(request, reply){
			return reply('test');
		}
	}

};

export default controller;