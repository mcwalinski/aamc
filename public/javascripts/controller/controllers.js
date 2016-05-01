var user = angular.module('userApp', ['angular.filter', 'userFilter', 'userServices', 'ngResource'])
.config(function($locationProvider){
    //uncomment below to use Angular for page routing
    // $locationProvider.html5Mode(true);
});

user.controller('userCtrl', function ($scope, $http, userService) {

	$scope.search   	= ''; // set the default search/filter term as empty
  $scope.users = []; // create empty users array
  $scope.userOptions = []; // create empty options array

// API Call to Get Users
$scope.getUsers = function() {
    config ={};
    $http.get("//jsonplaceholder.typicode.com/users", config, {}).
  		success(function(data) {
    	$scope.users = data;  // Set scope value of users to respone of above api call

      // For each user object in the returned array, add department key to the company array.
      angular.forEach($scope.users, function(obj){
         // Adding department with value of shoes
         obj.company["department"] = "shoes";
      });

      // Push each key in a user object into an array called options.  Remove dupes, check each object for uniques.
      angular.forEach($scope.users, function(value, key){
          angular.forEach(value, function(v, k){       
             if ($scope.userOptions.indexOf(k) == -1) {
                 $scope.userOptions.push(k);
             }
          });
      });
    });
    
}

// Return a single user.  **** NOT BEING USED ****
$scope.singleUser = function(value) {
  config ={};
  // Use userservice to collect single user information
  userService.getSingleUser({id:value}, function(data){
      $scope.userPage = data.applicationInfo;
  });
}

});