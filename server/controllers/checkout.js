import Boom from 'boom';
import config from '../config';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

const NODE_ENV = process.env.NODE_ENV;

export default {

  prepare: {
    handler: (req, reply) => {
      let {prestashop: shop} = config[NODE_ENV];

			let {language} = req.params;
      let {items} = req.payload;

			let language_id = shop.languages[language];
			let url = `${shop.frontend.url}/rpc/prepare-cart.php`;
			let data = {};

			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({
					language_id: language_id,
					items: items.map((item) => {
            return {
              product_id: item.product.id,
              combination_id: item.combination.id,
              quantity: item.quantity,  
            };
          }),
				})
			})

			.then((response) => {
				data = {...data, response};
				return response.json();
			})

			.then((state) => {
				let {response} = data;
        let ready = response.status === 200;

				reply({...state, ready}).code(response.status);
			})

			.catch((e) => reply(Boom.badImplementation(e)))
    },
  },
}
