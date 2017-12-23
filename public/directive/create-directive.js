//register 
(function(){
	angular.module('App')
		.directive('customHello',function(){
			return {
				templateUrl:'/directive/custom-hello.js'
			}
		});
})()
