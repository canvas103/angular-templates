/**
 * Created by Chenghuijin on 2015/9/19.
 */
app.controller('adminCtrl', function ($scope,$sce) {
    $scope.admin = "this is admin";
    $scope.dynamicPopover = {
        content: 'Hello, World!',
        templateUrl: 'templates/popup.html',
        title: 'Title'
    };
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
});
