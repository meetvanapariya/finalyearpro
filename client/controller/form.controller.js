// angular.module("myApp")
// .controller('registerCltr',function($scope,$rootScope,testFactory){
// 	$scope.submitData = function(x){
// 			testFactory.submitData(x).then(function(res){
// 			$scope.x={};	
// 			},function(error){
// 				console.log(error);
// 			});
// 		}
// });
angular.module("myApp")
.controller('registerCltr',function($scope,$rootScope,testFactory){
	$scope.checkName = function(x){
		var regex = "[a-zA-Z]";
		var name;
		if(x != null){
		if(x.match(regex)){
			name ="true";
		}
		else{
			name = "false";
		}
		}
		else{
			name = "false";
		}
		$scope.result1 = name;
	}
	$scope.checkAdd =function(x){
		if(x != null){
			name = "true";
		}
		else{
			name = "false";
		}
		$scope.result2 = name;
	}
	$scope.checkNo = function(x){
		var regex = "^[7-9][0-9]{9}$";
		if(x != null){
			if(x.match(regex)){
				name ="true";
			}
			else{
				name ="false";
			}
		}
		else{
			name ="false";
		}
		$scope.result3 = name;
	}
	$scope.checkUsrName = function(x1){
		console.log(x1);
		if(x1== null|| x1== undefined){
			alert("username cannot be blank");
			return;
		}
		testFactory.checkName(x1)
		.then(function(res){
			$scope.usernameAva= res.data;			
		},function(error){
			console.log(error);
		});
	}
	$scope.submitData = function(x){
			if($scope.usernameAva =='true'){
				alert("choose unique username");
				return;
			}
			testFactory.submitData(x).then(function(res){
			$scope.x={};
			alert("successfully added");	
			},function(error){
				console.log(error);
			});
		}
		
});