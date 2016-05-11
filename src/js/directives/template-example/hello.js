/**
 * Created by chenghui on 5/9/2016.
 */
module.exports= function (ngModule) {
    if(ON_TEST){
        require('./hello.test.js')(ngModule);
    }
    ngModule.directive('hello', function () {
        require('./hello.scss');
        return {
            restrict: 'E',
            scope: {},
            template: require('./hello.html'),
            controllerAs: 'vm',
            controller: function () {
                var vm = this;
                vm.greeting = "hellow webpack";
            }
        }
    })
};