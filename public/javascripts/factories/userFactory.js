// Factory to create users

angular.module("userFactories", [])

.factory('userFactory', function(){
    return {
        prefix: function(user){
            return "Mr., Mrs., Dr." + user + " ";
        },
        suffix: function(user){
            return "Jr, 2nd, 3rd" + text + " ";
        }  
    }               
});