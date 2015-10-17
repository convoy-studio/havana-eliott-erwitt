var project = require('./project');
var print = require('./print');
var order = require('./order');
var auth = require('./auth');

module.exports = [].concat(project, print, order, auth);