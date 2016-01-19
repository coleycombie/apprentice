"use strict";
(function () {

    angular.module("app")
        .controller("dashboardController",
        ["$log", DashboardCtrl]);

    function DashboardCtrl ($log) {
        var vm = this;
        $log.debug("Instantiated dashboardController controller");
    }
}());