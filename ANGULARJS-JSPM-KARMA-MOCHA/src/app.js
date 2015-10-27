import angular from 'angular';
import uirouter from 'angular-ui-router';

import Component from './component';

angular.module('J', ['ui.router', 'component'])
    .config(['$stateProvider', '$urlRouterProvider', Config]);

angular.bootstrap(document, ['J']);

function Config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
	.state('home', {
	    url: "/",
	    templateUrl: "../src/partials/home.html"
	});
}
