(function(){
	angular.module('app')
		.factory('QuestionFactory',fn);
	function fn(urlCnst) {
		var self = {};
		self.postQuestion = function (body, cb) {
		    urlCnst.post('admin-essay',body,cb);
        };
		self.getConsultantList = function (cb) {
		    urlCnst.get('admin-consultant/user',cb);
        };
	    return self;
    }
})();
