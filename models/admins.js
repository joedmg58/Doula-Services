var bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes)=>{
    let Admins = sequelize.define("Admins", {
        Admin_name:{
            type:DataTypes.STRING,
            allowNull:false, 
            unique: true, 
            validate:{
                isEmail: true
            }
        }, 
        Admin_pwd:{
            type: DataTypes.STRING, 
            allowNull:false
        }
    });
    
   Admins.prototype.validPassword = function(password){
        return bcrypt.compareSync(password,this.password);
    }

   Admins.hook("beforeCreate", function(admin){
        user.password= bcrypt.hashSync(admin.password, bcrypt.genSaltSync(10), null);
    })

    return Admins;
}