angular.module("myApp")
.controller('loginCltr',function($scope,$state,testFactory,$localStorage){
	var loginresult;
	$scope.loginData = function(x){

		testFactory.loginData(x)
		.then(function(res){
			loginresult =res.data;
			if(loginresult){
				$state.go('home');
				  $localStorage.LocalMessage = loginresult;
				  console.log(loginresult);
			}
			else{
				$scope.loginresult = "error";
			}
		},function(error){
			console.log(error);
		});
	}
});