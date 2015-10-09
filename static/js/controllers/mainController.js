app.controller('mainController', function($scope, Data,$location) {
	console.log($scope.employees);
    Data.employees.success(function(data) {
		  $scope.employees = data.employees;
	});
	Data.tempEmp=null;
  	$scope.goToEdit = function(){
		Data.newEmp={};
		$location.path("/edit");
	};
	$scope.editUser=function(emp){
		Data.tempEmp = emp;
		Data.newEmp = angular.copy(emp);
		$location.path("/edit");
	};
	$scope.removeUser = function (emp) {
		console.log('clicked',emp);
		$scope.employees.splice($scope.employees.indexOf(emp), 1);
	};
	//console.log($scope.employees);
	//$scope.$$destroyed=true;
});