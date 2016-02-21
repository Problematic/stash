import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';

import stashAuth from './auth';
const stashConfig = { name: 'stash.config' };

let m = angular.module('stash.app', [ngResource, uiRouter, stashAuth.name, stashConfig.name]);

m.run($log => $log.log('stash.app started'));
