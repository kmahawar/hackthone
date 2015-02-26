(function(){
'use strict';
skm.controller('mainSearchController',function($scope ,emailSearchService ){


	$scope.searchFor="email";
	$scope.query="";

	$scope.fq="";

	$scope.pageSize=20;
	$scope.pageNumber=1;
	$scope.emptyPage=true;
	$scope.resultData=null;
	$scope.showFilters=false;


	$scope.search = function(){
		var query = $scope.query;
		emailSearchService.search(query).then( 
			 function(response){ $scope.resultData=response.Coupons; $scope.emptyPage=false;} , 
			 function(status){$scope.emptyPage=true;alert(status);}
		)
	}

})

})();