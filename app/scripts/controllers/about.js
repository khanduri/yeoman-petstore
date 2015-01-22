'use strict'

angular.module('petstoreApp')
  .controller('AboutCtrl', function($scope, $http){

    $scope.fetchFact = function(){
      $http.jsonp('http://ezapps.herokuapp.com/facts/api/v1/month/1/day/1?callback=JSON_CALLBACK')
        .success(function(data) {
          $scope.fact = data.text;
        })
        .error(function(data) {
          console.log(data);
        });

    }

    $scope.fetchFact();

  });
