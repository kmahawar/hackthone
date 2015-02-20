(function(){
'use strict';
skm.controller('ModalController',function($scope ,$modalInstance, resultData){
     $scope.resultData = resultData;
	  $scope.selected = {
	    item: $scope.resultData[0]
	  };

	 $scope.ok = function () {
	    $modalInstance.close($scope.selected.resultData);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancle');
	  };
})

})();