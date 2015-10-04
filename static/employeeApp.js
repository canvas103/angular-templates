var app = angular.module('employeeApp', ['ngRoute','chart.js','nvd3','ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'mainController',
            templateUrl: '/partials/main.html'
        })
        .when('/dashboard', {
            controller: 'dashboardController',
            templateUrl: '/partials/dashboard.html'
        })
        .when('/edit', {
            controller: 'newController',
            templateUrl: '/partials/edit.html'
        })
        .when('/back', {
            controller: 'mainController',
            templateUrl: '/partials/main.html'
        })
        .when('/admin', {
            controller: 'adminCtrl',
            templateUrl: '/partials/admin.html'
        })
        .when('/randomUsers',{
            controller:'randomUsersCtrl',
            templateUrl:'/partials/randomUsers.html'
        })
        .when('/edit/conform',{
            controller:'editConformCtrl',
            templateUrl:'partials/editConform.html'
        })
        .when('/formValidation',{
            controller:'validateCtrl',
            templateUrl:'partials/formValidation.html'
        })
        .when('/tabs',{
            controller:'tabsCtrl',
            templateUrl:'partials/tabs.html'
        })
        .when('/modal',{
            controller:'modalDemoCtrl',
            templateUrl:'partials/modalDemo.html'
        })
        .when('/todo',{
            controller:'todoCtrl',
            templateUrl:'partials/todo.html'
        });

});


/*
 function customersController($scope,$http) {
 $http.get('dummy_data.json')
 .success(function(response) {$scope.employees = response.employees;});
 }
 */
