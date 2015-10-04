/**
 * Created by Chenghuijin on 2015/9/22.
 */
app.directive('emp',function(){
    return{
        restrict:"EA",
        scope:{
            employees:'=data',
            editUser:'&edit',
            removeUser:'&remove'
        },
        templateUrl:"templates/emp.html",
        link:function(scope){
            console.log(scope);
            //scope.editUser=function(emp){
            //    Data.tempEmp=emp;
            //    Data.newEmp=angular.copy(emp);
            //    $location.path("/edit");
            //};
            //scope.removeUser=function(emp){
            //    scope.employees.splice(scope.employees.indexOf(emp),1);
            //}
        }
    }
});