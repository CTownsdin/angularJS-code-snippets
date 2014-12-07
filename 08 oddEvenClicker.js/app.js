// app.js

var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.val = 1
  $scope.even = false

  $scope.inc = function() {
    $scope.val += 1
    $scope.even = $scope.val%2==0
  }

})


// preferred CONTROLLERS way
// angular.module('controllers', []).controller('MainController', function($scope) {
//   $scope.val = 'test789';
// })
