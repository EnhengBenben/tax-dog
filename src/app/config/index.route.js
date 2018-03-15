(function () {
    'use strict';

    angular
        .module('App')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/main/main.html',
                controller: 'MainController as app'
            })
            .state('app.dashboard', {
                url: '/dashboard',
                abstract: true,
                templateUrl: 'app/components/dashboard.html',
                controller: 'DashboardCtrl as vm'
            })
            .state('app.dashboard.list', {
                url: '/list',
                templateUrl: 'app/components/list.html',
                controller: 'DashboardListCtrl as vm'
            });
        $urlRouterProvider.otherwise('/app/dashboard/');
    }

})();
