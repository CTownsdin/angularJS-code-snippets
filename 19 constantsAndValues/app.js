// app.js
'use strict';

var app = angular.module('app', []);

app.controller('MainController', function($scope,constantService,valueService) {
  console.log("logging c'serv & v'serv: " + constantService,valueService)
});
// use constants for decorators
app.constant('constantService',{attr: "this is data from constant"})
// use value for delivering values all over
app.value('valueService',function() { return "this is returned from a fn"})

