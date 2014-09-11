'use strict';

angular.module('session2App')
  .controller('AmountsCtrl', function ($scope, $route) {
    $scope.message = 'Hello';
    $scope.source = {label: "Cuenta propia de ahorro"};
    $scope.selectedInstruments = [{label: "Cuenta de mama"}, {label: "Cuenta de papa"}];
  });
