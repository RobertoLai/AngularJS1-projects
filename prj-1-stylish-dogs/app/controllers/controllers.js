/*
* Read the comments in the services/service.js file for another better way of writing and using the ActivitiesService
*/

angular.module("app")
.controller('MainCtrl',[ '$scope', 'ActivitiesService', function($scope, ActivitiesService ) {

    ActivitiesService.getActivities()
      .then(function(data) {
        $scope.leaders = data.data.leaders;
       })

  }])
.controller('AboutCtrl',[ '$scope', 'ActivitiesService', function($scope, ActivitiesService) {

    ActivitiesService.getActivities()
      .then(function(data) {
        $scope.team = data.data.team;
      })

  }])
.controller('ActivitiesCtrl',[ '$scope', 'ActivitiesService', function($scope, ActivitiesService) {

    ActivitiesService.getActivities()
      .then(function(data) {
        $scope.activities = data.data.activities;
      })

  }])
.controller('ContactCtrl',[ '$scope', function($scope) {
    $scope.image = 'mafia.png';
    $scope.title = 'Contact us, we will make you an offer you can\'t refuse...';
  }])
