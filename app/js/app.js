var rubricaTelefonicaApp = angular.module('rubricaTelefonicaApp', [
    'ngRoute',
    'rubricaTelefonicaControllers'
]);

rubricaTelefonicaApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/contacts', {
                templateUrl: 'partials/contactsList.html',
                controller: 'ContactListCtrl'
            }).
            when('/contacts/:phoneNumber', {
                templateUrl: 'partials/editContact.html',
                controller: 'EditContactCtrl'
            }).
            otherwise({
                redirectTo: '/contacts'
            });
    }]);
