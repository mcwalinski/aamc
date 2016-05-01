// Testing API Call

describe('user', function () {

  beforeEach(module('userApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            var $scope = {};
            var controller = $controller('userCtrl', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(3);
        }); 
    });

});