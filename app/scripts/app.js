'use strict';

/**
 * @ngdoc overview
 * @name petstoreApp
 * @description
 * # petstoreApp
 *
 * Main module of the application.
 */
angular
  .module('petstoreApp', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/fact', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
