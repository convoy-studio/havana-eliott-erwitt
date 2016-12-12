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

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: req
            })

            .then((response) => reply().code(204))

            .catch((e) => {
              console.log(e.stack);
              reply(Boom.badImplementation(e))
            });
  
        }
    }
};
