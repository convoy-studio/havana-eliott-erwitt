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

const env = process.NODE_ENV || 'development';
const config = configs[env];
const server = new Hapi.Server();

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
                console.log(request.url.path);
                if(request.url.path == '/css/build.css' || request.url.path == '/js/build.js' || request.url.path.includes('/assets')){
                    return reply.file(__dirname + '/../static' + request.url.path);
                } else {
                    const location = new Location(request.path, {});
                    const scripts = {
                        development : 'http://localhost:4242/js/build.js',
                        production : '/js/build.js'
                    };

                    Router.run(routes, location, (error, initialState) => {
                        const content = React.renderToString(<Router location={location} {...initialState}/>);
                        const head = Helmet.rewind();
                        
                        // fetchComponentsdata(initialState.components)
                        //     .then((response)=> {
                        //     })

                        if(error){
                            return reply(Boom.badImplementation(err)); // HTTP 500
                        }

                        const html = `
                            <!doctype html>
                            <html>
                                <head>
                                    <meta charSet="UTF-8" />
                                    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=3.0" />
                                    <meta name="google-site-verification" content="OjJk1s2tUx3x9j55kdCnUq2SY1MDEZ9lNa9adNQqnzY" />
                                    <link rel="stylesheet" href="/css/build.css" />
                                    <link rel="icon" type="image/png" href="assets/images/favicon.ico" />
                                    <title>{head.title}</title>
                                    ${head.meta.toString()}
                                </head>
                                <body>
                                    <div id="fb-root"></div>
                                    
                                    <div id="landscape">
                                        <div><p>Please rotate your device</p></div>
                                    </div>

                                    <div id="root" dangerouslySetInnerHTML={{__html: content}}/>

                                    <script src="https://platform.twitter.com/widgets.js" type="text/javascript"></script>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/0.9.0/fetch.js" type="text/javascript"></script>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js" type="text/javascript"></script>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js" type="text/javascript"></script>
                                    <script src="`+scripts[env]+`" type="text/javascript"></script>
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
