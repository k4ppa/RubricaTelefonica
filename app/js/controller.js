var rubricaTelefonicaControllers = angular.module('rubricaTelefonicaControllers', []);

rubricaTelefonicaControllers.controller('ContactListCtrl', ['$scope', 'Contact',
    function ($scope, Contact) {
        $scope.contacts = Contact.query();
    }]);

rubricaTelefonicaControllers.controller('EditContactCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.phoneNumber = $routeParams.phoneNumber;
    }]);
