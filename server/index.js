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

                    // let head = Helmet.rewind();
                    // console.log(head);

                    Router.run(routes, location, (error, initialState) => {
                        if(error){
                            return reply(Boom.badImplementation(err)); // HTTP 500
                        }  

                        return reply('<!doctype html>\n' + React.renderToString(
                            <html lang="en">
                                <head>
                                    <meta charSet="UTF-8" />
                                    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                                    <title>Elliott Erwitt Havana Club 7 Fellowship</title>
                                    <link rel="stylesheet" href="/css/build.css" />
                                    <link rel="icon" type="image/png" href="assets/images/favicon.ico" />
                                </head>
                                <body>
                                    <div id="fb-root"></div>
                                    <script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=646684068764207" type="text/javascript"></script>

                                    <div id="root" dangerouslySetInnerHTML={{__html: 
                                        React.renderToString(<Router location={location} {...initialState}/>)
                                    }}/>

                                    <script src="https://platform.twitter.com/widgets.js" type="text/javascript"></script>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/0.9.0/fetch.js" type="text/javascript"></script>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js" type="text/javascript"></script>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js" type="text/javascript"></script>
                                    <script src={scripts[env]} type="text/javascript"></script>
                                </body>
                            </html>)
                        );
                    });
                }
            }
        });

        server.start(function () {
            console.log('Server started at: ' + server.info.uri);
        });
    }
});
