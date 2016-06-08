/**
 * Created by dvqha_000 on 6/8/2016.
 */
var app = angular.module('MyMobileStore', ['ui.bootstrap', 'ngRoute', 'firebase']);

app.controller('SearchController', function($scope, $firebaseObject){
    var ref = new Firebase("https://finalproject-mobileshop.firebaseio.com/");
    $scope.data = $firebaseObject(ref);
    $scope.data.$loaded()
        .then(function() {
            $scope.products = $scope.data.products;
            $scope.isSearch=false;
            $scope.btnSearch=function(flag){
                $scope.isSearch=!flag;
            };

            //Tìm theo tên
            $scope.findProduct = function(products, nameSearch){
                if (nameSearch == null){
                    alert("You must type something in textbox!!!");
                }
            };



        })
        .catch(function(err) {
            console.error(err);
        });


});

