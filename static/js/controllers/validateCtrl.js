/**
 * Created by Chenghuijin on 2015/9/17.
 */
//var app=angular.module('myApp',[]);
app.controller('validateCtrl',function($scope){
    $scope.myForm="myform";
    $scope.pattern={
        word:/^\s*\w*\s*$/,
        ssn:/^\d{4}-\d{2}-\d{4}$/
    };

});



