app.controller('showAllProductController', ["$scope", "$http", "$route", function ($scope, $http, $route)
{

    $http({
        method: "GET",
        url: "api/Products"
    }).then(function mySuccess(response) {
        $scope.products = response.data;

    }, function myError(response) {

    });
   
    debugger
    $scope.Search = function (Id)
    {
        $http({
            method: "POST",
            url: "api/Products/" + Id,
        }).then(function mySuccess(response)
        {
            $scope.Name = response.data.Name;

        }, function myError(response) {

        });
    }
  
}]);