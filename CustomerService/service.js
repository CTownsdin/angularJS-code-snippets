// https://www.youtube.com/watch?v=4ovXYLGFtc4
// services are singletons,
// factories return something that we can use, like APIs and restful services.

// services need to return a single object
// like this...
// AuthService
myApp.factory('AuthService', ['$location', function($location){
  return {
    login = function(creds) {
      if(creds.username == 'admin' && creds.password == '1234'){
        $location.path('/dashboard');
      } else {
        $('.alert.box').show();
      }
    },
    logout = function() {
      $location.path('/');
    }
  };
}]);

// CustomerService
myApp.factory('CustomerService',[function(){
  // todo replaced mockedData with API call and get JSON obj here.
  var mockedData = [
    {name: 'John', address: '123 Main st', city: 'Boston'},
    {name: 'Jane', address: '456 Side st', city: 'Seattle'},
    {name: 'Jill', address: '678 Low st', city: 'Lynnwood'},
    {name: 'Jack', address: 'getOffMyLawn', city: 'Cranksville'}
  ];

  var factory = {};

  factory.getCustomers = function(){
    return mockedData;
  }

  factory.postCustomers = function(customer){
    // code to add customer
  }

  return factory;
}]);
