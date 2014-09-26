describe('Unit: Directives', function () {

    var elementNew;
    var scope;

    // get a reference to the module
    beforeEach(module('taskApp'));

    /*
    to test a directive, we need to create an html element that
    we can apply the directive on it. we will need the $compile service
    and the $rootScope to compile it.
     */
    beforeEach(inject(function ($compile, $rootScope) {

        scope = $rootScope;

        elementNew = angular.element('<div my-dir></div>');

        $compile(elementNew)(scope);

        scope.$apply();
    }));

    it('Debe asociar un mensaje de alerta de "Instrumento agregado!"', function () {

    });

    it('Debe agregar una clase con el nombre del evento', function () {

    });
});