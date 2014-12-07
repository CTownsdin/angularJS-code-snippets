// app.js
'use strict';

var app = angular.module('app', []);

app.controller('MainController', function($scope,myFactory,myService) {
  console.log(myService.getData());
  myService.addData('add this data via addData');
  console.log(myService.getData());
});

// returning an object
app.factory('myFactory', function() {
  var myString = "this is some other factory data";
  var addToString = function(newstr) {
    myString += newstr;
  };
  return {              // returning an object
    getData: function() {
      return "String contains: " + myString;
    },
    addData: addToString
  };
});

// When utilized, Service declares a new instance of a class.
app.service('myService',ServiceClass);

// the class fed into myService
function ServiceClass() {
  var myString = "this is some other String data";
  var addToString = function(newstr) {
    myString += newstr;
  };
  this.getData = function() {
    return "String contains: " + myString;
  };
  this.addData = addToString;
}

