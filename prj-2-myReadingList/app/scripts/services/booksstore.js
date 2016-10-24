'use strict';

/**
 * @ngdoc service
 * @name prj2MyReadingListApp.booksstore
 * @description
 * # booksstoreService
 * Service in the prj2MyReadingListApp.
 */
angular.module('prj2MyReadingListApp')
  .constant('dbUrl','http://localhost:3000/')
  .factory('booksstoreService',['$http','dbUrl',function($http,dbUrl) {
    return {
      allBooks: function() {
        return $http.get(dbUrl + 'books');
      },
      allGenres: function() {
        return $http.get(dbUrl + 'genres');
      },
      addReview: function(book) {
        return $http.post(dbUrl + 'books', book);
      }
    };
  }])
  ;

  /*
  Alternative way of realizing this service:
  a service for every element of the json file

  .factory('getBooksService', ['$http','dbUrl',function($http,dbUrl) {
  	var service = {};

  	service.get = function() {
  		$http.get(dbUrl + 'books')
  			.success(function(data){
          service.books = data;
        })
  		  .error(function(data){ console.log("ERROR "+ data);} );
  	};

  	service.get();
  	return service;
  }])
  .factory('getGenresService', ['$http','dbUrl',function($http,dbUrl) {
  	var service = {};

  	service.get = function() {
  		$http.get(dbUrl + 'genres')
  			.success(function(data){
          service.genres = data;
        })
  		  .error(function(data){ console.log("ERROR "+ data); });
  	};

  	service.get();
  	return service;
  }])
  .factory('updateBookService', ['$http','dbUrl',function($http,dbUrl) {
    var service = {};

    service.update = function(book) {
          $http.post(dbUrl + 'books', book)
          .success(function(data, status){ console.log("data"); })
          .error(function(data){ console.log("ERROR POST "+ data); });
    };

    return service;
  }])
  ;
  */
