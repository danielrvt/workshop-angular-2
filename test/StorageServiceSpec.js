describe('unit: StorageService', function () {

    var storageService;
    var server;

    // get a reference to the module
    beforeEach(module('taskApp'));

    /* use the $injector service to get a reference to the StorageService.
     Use the $httpBackend service to mock our server
     */
    beforeEach(inject(function ($injector, $httpBackend) {

        storageService = $injector.get('StorageService');
        server = $httpBackend;

    }));

    it('Debe guardar y obtener datos del storage', function () {

    });

    it('Debe limpiar el storage', function () {

    });

    it('Debe hacer una solicitud post al servidor', function () {

    });
});