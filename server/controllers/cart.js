import Boom from 'boom';
import config from '../config';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

const NODE_ENV = process.env.NODE_ENV;

export default {

    sendmail: {
        handler: (req, reply) => {
            let psconfig = config[NODE_ENV].prestashop;
            let url = `${psconfig.frontend.url}/rpc/check_sendmail.php`;
            let data = {};

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: {data: req.payload}
            })

            .then((response) => {
                data = {...data, response};
            })

            .then((state) => {
                let {response} = data;
                let ready = response.status === 200;

                reply({...state, ready}).code(response.status);
            })

            .catch((e) => {
                reply(Boom.badImplementation(e))
            });
  
        }
    }
};
