var db = require("../models");
var path = require("path");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    /* db.Contacts.findAll({}).then(function( data ) {
      res.render("index", {
        msg: "Welcome!",
        examples: data
      });
    }); */
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // Load example page and pass in an example by id
  app.get("/contacts/:id", function(req, res) {
    db.Contacts.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
