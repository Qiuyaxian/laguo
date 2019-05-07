var App = angular.module('App',['ngRoute','ngResource','AppControll','AppService']);
App.config(['$routeProvider',function($routeProvider) {
    $routeProvider
     .when('/login', {
        templateUrl: 'tpl/login.html',
        controller: 'login'
      })
      .when('/index', {
        templateUrl: 'tpl/index.html',
        controller: 'index'
      })
      .when('/data/:num', {
        templateUrl: 'tpl/detail.html',
        controller: 'companyDetail'
      })
      .when('/search', {
        templateUrl: 'tpl/search.html',
        controller: 'search'
      })
      .when('/user', {
        templateUrl: 'tpl/user.html',
        controller: 'user'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }]);

