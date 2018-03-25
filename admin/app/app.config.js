angular.module("myApp",['ui.router','ngStorage'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('login',{
		url : '/login',
		templateUrl : 'view/login.html',
		controller : 'loginCltr'
	})
	.state('home',{
		url : '/home',
		templateUrl : 'view/home.html',
		controller : 'homeCltr'
	})
	.state('cows',{
		url : '/cows',
		templateUrl : 'view/cow.html'
	})
	$urlRouterProvider.otherwise('/login');
}])