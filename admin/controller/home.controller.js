angular.module("myApp")
.controller('homeCltr',function($scope,testFactory,$localStorage){
	$scope.gsdata = $localStorage.LocalMessage;
	console.log($scope.gsdata);
});