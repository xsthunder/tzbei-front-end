'use strict';
(function(){
	angular.module( 'App')
		.controller( 'helloCtrl',ctrl);
	function ctrl($scope){
		$scope.name = "123";
	}
})()
