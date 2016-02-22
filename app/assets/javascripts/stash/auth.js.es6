import angular from 'angular';
import ngResource from 'angular-resource';

let m = angular.module('stash.auth', [ngResource]);
let fs = require('fs');

m.run($log => $log.log('stash.auth started'));

m.service('gapi', $window => $window.gapi);

m.service('User', ($resource) => {
    return $resource('/users/:id', {
        id: '@id'
    });
});

m.directive('authButton', (gapi, $http) => {
    return {
        template: '<div></div>',
        controller: function () {
            this.onSuccess = function (googleUser) {
                $http.post('/auth/verify-token', {
                    id_token: googleUser.getAuthResponse().id_token
                }).then(console.log.bind(console));
            };

            this.onFailure = function (error) {
                console.log('failure', error);
            };
        },
        link: (scope, el, attrs, ctrl) => {
            gapi.signin2.render(attrs.id, {
                scope: 'profile email',
                width: 240,
                height: 50,
                longtitle: true,
                theme: 'dark',
                onsuccess: ctrl.onSuccess,
                onfailure: ctrl.onFailure
            });
        }
    };
});

export default m;
