/**
 * Created by dvqha_000 on 6/2/2016.
 */
var app = angular.module('MyMobileStore', ['ngSanitize','firebase']);

app.controller('DataController', ['$scope','$http','$firebaseObject', function($scope, $http, $firebaseObject)
{
    var ref = new Firebase('https://finalproject-mobileshop.firebaseio.com/');
    $scope.data = $firebaseObject(ref);
    $scope.data.$loaded()
        .then(function() {

            function ref(data){
                var s="";
                data.forEach(function(entry){s+=entry.content+"\n";});
                return s;
            }



            console.log($scope.data);
        })
        .catch(function(err) {
            console.error(err);
        });

}]);