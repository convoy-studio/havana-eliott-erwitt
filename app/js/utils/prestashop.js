import _ from 'lodash';
import path from 'path';
import xmllib from 'xml2js';

const stringify_query = (query) => {
  let tokens = []; 
  let encode = encodeURIComponent;

  _.each(query, (v, k) => tokens.push(`${encode(k)}=${encode(v)}`));

  return tokens.join('&');
};

class Client {

  /**
   * Return configuration defaults
   * @param void
   * @return {Object}
   */
  defaults () {
    return {
      // PrestaShop API client key
      key: '-secure-',

      // these are for deriving fully qualified API urls 
      scheme: 'https',
      host: 'your-prestashop-api-host',
      root: '/api',

      // fetch dependency (for unit testing)
      fetch: fetch,

      // Headers factory function (for unit testing)
      createHeaders: (dict={}) => {
        let headers = new Headers();

        _.each(dict, (value, key) => headers.append(key, value));

        return headers;
      }
    };
  }

  /**
   * @param {Object} options
   */
  constructor (options={}) {
    this.options = {...this.defaults(), ...options};
  }

  /**
   * @param {String} key
   * @param {mixed} fallback
   */
  option (key, fallback=undefined) {
    let opts = this.options;

    if (!opts.hasOwnProperty(key)) {
      if (fallback === undefined) {
        throw new Error(`option not found ${key}`);
      }
    }

    return opts[key];
  }

  /**
   * Send a GET requet to the API
   * @param {String} key
   * @param {mixed} fallback
   */
  get (path, query={}) {
    let url = this.url(path, query);
    let fetch = this.option('fetch');
    let fopts = this.createFetchOptions({method: 'GET'});

    return fetch(url, fopts).then((response) => this.parseResponse(response));
  }

  /**
   * Given a relative path, return a fully qualified API url
   * @param {String} path - the request path
   * @return {String}
   */
  url (path, query={}) {
    let { key, scheme, host, root } = this.options;
    return path.join(`${scheme}://${key}@${host}`, root);
  }

  /**
   * 
   * @param {String} path - the request path
   * @return {String}
   */
  createFetchOptions (augments={}) {
    let headers = this.option('createHeaders')({Accept: 'text/xml'});

    return {
      headers: headers,
      mode: 'cors',
      cache: 'default',
      ...augments,
    });
  }

  /**
   * Convert the XML body contained in the response into a plain object.
   * Throw an exception if the response is not kosher.
   * @param {Response} response - fetch response
   * @return {Object}
   */
  parseResponse (response) {
    if (!response.ok) {
      throw new Error('got non-2XX HTTP response');
    }
    if (response.headers.get('Content-Type').indexOf('xml') === -1) {
      throw new Error('got non-XML response body');
    }

    try {
      return xmllib.parseString(response.text());
    }
    catch (e) {
      throw new Error('got malformed XML response body');
    }
  }

}

export { Client };
