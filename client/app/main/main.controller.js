'use strict';

angular.module('session2App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.username = "";
    $scope.password = "";

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });


    $scope.login = function (username, password) {
        console.log(username, password);
        $http.post('api/sessions', {"email": $scope.username, "password": $scope.password})
            .success(function (session) {
            alert(session);    
        }).error(function (data, status) {
            alert(status + " " + data);
        });
    };
  });
