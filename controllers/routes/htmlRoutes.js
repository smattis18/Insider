var db = require("../../models");

module.exports = function(app) {
  //login
  app.get("/", function(req, res) {
    res.render("index")
    })
    //Future use
    // app.get("/login", function(req, res) {
    //   res.render("login")
    // });

    // app.get("/profile", function(req, res) {
    //   res.render("profile")
    // })
  };