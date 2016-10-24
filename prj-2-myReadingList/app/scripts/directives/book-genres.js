'use strict';

/**
 * @ngdoc directive
 * @name prj2MyReadingListApp.directive:bookGenres
 * @description
 * # bookGenres
 */
 angular.module('prj2MyReadingListApp')
   .directive('bookGenres', function() {
     return {
       restrict: 'E',
       templateUrl: 'views/book-genres.html',
       scope: {
         genres: '='
       }
     };
 });
