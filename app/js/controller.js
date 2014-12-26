var rubricaTelefonicaControllers = angular.module('rubricaTelefonicaControllers', []);

rubricaTelefonicaControllers.controller('ContactListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('contacts/contacts.json').success(function (data) {
            $scope.contacts = data;
        });
    }]);

rubricaTelefonicaControllers.controller('EditContactCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.phoneNumber = $routeParams.phoneNumber;
    }]);
