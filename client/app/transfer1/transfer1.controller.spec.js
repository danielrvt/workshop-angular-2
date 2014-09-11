'use strict';

describe('Controller: Transfer1Ctrl', function () {

  // load the controller's module
  beforeEach(module('session2App'));

  var Transfer1Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Transfer1Ctrl = $controller('Transfer1Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
