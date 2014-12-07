// app.js

var app = angular.module('app', []);

// app.controller('MainController', function($scope) {
//   $scope.mydata = {arr:["jane","jake","janice","steven","hank"]}
// })

app.controller('MainController', function($scope) {
  $scope.mydata = {arr: [
    {name:"jane",age:34},
    {name:"jake",age:56},
    {name:"shell",age:25},
    {name:"joe",age:44}
    ]
  };
})

