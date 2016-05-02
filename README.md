# aamc
Angular APP for AAMC

# Component Versions

ExpressJS - v 4.12.2 
<br>
AngularJS - v 1.4.7

##To Run Locally##
Install node: https://nodejs.org/download/

Checkout this project to your computer.

Open terminal and cd to the root directory of this project locally.

To Start, run these commands:

$ npm install

$ bower install

$ node server.js

In your browser visit localhost:3000 the app will load up there.

To Test Code Exercies:

1)  Retrieve data from an API (http://jsonplaceholder.typicode.com/users).
	- Function getUsers is called on app load and populates $scope.users  
	** public/javascripts/controller/controller.js  *Line 15

2)  Add a "department" key to the "company" object returned in the json for each user.
	- Inside of the getUsers function is an angular ForEach which iterates over the previously created scope and pushes keys into an array.  
	** public/javascripts/controller/controller.js  *Line 28

3) Show an html page with:
	-  DROPDOWN 1: a dropdown select with the list of users in it.
	-  DROPDOWN 2: another dropdown select with the list of simple keys (non-objects) from the user object (e.g., id, name, username, email, phone, website)

4) Choosing an option from DROPDOWN 2 should sort DROPDOWN 1 by that selected value.
	- Dropdown 2 has the model selectedOption and Dropdown 1 has a orderBy value of selectedOption set on the ng-repeat. 
	** views/index.ejs  *Line 25

5) Somehow demonstrate use of a filter.
	- Capitalize filter is created as well as hasCompany filter.
	** public/javascripts/filter/filters.js
	** views/index.ejs  *Lines 59, 81 and 86

6) Somehow demonstrate use of a service or factory.
	- Service is created to add a prefix or suffix to a user name.
	** public/javascripts/factories/userServices.js
	** views/index.ejs  *Lines 18, 71 and 74

7) Demonstrate/discuss how the components would be unit tested.
	- Would use karma, jasmine and ng-mock to test reaching the endpoint and creating model from the response.
	- Test expected result when selecting option in dropdown 2.
	- Test expected result when pressing prefix or sufix button.