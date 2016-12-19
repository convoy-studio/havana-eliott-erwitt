import Hapi from 'hapi';
import Boom from 'boom';
import mongoose from 'mongoose';
import configs from './config';
import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Location from 'react-router/lib/Location';
import routes from '../app/js/routes';
import url from 'url'
import acceptLanguage from 'accept-language'
import supportLanguages from '../app/data/languages'
import locales from '../app/js/locales/index'
import prestashop from 'prestashop-api-client';
import LRU from 'lru-cache';

const env = process.env;
const NODE_ENV = env.NODE_ENV || 'development';
const WEBPACK_SERVER_PROXY = env.WEBPACK_SERVER_PROXY || 'localhost:4242';

acceptLanguage.languages(supportLanguages);

const config = configs[NODE_ENV];
const localesJson = JSON.stringify(locales.en)
const cache = new LRU({max: 1000, maxAge: 15 * 60 * 1000}); // 15-minute default TTL
const server = new Hapi.Server();

// add prestashop.client to server.app
server.app = {
	...server.app,
	cache,
	prestashop: {
		client: new prestashop.rest.Client({
			...config.prestashop.client,
			languages: config.prestashop.languages,
		}),
	},
};

server.connection({
    host: config.server.host,
    port: config.server.port
});

//Database setup
mongoose.connect('mongodb://' + config.database.host + '/' + config.database.name);
const db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection with database failed.'));
db.once('open', function(){
    console.log('Connection with database succeeded.');
});


server.register([
    { register : require('bell') },
    { register : require('hapi-auth-jwt')},
    { register : require('./plugins/auth/')},
    { register : require('./api.js') },
    { register : require('good'),
        options: {
            opsInterval: 1000,
            reporters: [{
                reporter: require('good-console'),
                events: {
                    request: '*',
                    log: '*',
                    response: '*',
                    error: '*'
                }
            }]
        }
    }
],
{
    routes : {
        prefix: '/api'
    }
},function(error){
    if(error){
        console.log(error);
    }else {

        // prints
        server.route({
            method: 'GET',
            path: '/static/prints/{filename}',
            handler: function(request, reply) {
                reply.file(__dirname + '/../static/assets/images/prints/' + request.params.filename);
            },
            config: {
                cache: {
                    privacy: 'public',
                    expiresIn: 86400
                }
            }
        });

        // images
        server.route({
            method: 'GET',
            path: '/static/img/{filename}',
            handler: function(request, reply) {
                reply.file(__dirname + '/../static/assets/images/' + request.params.filename);
            },
            config: {
                cache: {
                    privacy: 'public',
                    expiresIn: 86400
                }
            }
        });

        // videos
        server.route({
            method: 'GET',
            path: '/static/videos/{filename}',
            handler: function(request, reply) {
                reply.file(__dirname + '/../static/assets/videos/' + request.params.filename);
            },
            config: {
                cache: {
                    privacy: 'public',
                    expiresIn: 86400
                }
            }
        });

        // fonts
        server.route({
            method: 'GET',
            path: '/static/fonts/{filename}',
            handler: function(request, reply) {
                reply.file(__dirname + '/../static/assets/fonts/' + request.params.filename);
            },
            config: {
                cache: {
                    privacy: 'public',
                    expiresIn: 86400
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/{p*}',
            handler: function(request, reply) {

                if(request.url.path == '/css/build.css' || request.url.path == '/js/build.js' || request.url.path.includes('/assets')){
                    return reply.file(__dirname + '/../static' + request.url.path);
                } else if (request.url.path.includes('/vendors')) {
                    return reply.file(__dirname + '/../static' + request.url.path);
                } else {
                    const location = new Location(request.path, {});
                    const scripts = {
                        development: `http://${WEBPACK_SERVER_PROXY}/js/build.js`,
                        production : '/js/build.js'
                    };

                    Router.run(routes, location, (error, initialState) => {

                        // var url_parts = url.parse(request.url, true);
                        // var query = url_parts.query;

                        // language = acceptLanguage.get(request.headers['accept-language'])
                        // if(query.lang != undefined) {
                        //     var l = 'en'
                        //     for (let lang of supportLanguages) {
                        //         if(query.lang == lang) l = lang
                        //     }
                        //     language = l
                        // }

                        if(location.pathname == '/') {
                            reply().redirect('/en')
                            return
                        }

                        const content = React.renderToString(<Router location={location} {...initialState}/>);
                        const head = Helmet.rewind();
                        let meta = (head && head.meta) ? head.meta.toString() : '';
                        // fetchComponentsdata(initialState.components)
                        //     .then((response)=> {
                        //     })
                        if(error){
                            return reply(Boom.badImplementation(err)); // HTTP 500
                        }

                        const html = `
                            <!doctype html>
                            <html lang="en">
                                <head>
                                    <meta charSet="UTF-8" />
                                    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=3.0" />
                                    <meta name="google-site-verification" content="OjJk1s2tUx3x9j55kdCnUq2SY1MDEZ9lNa9adNQqnzY" />
                                    <link rel="stylesheet" href="/css/build.css" />
                                    <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
                                    <title>{head.title}</title>` +
                                    meta
                                + `</head>
                                <body>
                                    <div id="fb-root"></div>

                                    <div id="landscape">
                                        <div><p>Please rotate your device</p></div>
                                    </div>

                                    <div id="root" dangerouslySetInnerHTML={{__html: content}}/>
                                    
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>
                                    <script async src="https://platform.twitter.com/widgets.js" type="text/javascript"></script>
                                    <script src="/vendors/pdfmake.js" type="text/javascript"></script>
                                    <script src="/vendors/vfs_fonts.js" type="text/javascript"></script>
                                    <script src="`+scripts[NODE_ENV]+`" type="text/javascript"></script>
                                </body>
                            </html>
                        `;

                        return reply(html);

                    });
                }
            }
        });

        server.start(function () {
            console.log('Server started at: ' + server.info.uri);
        });
    }
});
