'use strict';

/**
 * @ngdoc function
 * @name petstoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the petstoreApp
 */
angular.module('petstoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.pets = [
      {
        name: 'Sprout',
        history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'images/pet_01.jpg',
        comments: [{
          author: 'AuthorA',
          text: 'Lorem ipsum dolor sit amet, consectetur',
          date: new Date('Jan 08, 2015').toDateString()
        }]
      }, {
        name: 'Oliver',
        history: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'images/pet_02.jpg',
        comments: [{
          author: 'AuthorB',
          text: 'exercitation ullamco laboris nisi',
          date: new Date('Jan 08, 2015').toDateString()
        }, {
          author: 'AuthorA',
          text: 'Lorem ipsum dolor sit amet, consectetur',
          date: new Date('Jan 08, 2015').toDateString()
        }]
      }, {
        name: 'Doc',
        history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'images/pet_03.jpg',
        comments: []
      }
    ];
  });
