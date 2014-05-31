var practiceApp = angular.module('practiceApp', ['ngRoute', 'firebase']);

practiceApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/options.html', 
        controller: 'authController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html', 
        controller: 'authController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'views/register.html', 
        controller: 'authController'
    });
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html', 
        controller: 'authController'
    });
    $routeProvider.when('/user/:id', {
        templateUrl: 'views/custom.html', 
        controller: 'userController'
    });
    $routeProvider.otherwise({redirectTo: '/'})







}]);