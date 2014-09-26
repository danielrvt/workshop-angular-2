describe('unit: TaskController', function () {

    var scope;

    var ctrlNew;

    // get a reference to the module
    beforeEach(module('taskApp'));

    /*
    use the $controller service to get a reference to the TaskController.
    inject the $rootScope to create a new scope that we can use in our controller.
    create a dummy task that we can use to test.
     */
    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();

        this.instrument = {
            name: "Cuenta corriente",
            idE: "TPA8736",
            saldo: "8,00"
        };

        // every time the scope calls the $emit method, we will know (line 51, 57)
        spyOn(scope, '$emit');

        ctrlNew = $controller('NewController', {$scope: scope});

    }));

    // Verificar nuevo controlador
    it('Debe existir nuevo controlador', function () {

    });

    it('Debe verificar si existe el arreglo vacio de instrumentos', function () {

    });

    it('Debe agregar un nuevo instrumento al arreglo de instrumentos', function () {

    });

    it('Debe remover instrumentos del arreglo de instrumentos', function () {

    });

});