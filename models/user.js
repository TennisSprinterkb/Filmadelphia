module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING,

    });
  

    // do we want to employ hooks??
    // User.associate = function(models) {
    
    //   User.hasMany(models.Location, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return User;
  };
  