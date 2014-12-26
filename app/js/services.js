var rubricaTelefonicaServices = angular.module('rubricaTelefonicaServices', ['ngResource']);

rubricaTelefonicaServices.factory('Contact', ['$resource',
    function($resource){
        return $resource('contacts/contacts.json', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);
