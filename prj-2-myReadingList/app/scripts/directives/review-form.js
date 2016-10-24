'use strict';

/**
 * @ngdoc directive
 * @name prj2MyReadingListApp.directive:reviewForm
 * @description
 * # reviewForm
 */
 angular.module('prj2MyReadingListApp')
 .directive('reviewForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/review-form.html',
    replace: true,
    controller: 'ReviewCtrl',
    controllerAs: 'review',
    scope: {
      books: '=',
      genres: '='
    }
  };
 });
