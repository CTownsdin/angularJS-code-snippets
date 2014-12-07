// app.js

var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.myarr = [1,2,3,4,5,5]

  $scope.users = [{name:'Bob',age:23},{name:'Sally',age:42},{name:'Chris',age:29}]

  $scope.ob = {name:'Chris',age:29,title:'Mister'}
})


