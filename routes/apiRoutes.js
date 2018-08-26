var db = require("../models");

module.exports = function(app) {

  // Get all contacts
  app.get("/api/contacts", function(req, res) {
    db.Contacts.findAll({}).then( function( dbContacts ) {
      res.json( dbContacts );
    });
  });

  // Create a new contact
  app.post("/api/contacts", function(req, res) {
    console.log( 'Data Rx on POST request = %s', JSON.stringify(req.body) );

    db.Contacts.create( req.body ).then( function( dbContacts ) {
      console.log( Contacts.sql );

      res.json( dbContacts );
    });
  });

  // Delete a contact by id
  app.delete("/api/contacts/:id", function(req, res) {
    db.Contacts.destroy({ where: { id: req.params.id } }).then(function( dbContacts ) {
      res.json( dbContacts );
    });
  });
}; 
