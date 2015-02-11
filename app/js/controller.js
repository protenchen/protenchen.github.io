'use strict';


var customerApp = angular.module('customerApp',[]);

customerApp.controller('CustomerCtrl', ['$scope', '$http', function($scope, $http) {
  var req = {
    method: 'POST',
    url: 'http://asa.gausian.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: $.param({user_app_id:'app_id', service_app_name:'CustomerDataReadWrite', request_string: "GET:;"})
  };


  $http(req).success(function(data) {
    console.log(data.response);
    $scope.customers = angular.fromJson(data.response);
  });

  $scope.showInfo = function(customer) {
      $scope.selectedCustomer=customer;
      $("#editForm").hide();
      $("#informationForm").hide();
      $("#customerInformation").show();
  };

  $scope.showForm = function(flag) {
    if(flag === false){
      $scope.selectedCustomer=null;
    }
    $scope.user = $scope.selectedCustomer;
    $("#customerInformation").hide();
    $("#editForm").show();
  };




  $scope.update = function(user) {

    if ($scope.selectedCustomer === null){
      var req = {
        method: 'POST',
        url: 'http://asa.gausian.com',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $.param({user_app_id:'app_id', service_app_name:'CustomerDataReadWrite',
        request_string: 'SET:first='+user.first+',last='+user.last+
        ',email='+user.email+',company_name='+user.company_name+
        ',department_name='+user.department_name+',work_phone='+user.work_phone+
        ',mobile_phone='+user.mobile_phone+',shipment_address='+user.shipment_address+
        ',shipment_city='+user.shipment_city+',shipment_state='+user.shipment_state+
        ',shipment_zip='+user.shipment_zip+',shipment_country='+user.shipment_country+';'})
      }
      $http(req).success(function(data) {
        console.log(data.response);
        $scope.customers.push(user);
      });
    }
    else{
      var req = {
        method: 'POST',
        url: 'http://asa.gausian.com',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $.param({user_app_id:'app_id', service_app_name:'CustomerDataReadWrite',
        request_string: 'SET:first='+user.first+',last='+user.last+
        ',email='+user.email+',company_name='+user.company_name+
        ',department_name='+user.department_name+',work_phone='+user.work_phone+
        ',mobile_phone='+user.mobile_phone+',shipment_address='+user.shipment_address+
        ',shipment_city='+user.shipment_city+',shipment_state='+user.shipment_state+
        ',shipment_zip='+user.shipment_zip+',shipment_country='+user.shipment_country+';ON:id==['+$scope.selectedCustomer.id+'];'})
      }
      $http(req).success(function(data) {
      });
    };
  };

  $scope.deleteCustomer = function($index) {
    var req = {
      method: 'POST',
      url: 'http://asa.gausian.com',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: $.param({user_app_id:'app_id', service_app_name:'CustomerDataReadWrite',
      request_string: 'DEL:id==['+$scope.selectedCustomer.id+'];'})
    }
    $http(req).success(function(data) {
      $scope.customers.splice($index,1);
    });
  };



  $scope.orderProp = 'customer_id';
}]);
