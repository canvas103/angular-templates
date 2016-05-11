/**
 * Created by chenghui on 5/10/2016.
 */
module.exports= ngModule=>{
    describe(`hello`,()=>{
        beforeEach(window.module(ngModule.name));
        it(`should test properly`,()=>{
            expect(false).to.be.true;
        })
    })
};