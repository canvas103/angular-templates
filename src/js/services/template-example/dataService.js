class RandomNames {
    constructor() {
        this.names = ['John', 'Mike', 'Curry', 'Annie'];
    }

    getName() {
        const count = this.names.length;
        const random=Math.floor(Math.random()*count);
        return this.names[random];
    }
}

module
    .
    exports = function (ngModule) {
    //if(ON_TEST){
    //    require('./hello.test.js')(ngModule);
    //}
    ngModule.service('randomNames', RandomNames);
};
