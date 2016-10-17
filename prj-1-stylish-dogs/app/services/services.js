angular.module('app')
.factory('ActivitiesService', ['$http',function($http){
	var service = {};

	service.get = function() {
		$http.get('activities.json')
			.success(function(data){service.data = data.activities;})
		  .error(function(data){console.log("ERROR "+ data)})
	}

	service.get();
	return service;
}])
.factory('TeamService', ['$http',function($http){
	var service = {};

	service.get = function() {
		$http.get('activities.json')
			.success(function(data){service.data = data.team;})
		  .error(function(data){console.log("ERROR "+ data)})
	}

	service.get();
	return service;
}])
.factory('LeadersService', ['$http',function($http){
	var service = {};

	service.get = function() {
		$http.get('activities.json')
			.success(function(data){service.data = data.leaders;})
		  .error(function(data){console.log("ERROR "+ data)})
	}

	service.get();
	return service;
}])
