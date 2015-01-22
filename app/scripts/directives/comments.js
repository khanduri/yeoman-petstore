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
        var today = new Date();

        this.comment = {
          date: today.toDateString()
        }

        this.addComment = function(pet){
          pet.comments.push(this.comment);
          this.comment = {
            date: today.toDateString()
          }
        }

      },
      controllerAs: 'commentCtrl'
    };
  });
