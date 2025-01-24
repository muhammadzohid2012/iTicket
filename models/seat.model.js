module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define("Seat", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sector: {
      type: DataTypes.INTEGER,
      // primaryKey: true,
    },
    row_number: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    venue_id: {
      type: DataTypes.INTEGER,
    },
    seat_type_id: {
      type: DataTypes.INTEGER,
    },
    location_in_schema: {
      type: DataTypes.STRING,
    },
  });

  Seat.associate = (models) => {
    Seat.belongsTo(models.Seat_Type, {
      foreignKey: "seat_type_id",
      as: "seat_seat_type",
    });
    Seat.hasMany(models.Ticket, {
      foreignKey: "seat_id",
      as: "ticket_seat",
    });
    Seat.belongsTo(models.Sector, {
      foreignKey: "sector",
      as: "seat_sector",
    });
    Seat.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "seat_venue",
    });
  };

  return Seat;
};
