(function () {
    angular.module('app')
        .component('xxSignup', {
            templateUrl: '/app/signup/signup.html',
            controller: ctrl
        });

    function ctrl($scope, $mdDialog,SignupFactory) {
        $scope.status = '  ';
        $scope.customFullscreen = false;
        $scope.register = function (body) {
            if(!body['username']||!body['password']){
                return alert('need username pwd');
            }
            if(body['birthday'])body.birthday = + body.birthday;
            function cb(err,res) {
                console.log(err,res);
            }
            SignupFactory.register(body,cb);
        }
    }
})();
