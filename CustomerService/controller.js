// this controller is going to use service.js

myApp.controller('LoginController',['$scope','AuthService' function($scope, AuthService) {
  $scope.creds = {username: '', password ''};

  $scope.login: function() {
    AuthService.login($scope.creds);
  },
  $scope.login: function() {
    AuthService.logout();
  }
}]);


myApp.controller('CustomerController',['$scope', 'CustomerService', function($scope, CustomerService) {
  $scope.customers = CustomerService.getCustomers();
}])
