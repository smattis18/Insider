var db = require("../../models");

module.exports = function(app) {
  //login
  app.get("/", function(req, res) {
    res.render("index")
    })
    app.get("/login", function(req, res) {
      res.render("login")
    });
    app.get("/signup", function(req, res) {
      res.render("signup")
    })
    app.get("/myprofile", function(req, res) {
      res.render("myprofile")
    })
  };