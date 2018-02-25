(function () {
    var States = [
        {
            name: 'login',
            url: '/login',
            component: 'xxLogin'
        },
        {
            name: 'register',
            url: '/register',
            component: 'xxSignup'
        }, {                       //user
            name: 'home',
            usl: '/home',
            component: 'xxHome'
        },
        /*
        {
            name: 'home.show-all-user',
            url: '/admin-consultant/user',
            component: 'xxShowAllConsultant'
        },
        */
        {
            name: "otherwise",
            url: "*path",
            controller: function ($state) {
                $state.go('login');
            }
        }
    ];
    angular.module('app')
        .constant('ROUTER_CONSTANT', States);
})();