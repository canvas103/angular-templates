/**
 * Created by chenghui on 5/10/2016.
 */
export default function (ngModule) {
    //if(ON_TEST){
    //    require('./hello.test.js')(ngModule);
    //}
    ngModule.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('route1', {
                url: "/route1",
                template: require("./../../partials/route1.html")
            })
            .state('route1.list', {
                url: "/list",
                template: require("./../../partials/route1.list.html")
            })
            .state('home', {
                url: '/',
                template: require('./../../partials/home.html'),
                controller:"HomeController",
                controllerAs:"home"
            }
        )
    });
};