var passport= require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use( new LocalStrategy(
    {
        Admin_name: "adminName"
    }, 

    function (adminName, password, done ){
        db.Admins.findOne({
            where: {
                Admin_name: adminName
            }
        }).then((dbAdmin=>{
            //if there is no user with the given email 
            if(!dbAdmin){
                return done(null, false),{
                    message: "Incorrect Email"
                };
            }
            else if (!dbAdmin.validPassword(password)){
                return done(null, false, {
                    message: "Incorrect Password"
                })
            }
            return done(null,dbUser);
        }))
    }
));

passport.serializeUser(function(admin,cb){
    cb(null,admin);
});

passport.deserializeUser(function(admin,cb){
    cb(null,admin);
})
module.exports = passport;