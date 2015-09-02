var Hapi = require('hapi');
var mongoose = require('mongoose');
var env = process.NODE_ENV || 'development';
var config = require('./config')[env];

var server = new Hapi.Server();

server.connection({
    host: config.server.host,
    port: config.server.port,
    routes : {
        cors: true
    }
});

//Database setup
mongoose.connect('mongodb://' + config.database.host + '/' + config.database.name);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection with database failed.'));
db.once('open', function(){
    console.log('Connection with database succeeded.');
});

server.register([
    { register : require('bell') },
    { register: require('./api.js') },
    {
        register: require('good'),
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
],{
    routes : {
        prefix: '/api'
    }
},function(error){
    if(error){
        console.log(error);
    }else {
        server.route({
            method: 'GET',
            path: '/static/img/{filename}',
            handler: function(request, reply) {
                reply.file(config.output.path + '/assets/images/prints/' + request.params.filename);
            },
            config: {
                cache: {
                    expiresIn: 86400
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/{path*}',
            handler: {
                directory: {
                    path: config.output.path,
                    index: true
                }
            }
        });

        server.start(function () {
            console.log('Server started at: ' + server.info.uri);
        });
    }
});