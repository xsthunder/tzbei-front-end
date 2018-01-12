(function () {
    angular.module('app')
        .component('xxLogin', {
            templateUrl: '/app/login/login.html',
            controller: ctrl
        });

    function ctrl($scope,LoginFactory,userService) {
        $scope.login = function (body) {
            function cb(err,res) {
                //TODO set userService
                console.log(err,res);
            }
            if(!body['username']||!body['password'])return alert('need username or password');
            LoginFactory.login(body,cb);
        };
    }
})();
