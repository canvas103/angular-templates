/**
 * Created by Chenghuijin on 2015/9/22.
 */
app.directive('expandingDetailsRow', function ($route) {
    return {
        restrict: 'EA',
        scope:{
            u:'=s'
        },
        templateUrl: "/templates/expandingDetailsRow.html",
        link:function(scope){
            scope.showDetail=function(e){
                console.log(scope);
                if(scope.active=== e.SSN){
                    scope.active=null;
                }else{
                    scope.active= e.SSN;}
            };
        }
    }
});
