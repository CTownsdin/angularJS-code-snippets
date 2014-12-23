'use strict';

angular.module('app', []).
  controller('ctrl', function($scope) {
    $scope.rowList = [{
      col1: {value: 'r1c1'},
      col2: {value: 'r1c2'}
    }, {
      col1: {value: 'r2c1'},
      col2: {value: 'r2c2'}
    }, {
      col1: {value: 'r3c1'},
      col2: {value: 'r3c2'}
    }];
  });
