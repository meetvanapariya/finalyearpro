angular.module('myApp')
.factory('testFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
	var obj={};
	obj.loginData = function(x){
		var defer = $q.defer();
		$http.post("http://localhost/gausala-master/server/logindata.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	
	return obj;
}])	