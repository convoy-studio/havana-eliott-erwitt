var routes = require('./routes/');

var api = {
    register: function(server, options, next){
        server.route(routes);
        next();
    }
}

api.register.attributes = {
    name: 'api',
    version: '1.0.0'
};

module.exports = api;