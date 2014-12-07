// app.js

var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.mydata = {val:"chris"}

  $scope.$watch('mydata.val', function(newval) {
    $scope.mydata.toolong = newval.length > 15

  })

})



