/**
 * Created by dvqha_000 on 6/2/2016.
 */
angular.module('MyApp', ['ngSanitize','firebase'])
    .controller('ExampleController', ['$scope','$http','$firebaseObject', function($scope, $http, $firebaseObject)
    {
        var ref = new Firebase('https://finalproject-mobileshop.firebaseio.com/');
        $scope.data = $firebaseObject(ref);
        $scope.data.$loaded()
            .then(function() {

                function ref(data){
                    var s="";
                    data.forEach(function(entry){s+=entry.content+"\n";});
                    return s;
                };

                $scope.category=ref($scope.data.category);
                $scope.header=ref($scope.data.info-header);
                $scope.footer=ref($scope.data.info-footer);
                $scope.team=ref($scope.data.info-team);
                $scope.products=ref($scope.data.products);

                console.log($scope.data);
            })
            .catch(function(err) {
                console.error(err);
            });

    }]);