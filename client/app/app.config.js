angular.module("myApp",['ui.router','ngStorage'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('home',{
		url : '/home',
		templateUrl : 'view/home.html',
		controller : 'homeCltr'
	})
	.state('gausala',{
		url : '/gausala',
		templateUrl : 'view/gausala.html'
	})
	.state('register',{
		url : '/register',
		templateUrl : 'view/registerGausala.html',
		controller : 'registerCltr'
	})
	.state('login',{
		url : '/login',
		templateUrl : 'view/login.html',
		controller : 'loginCltr'
	})
	.state('artical',{
		url : '/artical',
		templateUrl : 'view/artical.html'
	})
	.state('about',{
		url : '/about',
		templateUrl : 'view/about.html',
		controller : 'aboutCltr'
	})

	$urlRouterProvider.otherwise('/home');
}])