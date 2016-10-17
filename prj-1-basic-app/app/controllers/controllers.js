angular.module("app")
.controller('MainCtrl',[ '$scope', 'LeadersService', function($scope,LeadersService){
    $scope.leaders = LeadersService;
  }])
.controller('AboutCtrl',[ '$scope', 'TeamService', function($scope,TeamService){
	  $scope.team = TeamService;
  }])
.controller('ActivitiesCtrl',[ '$scope', 'ActivitiesService', function($scope, ActivitiesService){
    $scope.activities = ActivitiesService;
  }])
.controller('ContactCtrl',[ '$scope', function($scope){    
    $scope.image = 'sources/images/mafia.png';
    $scope.title = 'Contact us, we will make you an offer you can\'t refuse...';
  }])
