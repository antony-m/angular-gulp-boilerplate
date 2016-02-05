
describe('homeController', function(){
    var vm;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function(_$controller_){
        vm = _$controller_('homeController');
    }));

    it('should be defined', function(){
        expect(vm).toBeDefined();
    });

    it('should be ok', function(){
        expect(vm.home).toEqual('home');
    });
});
