angular.module('userFilter', [])

.filter('creationDate', [function () {
  return function (value) {
    var dateFromObjectId = parseInt(value.substring(0, 8), 16) * 1000;
    var createdDate = new Date(dateFromObjectId)
    return createdDate;
  };
}])


.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
})


// Company filter
.filter('hasCompany', function() {

  // Create the return function and set the required parameter name to **input**
    return function(input){
    var out = [];
    angular.forEach(input, function(employer){
      if(employer.company.name === 'Romaguera-Crona'){
        out.push(employer)
      }
    })
    return out;
  }

});