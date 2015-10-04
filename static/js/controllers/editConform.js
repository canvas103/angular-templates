/**
 * Created by Chenghuijin on 2015/9/24.
 */
app.controller('editConformCtrl', function ($scope, Data, $location) {

    $scope.cancel = function () {
        $location.path("/edit");
    };
    $scope.save = function () {
        if (!Data.tempEmp) {
            $scope.employees.push($scope.new);
        } else {
            Object.keys($scope.new).forEach(function (key) {
                Data.tempEmp[key] = $scope.new[key];
            });
        }
        $location.path("/");
    };

//-----------main-------------------
    $scope.edit = !!Data.tempEmp;
    Data.employees.success(function (data) {
        $scope.employees = data.employees;
    });
    if (Data.newEmp) {
        $scope.new = Data.newEmp;
    }
    else {
        $location.path("/");
    }
});