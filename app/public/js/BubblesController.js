var mybubble = angular.module('Bubbles',['ngRoute']);

mybubble.controller('BubblesCtrl',['$scope','$http',function($scope,$http) {
     $http.get("http://labnewsapp.herokuapp.com/top10").success(function(data){
        $scope.showbubbles = data; 
        //console.log(data);

    });


}]);