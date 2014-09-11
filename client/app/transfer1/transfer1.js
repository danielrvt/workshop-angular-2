'use strict';

angular.module('session2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/transfer1', {
        templateUrl: 'app/transfer1/transfer1.html',
        controller: 'Transfer1Ctrl'
      });
  });
