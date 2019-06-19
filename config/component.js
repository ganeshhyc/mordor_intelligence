myApp.directive('navbar', function () {
    return {
        templateUrl: component_url + '/navbar.html',
        scope: {
            navvariable: '='
          }
    };
});