//= require_self
//= require_tree .

let m = angular.module('stash.app', ['templates', 'ngResource', 'ui.router', 'stash.auth', 'stash.config']);

m.run($log => $log.log('stash.app started'));
