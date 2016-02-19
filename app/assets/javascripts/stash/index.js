import jQuery from 'jquery';
import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';

let m = angular.module('stash', [ngResource, uiRouter]);

m.run($log => $log.log('stash app started'));

export default m;
