'use strict';

describe('Controller: AmountsCtrl', function () {

  // load the controller's module
  beforeEach(module('session2App'));

  var AmountsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AmountsCtrl = $controller('AmountsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
