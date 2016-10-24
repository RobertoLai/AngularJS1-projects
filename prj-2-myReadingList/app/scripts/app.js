'use strict';

/**
 * @ngdoc overview
 * @name prj2MyReadingListApp
 * @description
 * # prj2MyReadingListApp
 *
 * Main module of the application.
 */
angular
  .module('prj2MyReadingListApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
