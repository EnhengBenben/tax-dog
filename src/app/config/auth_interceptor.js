(function () {
    'use strict';

    angular.module('App')
        .factory('authInterceptor', Factory);

    /** @ngInject*/

    function Factory($location, $localStorage, $q) {
        var authInterceptor = {
            request: function (config) {
                config.headers = config.headers || {};
                if ($localStorage.token) {
                    config.headers.Authorization = $localStorage.token;
                }

                return config;
            },

            responseError: function (response) {
                if (response.status === 401) {
                    if ($location.url().search(/apply/) < 0) {
                        $location.path('/login');
                    }

                    return $q.reject(response);
                } else {
                    if (response.status === 400) {
                        var detail = '';
                        console.log(response.data);
                        for (var p in response.data) {
                            detail += '\n' + response.data[p];
                        }

                        toastr.error(detail);
                    } else {
                        //toaster.pop('error', '', response.data.message);
                    }

                    return $q.reject(response);
                }
            },
        };
        return authInterceptor;
    }

})();
