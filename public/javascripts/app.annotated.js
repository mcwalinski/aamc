// Service to get single user

angular.module("userServices", ['ngResource'])
       .factory('userService', ["$resource", function($resource){
         return $resource('/:action/:id',
          {
            action:'@action'
          },
          {
            //gets
            getSingleUser:{
              method:'GET',
              params:{action:'user'}
            }
          }
        );
       }])