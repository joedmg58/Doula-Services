// This code will make sure the user is authenticated before letting the user navigate everywhere on the site.

module.exports = function(req,res,next){
    if(req.user){
        return next();
    }
    return res.redirect('/');
}