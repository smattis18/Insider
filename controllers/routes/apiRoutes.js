var axios = require('axios')
var db = require("../../models");
var passport = require("../../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/index");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }).then(function(dbUser) {
      console.log(dbUser.dataValues[0])
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

// Route for logging user out
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
app.get("/api/users", function(req, res) {
  // if (!req.user) {
  //   // The user is not logged in, send back an empty object
  //   res.json({});
  // }
  // else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    db.User.findAll({}).then(function (dbUser ){
      res.json(dbUser
        // email: req.users.email,
        // first_name: req.users.first_name,
        // last_name: req.users.last_name,
        // username: req.users.username
    )
    
    });
  }
);
};



/*
module.exports = function (app) {
    // Get all examples
    app.get("/api/user", function (req, res) {
      db.User.findAll({}).then(function (users) {
        res.json(users);
      });
    });

    app.get("/api/user/:id", function (req, res) {
      db.User.findOne({where: { id:req.params.id}}).then(function (user) {
        res.json(user);
      });
    });

    // :id = user_id
    app.post("/api/post/:id", function (req, res) {
      db.Post.create({}).then(function (new_post) {
        res.json(new_post);
      });
    });

    // Giphy call
    // app.get("/api/giphy/:search", function (req, res) {
    //   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + req.params.search + "&api_key=FiDaJGdZm9CCACzTDlexL1LjaBfu4j9o&limit=10"
    //   console.log(queryURL)
    //   axios.get(queryURL)
    //   .then(function(response) {
    //     console.log(response)
    //     res.json(response.data)
    //   })
    // })

    // // comment
    // app.post("/api/comment/:id", function(req, res) {
    //   db.Comment.create({}).then(function(new_comment) {
    //     res.json(new_comment);
    //   });
    // });




    //   // Delete an example by id
    //   app.delete("/api/examples/:id", function(req, res) {
    //     db.Post.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
    //       res.json(dbExample);
    //     });
    //   });
    };
  */