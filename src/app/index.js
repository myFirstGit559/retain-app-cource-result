"use strict";
var services = require('./services');
var app_1 = require('./app');
exports.App = app_1.App;
var mapArraysToArray = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
exports.providers = mapArraysToArray(services).slice();
