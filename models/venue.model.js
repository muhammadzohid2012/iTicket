module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    location: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    site: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    phone: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    venue_type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    schema: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    region_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    district_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });

  Venue.associate = (models) => {
    Venue.belongsTo(models.VenueType, {
      foreignKey: "venue_type_id",
      as: "venue_venue_type",
    });
    Venue.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "venue_region",
    }),
      Venue.hasMany(models.VenuePhoto, {
        foreignKey: "venue_id",
        as: "venuePhoto_venue",
      });
    Venue.hasMany(models.Event, {
      foreignKey: "venue_id",
      as: "event_venue",
    });
    Venue.hasMany(models.Seat, {
      foreignKey: "venue_id",
      as: "seat_venue",
    });
    Venue.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "venue_district",
    })
  };

  return Venue;
};
