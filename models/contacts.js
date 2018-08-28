module.exports = function(sequelize, DataTypes) {

  var Contacts = sequelize.define("Contacts", {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        is: ["^[a-z]+$",'i'],
        len: [1,20]
      }
    },
    clientLastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:  { 
        is: ["^[a-z]+$",'i'],
        len: [1,30]
      }
    },  
    clientPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [10]
      }
    },
    clientEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true }
    },
    clientDueDate: {
      type: DataTypes.DATE,
      validate: { isDate: true }
    },
    clientMessage:{
      type: DataTypes.TEXT,
      validate: { len: [0,300] }
    }
  });
  
  return Contacts;

};
