 // app/routes.js

// grab the users model for mongoose *** Not needed ***
var Users = require('./models/users');

    module.exports = function(app) {

        // Frontend routes 

        // route to handle root request
        app.get('/', function(req, res) {
            // load our public/index.ejs file
            res.render('index'); 
        });

        // route to handle user request
        app.get('/user/:userId', function(req, res) {
            // load our public/user.ejs file and pass the user id
            res.render('user', { userId: req.params.userId }); 
        });

        // catch 404 and forward to error handler
        app.get('*', function(req, res) {
          res.render('error', { title: '404 - No User' }); // load our public/error.ejs file
        });



        // Server routes.  Handles api calls, authentication etc.  *** NOT USED ***

        // get users all api call
        app.get('/api/users', function(req, res) {
            // use mongoose to get all users in the database
            // console.log('get users');
            Users.find(function(err, users) {
                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json({ all : users }); // return all users in JSON format
            });
        });

        // get single user api call
        app.get('/api/user/single/:_id', function(req, res) {
            // use mongoose to get all users in the database
            Users.findOne({
                _id: req.params._id
                }, function(err, user) {
                    if (err)
                        res.send(err);
                    res.json({ user : user }); // return all users in JSON format
            });
        });

        // route to handle creating (app.post)
        app.post('/api/addUser', function(req, res) { 
            var newUser = new Users(req.body);      // create a new instance of the users model
            console.log(req.body);
            newUser.title = req.body.title;  // set the user info (comes from the request)
            console.log(req.body.title);
            newUser.save(function(err, user) {
                if (err)
                res.send(err);
            console.log(err);
                res.json({ message: 'User Added!' + user });
            });
        });
        
        // route to handle delete goes here based on object _id (app.delete)
        app.delete('/api/removeUser/:_id', function(req, res) { 
            
        Users.remove({
            _id: req.params._id,
            }, function(err, user) {
                if (err)
                    res.send(err);
                res.json({ message: 'Successfully removed user'});
            });
        });

    };
