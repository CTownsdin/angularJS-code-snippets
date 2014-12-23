'use strict';

var app = angular.module('app', []);

app.controller('MyCtrl',function($scope) {

  $scope.isToggled = false;

  $scope.doToggle = function() {
    if ($scope.isToggled === false){
      $scope.isToggled = true;
    }
    else {
      $scope.isToggled = false;
    }
  };

});
