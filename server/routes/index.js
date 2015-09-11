var artist = require('./artist');
var project = require('./project');
var print = require('./print');
var order = require('./order');
var user = require('./user');

module.exports = [].concat(artist, project, print, order, user);