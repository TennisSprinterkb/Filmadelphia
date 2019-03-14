// for eventual move to mysql DB

module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    placeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
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

  Location.associate = function(models) {
    // We're saying that a Location should belong to an Movie
    // A Location can't be created without a Movie due to the foreign key constraint
    Location.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Location;
};
