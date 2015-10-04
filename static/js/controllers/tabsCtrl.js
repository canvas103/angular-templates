/**
 * Created by Chenghuijin on 2015/9/25.
 */
app.controller('tabsCtrl',function($scope,$window,$timeout){
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
        $timeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };
});