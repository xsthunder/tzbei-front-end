(function () {
    angular.module('app')
        .component('xxIntroduce', {
            templateUrl: '/app/user/introduce/introduce.html',
            controller: ctrl
        });
    function ctrl($scope,IntroduceFactory,userService) {
        $scope.login = function (body) {
            function cb(err,res) {
                //TODO set userService
                console.log(err,res,body);
            }
            if(!body['username']||!body['password'])return alert('need username or password');
            LoginFactory.login(body,cb);
        };
    }

})()
