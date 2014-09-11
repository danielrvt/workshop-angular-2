'use strict';

angular.module('session2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      })
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'    
      });

    $locationProvider.html5Mode(true);
  });
