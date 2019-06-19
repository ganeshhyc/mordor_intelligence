myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: app_url + '/home.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});