(function(){
'use strict';
skm.controller('mainSearchController',function($scope , $modal, emailSearchService ){


	$scope.searchFor="email";
	$scope.query="";

	$scope.fq="";

	$scope.pageSize=20;
	$scope.pageNumber=1;
	$scope.emptyPage=true;
	$scope.resultData=null;
	$scope.showFilters=false;

	$scope.rowVisibilityIndexes=[];
	$scope.showModal = false;


	$scope.search = function(){
		alert('search query : '+$scope.query)
		var query = $scope.query;
		emailSearchService.search().then( 
			 function(response){ $scope.resultData=response ; $scope.emptyPage=false;} , 
			 function(status){$scope.emptyPage=true;alert(status);}
		 )
	}

	$scope.toggleFilterVisibility  = function()  {
		$scope.showFilters = ! $scope.showFilters;
		var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller : 'ModalController',
	       resolve: {
		        resultData: function () {
		          return $scope.resultData;
		        }
		      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	}


	$scope.toggleRowVisibility= function(res_id)  {
        $scope.buttonContent = '-'; 
		if( ! $scope.rowVisibilityIndexes[res_id]){
			$scope.rowVisibilityIndexes[res_id]=true;			
		}else{
			$scope.rowVisibilityIndexes[res_id] = ! $scope.rowVisibilityIndexes[res_id];
		}
	}

	

})

})();