var rubricaTelefonicaApp = angular.module('rubricaTelefonicaApp', []);

rubricaTelefonicaApp.controller('ContactListCtrl', function ($scope, $http) {
    $http.get('contacts/contacts.json').success(function(data) {
        $scope.contacts = data;
    });
});
