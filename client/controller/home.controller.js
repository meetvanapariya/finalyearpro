angular.module("myApp")
.controller('homeCltr',function($scope,$interval){
	$scope.img="assets/images/cowa4.jpg";
	var i = 0;
	var arr = ["assets/images/cowa4.jpg","assets/images/cowa2.jpeg","assets/images/cowa5.jpg","assets/images/cowa1.jpeg","assets/images/cowa3.jpeg"];
	var increaseCounter = function(){
		if( i == arr.length - 1)
		{
			i = 0;
			$scope.img = arr[i];
		}
		else{
			i++;
			$scope.img = arr[i];
		}
	}
	$interval(increaseCounter,3000);
	$scope.left = function(){
		if(i == 0){
			i = arr.length - 1;
			$scope.img = arr[i];
		}
		else{
			i--;
			$scope.img = arr[i];	
		}
	}
	$scope.right = function(){
		if( i == arr.length - 1)
		{
			i = 0;
			$scope.img = arr[i];
		}
		else{
			i++;
			$scope.img = arr[i];
		}

	}

})