/**
 *   For
 *   Created by xs at 2018/1/12
 */
"use strict";
(function () {
    var tmp = {
        port:20181,
        base_url:'l.lovecust.com'
    };
    angular.module('app')
        .constant('serviceConfigure',tmp);
})();