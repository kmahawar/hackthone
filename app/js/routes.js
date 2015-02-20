(function(){
'use strict';

skm.config(['$routeProvider', function($routeProvider) {
  
$routeProvider.when('/mainSearch', {templateUrl: 'js/pages/SearchPage/partials/mainSearch.html', controller: 'mainSearchController'});
$routeProvider.when('/search', {templateUrl: 'js/pages/subSearchPage/partials/subSearch.html', controller: 'subSearchController'});
  
$routeProvider.otherwise({redirectTo: '/mainSearch'});

}]);

})();