(function (angular) {


    var app = angular.module('taskApp', []);

    app.service('StorageService', function ($http) {

        this.save = function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
            $http.post('/tasks', {key: value});
        };

        this.getData = function (key) {
            return JSON.parse(localStorage.getItem(key));
        };

        this.clear = function () {
            localStorage.clear();
        };
    });

    app.directive('myDir', function () {

        return {
            template: "<span>{{alert.msg}}</span>",
            replace: true,
            link: function (scope, elem, attrs) {

                scope.$on('instrument:added', function (data) {
                    attrs.$addClass(data.name.split(':').join('-'));
                    scope.alert = {msg: "Hola mundo!"};
                })
            }
        }
    });

}(angular));