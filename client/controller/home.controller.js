angular.module("myApp")
.controller('homeCltr',function($scope){
	$scope.img="assets/images/g.jpg";
	var i = 0;
	var arr = ["assets/images/g2.jpg","assets/images/cow2.jpg","assets/images/g.jpg","assets/images/cow1.jpg"];
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