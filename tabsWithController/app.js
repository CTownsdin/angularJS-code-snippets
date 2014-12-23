'use strict';
var app = angular.module('app', []);
//console.log('app loaded?, yep');

app.controller('TabController', function() {
  this.tab = 1;  // init with 1

  this.selectTab = function(aTab) {
    this.tab = aTab;
  };

  this.isSelected = function(tabToCheck) {
    // is it this.tab?  return T or F;
    return this.tab === tabToCheck;
  };
});

