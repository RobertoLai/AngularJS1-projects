angular.module('app')
.factory('ActivitiesService', ['$http',function($http) {
	return {
		getActivities: function() {
			return $http.get('activities.json');
		}
	}
}])

/*
* The following code represent another way to realize this service:
* instead of retrieving the complete json file I create a service for every element of the json file.
* It would better in case of a big file to use the following code and implement the controllers consequently
*/

/*
.factory('ActivitiesService', ['$http',function($http) {
	var service = {};

	service.get = function() {
		$http.get('activities.json')
			.success(function(data){service.data = data.activities;})
		  .error(function(data){console.log("ERROR "+ data)})
	}

	service.get();
	return service;
}])
.factory('TeamService', ['$http',function($http) {
	var service = {};

	service.get = function() {
		$http.get('activities.json')
			.success(function(data){service.data = data.team;})
		  .error(function(data){console.log("ERROR "+ data)})
	}

	service.get();
	return service;
}])
.factory('LeadersService', ['$http',function($http) {
	var service = {};

	service.get = function() {
		$http.get('activities.json')
			.success(function(data){service.data = data.leaders;})
		  .error(function(data){console.log("ERROR "+ data)})
	}

	service.get();
	return service;
}])
*/
