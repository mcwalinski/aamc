var user = angular.module('userApp', ['angular.filter', 'userFilter'])
.config(function($locationProvider){
    //uncomment below to use Angular for page routing
    // $locationProvider.html5Mode(true);
  });

user.controller('userCtrl', function ($scope, $http) {

	$scope.sortType     = 'user.title'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.search   	= '';     // set the default search/filter term
  $scope.newUser = {}; // create object to contain new user
  $scope.messages = {}; // create object to contain messages to the user
  $scope.users = [];
  $scope.userOptions = [];

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

// Search
$scope.filterFunction = function(element) {
	return element.name.match(/^Ma/) ? true : false;
};

// Get Users
$scope.getUsers = function() {
    config ={};
    $http.get("//jsonplaceholder.typicode.com/users", config, {}).
  		success(function(data) {
    	$scope.users = data;
    	window.console.log($scope.users);
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
    $scope.id = value;
    config ={};
    $http.get("/api/users/single/" + $scope.id, config, {}).
      success(function(data) {
      $scope.user = data.user;
      // window.console.log($scope.user);
    });
}

});