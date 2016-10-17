angular.module("app",['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/main',
     {
      templateUrl:'app/templates/main.html',
      controller:'MainCtrl'
     }) 
	.when('/about',
	 {
      templateUrl:'app/templates/about.html',
      controller:'AboutCtrl'
     }) 
	.when('/activities',
     {
      templateUrl:'app/templates/activities.html',
      controller:'ActivitiesCtrl'
     })
	.when('/contact',
     {
      templateUrl:'app/templates/contact.html',
      controller:'ContactCtrl'
     }) 
    .otherwise({redirectTo:'/main'})
  }])

