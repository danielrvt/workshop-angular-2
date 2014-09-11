'use strict';

angular.module('session2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/results', {
        templateUrl: 'app/results/results.html',
        controller: 'ResultsCtrl'
      });
  });
