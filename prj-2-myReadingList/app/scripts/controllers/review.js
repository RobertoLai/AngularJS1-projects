'use strict';

/**
 * @ngdoc function
 * @name prj2MyReadingListApp.controller:ReviewCtrl
 * @description
 * # ReviewCtrl
 * Controller of the prj2MyReadingListApp
 */
angular.module('prj2MyReadingListApp')
  .controller('ReviewCtrl', ['$scope', 'booksstoreService',function ($scope, booksstoreService) {
    $scope.book = {
      title: '',
      author: '',
      isbn: '',
      review: '',
      rating: 3,
      genres: {}
    };

    $scope.addReview = function(form, book) {
      console.log(book);

      booksstoreService
        .addReview(book)
        .then(function() {
          $scope.book = { genres:{} };
          form.$setPristine();
        });
    };

  }]);
