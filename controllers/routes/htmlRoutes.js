var db = require("../../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.render("index");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    if (req.user) {
      res.redirect("/index");
    }
    res.render("signup");
  });

  app.get("/myprofile", function(req, res) {
    if (req.user) {
      res.redirect("/myprofile")
    }
    res.render("myprofile");
    return ("myprofile")
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/index", isAuthenticated, function(req, res) {
    res.render("signup");
  });

};