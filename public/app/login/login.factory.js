(function(){
	angular.module('app')
		.factory('LoginFactory',fn);
	function fn(urlCnst){
	    var self = {};
	    self.login = function (body,cb) {
	        urlCnst.post('login',body,cb);
        };
		return self;
	}
})();
