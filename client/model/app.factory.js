angular.module('myApp')
.factory('testFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
	var obj={};
	obj.checkName = function(x){
		var defer = $q.defer();
		$http.post("http://localhost/gausala-master/server/checkusrname.php?username="+x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
		}
	obj.submitData = function(arr){
		var defer = $q.defer();
		$http.post("http://localhost/gausala-master/server/register.php",arr)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
		}
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