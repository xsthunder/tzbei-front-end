/**
 *   For
 *   Created by xs at 2018/1/12
 */
"use strict";
(function () {
    angular.module('app')
        .factory('userService',fn);

    function fn() {
        var self = {};
        self.profile = {};
        self.username = 'test';
        return self;
    }
})();