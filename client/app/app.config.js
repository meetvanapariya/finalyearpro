angular.module("myApp",['ui.router','ngStorage'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('home',{
		url : '/home',
		templateUrl : 'view/home.html',
		controller : 'homeCltr'
	})
	.state('register',{
		url : '/register',
		templateUrl : 'view/form.html',
		controller : 'registerCltr'
	})
	.state('login',{
		url : '/login',
		templateUrl : 'view/login.html',
		controller : 'loginCltr'
	})
	.state('userpg',{
		url : '/userpg',
		templateUrl : 'view/userpg.html'
	})
	$urlRouterProvider.otherwise('/home');
}])