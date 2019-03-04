module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
      // Giving the Movie model a name of type STRING
      title: DataTypes.STRING,
      director: DataTypes.STRING  
    });
  
    Movie.associate = function(models) {
      // Associating Movie with Posts
      // When an Movie is deleted, also delete any associated Posts
      Movie.hasMany(models.Location, {
        onDelete: "cascade"
      });
    };
  
    return Movie;
  };