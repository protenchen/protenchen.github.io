'use strict';


var customerApp = angular.module('customerApp',[]);

customerApp.controller('CustomerListCtrl', function($scope, $http) {
  var req = {
    method: 'POST',
    url: 'http://asa.gausian.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: $.param({user_app_id:'app_id', service_app_name:'CustomerDataReadWrite', request_string: "GET:;"})
  };


  $http(req).success(function(data) {
    console.log('done');
    console.log(data.response);
    $scope.customers = angular.fromJson(data.response);
  });

  $scope.showInfo = function(customer) {
      $scope.customer=customer;
      $("#editForm").hide();
      $("#informationForm").hide();
      $("#customerInformation").show();
  }
  $scope.orderProp = 'customer_id';
});
