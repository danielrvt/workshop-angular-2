'use strict';

angular.module('session2App')
  .controller('Transfer1Ctrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.selectedDestinations = [];
    $scope.sourceAccounts = [
        {label: "Cuenta cuenta", balance: 234.234}, 
        {label: "La cuenta", balance: 123.23}
    ];

    $scope.destinationInstruments = [
        {label: "Cuenta cuenta", id: "8ds75f"}, 
        {label: "La cuenta", id: "d789s6f"}
    ];
    $scope.sourceSelected = function (source) {console.log(source)}
    $scope.destinationChk = function (destination) {console.log(destination)}
    $scope.destinationUnchk = function (destination) {console.log(destination)}
  });
