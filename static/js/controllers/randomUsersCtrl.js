/**
 * Created by Chenghuijin on 2015/9/22.
 */
app.controller('randomUsersCtrl', function ($scope, Data) {
    Data.randomUsers.success(function (res) {
        $scope.users = res.results;
    });
    $scope.say = function (msg) {
        console.log(msg);
    }
});
app.controller('child',function($scope){
console.log($scope);
});