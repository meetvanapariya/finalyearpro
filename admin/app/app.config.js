angular.module("myApp",['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('cow',{
		url : '/cow',
		templateUrl : 'view/cow.html'
	})
	$urlRouterProvider.otherwise('/home');
}])