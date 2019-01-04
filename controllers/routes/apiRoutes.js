var axios = require('axios')
var db = require("../../models");

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