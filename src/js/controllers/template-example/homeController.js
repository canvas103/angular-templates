/**
 * Created by chenghui on 5/9/2016.
 */
class HomeController{
    constructor(randomNames){
        this.name = 'world';
        this.randomNames=randomNames;
    }
    changeName () {
        this.name = 'canvas'
    }
    randomName(){
        this.name=this.randomNames.getName()
    }
}
HomeController.$inject=['randomNames'];
module.exports = function (ngModule) {
    //if(ON_TEST){
    //    require('./hello.test.js')(ngModule);
    //}
    console.log(ngModule);
    ngModule.controller('HomeController', HomeController);
};