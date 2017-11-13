
app.config(function ($routeProvider, $locationProvider)
{
    $routeProvider
       
          .when("/", {
              templateUrl: "Index.html"
          })

    $locationProvider.hashPrefix('');
});