// for eventual move to mysql DB

module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    // Giving the Movie model a name of type STRING
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    address: { type: DataTypes.STRING },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: { min: -90, max: 90 }
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: { min: -180, max: 180 }
    }
  });

  Movie.associate = function(models) {
    // Associating Movie with locations
    // When an Movie is deleted, also delete any associated locations
    Movie.hasMany(models.Location, {
      onDelete: "cascade"
    });
  };

  return Movie;
};
