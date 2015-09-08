var artist = require('./artist');
var project = require('./project');
var print = require('./print');
var order = require('./order');

module.exports = [].concat(artist, project, print, order);