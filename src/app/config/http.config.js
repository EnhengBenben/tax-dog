(function () {
    'use strict';

    angular
        .module('App')
        .config(configHttpProvider)
        .run(function ($rootScope, $localStorage, ENDPOINT) {
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "2000",
                "extendedTimeOut": "2000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
            $rootScope.ENDPOINT = ENDPOINT;
            // 判断是否拥有某个权限
            $rootScope.isPermitted = function(permission){
                var permitted = false;
                angular.forEach($localStorage.roles,function(p,index){
                    if(p == permission){
                        permitted = true;
                        return true;
                    }
                });
                return permitted;
            }
        });

    /* @ngInject */
    function configHttpProvider($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
        $httpProvider.defaults.headers.common['Access-Control-Allow-Origin']='*';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $httpProvider.defaults.withCredentials = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.get = {
            Accept: 'application/json',
        };
        //application/vnd.cma.v1+json
        $httpProvider.defaults.headers.post.Accept = 'application/json';
    }
})();
