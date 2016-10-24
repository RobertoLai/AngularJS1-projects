'use strict';

/**
 * @ngdoc directive
 * @name prj2MyReadingListApp.directive:bookCover
 * @description
 * # bookCover
 */
 angular.module('prj2MyReadingListApp')
 .directive('bookCover', function() {
   return {
     restrict: 'E',
     templateUrl: 'views/book-cover.html',
     replace: true
   };
 });
