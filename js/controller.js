'use strict';

var AppControll = angular.module('AppControll',['ngRoute']);
AppControll.controller('login',['$scope','$location','$resource','$routeParams','company',function($scope,$location,$resource,$routeParams,company){
    $scope.$location = $location;
    /* 
    $scope.username = "",
    $scope.password = "123",
    $scope.flag = true;
    $scope.userflag= false;
    $scope.passflag = true;*/

}])

AppControll.controller('index',['$scope','$location','company',function($scope,$location,company){
    $scope.$location = $location;
    $scope.companys = company.query();
    var times = new Date();
    $scope.NowDay = (times.getFullYear())+"-"+(times.getMonth()+1)+"-"+(times.getDate())
}])

AppControll.controller('companyDetail',['$scope','$location','$routeParams','company',function($scope,$location,$routeParams,company){
    $scope.$location = $location;
    $scope.companyContent = company.get({num: $routeParams.num});
}])
AppControll.controller('search',['$scope','$location','$resource','$routeParams','company',function($scope,$location,$resource,$routeParams,company){
    $scope.$location = $location;
}])
AppControll.controller('user',['$scope','$location','$resource','$routeParams','company',function($scope,$location,$resource,$routeParams,company){
    $scope.$location = $location;

}])