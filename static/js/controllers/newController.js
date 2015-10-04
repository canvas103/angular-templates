app.controller('newController', function ($scope, $location, Data) {
    //$scope.employees = Data.employees;
    //scope Function
    $scope.addUser = function () {
        $location.path("/edit/conform");
    };
//---------------main-------------
    if (Data.newEmp) {
        $scope.new = Data.newEmp;
    }
    else {
        $location.path("/");
    }
});