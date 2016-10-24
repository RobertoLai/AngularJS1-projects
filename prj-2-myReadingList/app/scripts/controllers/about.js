'use strict';

/**
 * @ngdoc function
 * @name prj2MyReadingListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prj2MyReadingListApp
 */
angular.module('prj2MyReadingListApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.page = 'About Page';
  });
