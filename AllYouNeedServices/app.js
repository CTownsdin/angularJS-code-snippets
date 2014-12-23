var app = angular.module('app', []);

app.controller('MainController',function($scope,MyFactory) {
  console.log(myFactory.getData());
});

app.factory('MyFactory',function() {
  var mydata = 'this cool data, only via getData';
  var privateFunction = function() {};
  return {
    getData: function() {
      return mydata;
    }
  };
});

// one big service
app.factory('DoManyFunctions',function() {
  var gamestuff = [{},{},{}];
  return {
    getGame: function() { return gamestuff; },
    setGame: function() {},
    doStuff: function() {},
    lastly: function() {},
  }
})
