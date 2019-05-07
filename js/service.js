'use strict';
var AppService = angular.module('AppService',['ngResource']);
AppService.factory('company',['$resource',function($resource){

	return $resource('data/:num.json',{},{
		 query:{method:'GET', params:{num:'company'}, isArray:true}
	})
}]);

