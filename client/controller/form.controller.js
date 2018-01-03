angular.module("myApp")
.controller('registerCltr',function($scope,$rootScope,testFactory){
	$scope.submitData = function(x){
			testFactory.submitData(x).then(function(res){
			$scope.x={};	
			},function(error){
				console.log(error);
			});
		}
});