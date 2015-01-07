'use strict';

/**
 * @ngdoc directive
 * @name petstoreApp.directive:comments
 * @description
 * # comments
 */
angular.module('petstoreApp')
  .directive('comments', function () {
    return {
      templateUrl: 'views/comments.html',
      restrict: 'E',
      controller: function(){
      },
      controllerAs: 'commentCtrl'
    };
  });
