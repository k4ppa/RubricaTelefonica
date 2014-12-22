var rubricaTelefonicaApp = angular.module('rubricaTelefonicaApp', []);

rubricaTelefonicaApp.controller('ContactListCtrl', function ($scope) {
    $scope.contacts = [
        {'firstName': 'Mattia',
            'lastName': 'Cappa',
            'phoneNumber': '+39 335 1411077'},
        {'firstName': 'Mattia',
            'lastName': 'Conversano',
            'phoneNumber': '+39 335 1234567'},
        {'firstName': 'Daniele',
            'lastName': 'Buratti',
            'phoneNumber': '+39 335 7654321'}
    ];
});
