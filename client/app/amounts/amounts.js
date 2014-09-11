'use strict';

angular.module('session2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/amounts', {
        templateUrl: 'app/amounts/amounts.html',
        controller: 'AmountsCtrl'
      });
  });
