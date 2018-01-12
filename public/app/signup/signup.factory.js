(function(){
    angular.module('app')
        .factory('SignupFactory',fn);
    function fn(urlCnst) {
        var self = {};
        self.register = function (body,cb) {
            urlCnst.post('register',body,cb);
        }
        return self;
    }
})();
