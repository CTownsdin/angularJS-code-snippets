// app.js

var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.num = 0
  $scope.nums = []

  $scope.increment = function() {
    $scope.num++;
  }

  // $scope.$watch('num', function() {
  //   $scope.nums.push($scope.num)
  // })

  $scope.stopWatch = $scope.$watch('num', function() {
    $scope.nums.push($scope.num)
  })


})
