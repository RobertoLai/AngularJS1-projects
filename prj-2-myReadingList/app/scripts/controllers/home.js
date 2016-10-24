'use strict';


/**
 * @ngdoc function
 * @name prj2MyReadingListApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the prj2MyReadingListApp
 */
angular.module('prj2MyReadingListApp')
  .controller('HomeCtrl', ['$scope','booksstoreService',function ($scope, booksstoreService) {

      booksstoreService
        .allBooks()
        .then(function(data) {
          $scope.books = data.data;
        });
      booksstoreService
        .allGenres()
        .then(function(data) {
          $scope.genres = data.data;
        });

  }]);
