angular.module('userFilter', [])

// Creation date filter.  Not used, but would take the unique mongodb object id and parse it into the created date.
.filter('creationDate', [function () {
  return function (value) {
    var dateFromObjectId = parseInt(value.substring(0, 8), 16) * 1000;
    var createdDate = new Date(dateFromObjectId)
    return createdDate;
  };
}])

// Capitalization Filter - Will capitalize the returned value
.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
})


// Company filter - Will return only items whose employer matches "Romaguera-Crona".  Should expand to pass a variable.
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