angular.module("myApp")
.controller('loginCltr',function($scope,$state,$localStorage,testFactory){
	var loginresult;
	$scope.homepage = function(){
		$state.go('home');
	}
	$scope.loginData = function(x){
		testFactory.loginData(x)
		.then(function(res){
			loginresult =res.data;
			if(loginresult == 'true'){
				$state.go('userpg');
			}
			else{
				$scope.loginresult = loginresult;
			}
		},function(error){
			console.log(error);
		});
	}
});