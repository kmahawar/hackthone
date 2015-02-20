(function(){
	'use strict';
   skm.services.service('emailSearchService',['$http','$q','backendURLs',function($http,$q,backendURLs){

	     this.search = function(){
				var deferred = $q.defer();
				$http({
							method : 'GET',
							url : backendURLs.output
						})
						.success(function(data, status, headers,	config) {deferred.resolve(data)})
						.error(function(data, status, headers,config) {deferred.reject(status);});
				
				return deferred.promise;
			}



   }]);
})();