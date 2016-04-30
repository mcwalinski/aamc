var user = angular.module('userApp', ['angular.filter', 'userFilter', 'userServices', 'ngResource'])
.config(function($locationProvider){
    //uncomment below to use Angular for page routing
    // $locationProvider.html5Mode(true);
});

user.controller('userCtrl', function ($scope, $http, userService) {

	$scope.search   	= ''; // set the default search/filter term
  $scope.newUser = {}; // create object to contain new user
  $scope.messages = {}; // create object to contain messages to the user
  $scope.users = [];
  $scope.userOptions = [];

// Get Users
$scope.getUsers = function() {
    config ={};
    $http.get("//jsonplaceholder.typicode.com/users", config, {}).
  		success(function(data) {
    	$scope.users = data;
    	window.console.log($scope.users);
      
      angular.forEach($scope.users, function(obj){

         //Using bracket notation
         obj.company["department"] = "shoes";

      });

      angular.forEach($scope.users, function(value, key){
          angular.forEach(value, function(v, k){       
             if ($scope.userOptions.indexOf(k) == -1) {
                 $scope.userOptions.push(k);
             }
          });
      });
      window.console.log($scope.userOptions);
    });
    
}

// Single User
$scope.singleUser = function(value) {
  config ={};
  userService.getSingleUser({id:value}, function(data){
      $scope.app = data.applicationInfo;
  });
}

});