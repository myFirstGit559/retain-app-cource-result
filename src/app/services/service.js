"use strict";
var services = require('./service');
var api_1 = require('./api');
exports.ApiService = api_1.ApiService;
var mapArraysToArray = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
exports.providers = mapArraysToArray(services).slice();
