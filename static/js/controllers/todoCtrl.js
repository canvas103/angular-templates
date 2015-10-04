/**
 * Created by Chenghuijin on 2015/9/26.
 */
app.controller('todoCtrl', function ($scope) {
    $scope.todos = [
        {task: "todo1", completed: false},
        {task: "todo2", completed: false},
        {task: "todo3", completed: false},
        {task: "todo4", completed: false}];
    $scope.newTodo = "";
    $scope.filterState = "";
    $scope.addTodo = function () {
        $scope.todos.push({task: $scope.newTodo, completed: false});
        $scope.newTodo = "";
    };
    $scope.removeTodo=function(todo){
        $scope.todos.splice($scope.todos.indexOf(todo),1);
    };
    $scope.editTodo=function(todo){
        todo.edit=!todo.edit;
        if(!todo.task.length){
            $scope.removeTodo(todo);
        }
    }
});