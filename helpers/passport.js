var passport= require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use( new LocalStrategy(
    {
        usernameField: "email"
    }, 

    function (email, password, done ){
        db.User.findOne({
            where: {
                email:email
            }
        }).then((dbUser)=>{
            //if there is no user with the given email 
            if(!dbUser){
                return done(null, false),{
                    message: "Incorrect Email"
                };
            }
            else if (!dbUser.validPassword(password)){
                return done(null, false, {
                    message: "Incorrect Password"
                })
            }
            return done(null,dbUser);
        })
    }
));

passport.serializeUser(function(user,cb){
    cb(null,user);
});

passport.deserializeUser(function(user,cb){
    cb(null,user);
})
module.exports = passport;