/**
 * Created by Chenghuijin on 2015/9/16.
 */
app.controller("loginCtrl", function ($scope, $http) {
    $scope.login = {};
    $scope.login.username = "user1";
    $scope.login.password = "test";
    //$scope.login.authResult = '';
    $scope.login.error = {username : false, password: false};
    $scope.signIn = function () {
        $scope.login.error = {username : false, password: false};
        $http({
            method: 'post',
            //url: "http://" + window.location.hostname + ":3001/users/",
            url :"http://54.166.49.92:3001/users/",
            data: {action: 'login', data: $scope.login}
        }).success(function (res) {
            switch  (res.authResult) {
                case 'falseUserName':
                    $scope.login.error.username = true;
                    break;
                case 'falsePassword':
                    $scope.login.error.password = true;
                    break;
                case 'success':
                    window.sessionStorage.setItem('username', res.username);
                    //$scope
                    break;
            }

        });
    };
    var username = window.sessionStorage.getItem('username');
    $scope.logout = function () {
        window.sessionStorage.removeItem('username');
        window.location.href = ('http://' + window.location.hostname + ':3001/index.html');
    };
});
