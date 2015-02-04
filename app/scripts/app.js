'use strict';

/**
 * @ngdoc overview
 * @name angularPortfolioApp
 * @description
 * # angularPortfolioApp
 *
 * Main module of the application.
 */
var angularPortfolioApp = angular
  .module('angularPortfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  
angularPortfolioApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
