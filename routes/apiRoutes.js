var db = require("../models");

module.exports = function(app) {

  // Get all contacts
  app.get("/api/contacts", function(req, res) {

    //retreive data from model Contacts
    db.Contacts.findAll({}).then( function( dbContacts ) {
      res.json( dbContacts );
    });
    
  });

  //Get a particular contact 
  app.get("/api/contacts/:id", function(req, res) {

    //retreive data with a particular id
    db.Contacts.findOne({ 
      where: {
        id: req.params.id
      }
    }).then( function( dbContacts ) {
      res.json( dbContacts );
    });

  });

  // Create a new contact
  app.post("/api/contacts", function(req, res) {

    //Log the data received from the post request
    console.log( '/api/contacts data posted : \n %s \n', JSON.stringify( req.body ) );

    //Insert data on the database ( model Contacts )
    db.Contacts.create( req.body ).then( function( dbContacts ) {
      res.json( dbContacts );
    }).catch(function(err){
      console.log(err);
    });


  });

  /* // Delete a contact by id
  app.delete("/api/contacts/:id", function(req, res) {
    db.Contacts.destroy({ where: { id: req.params.id } }).then(function( dbContacts ) {
      res.json( dbContacts );
    });
  }); */

}; 
