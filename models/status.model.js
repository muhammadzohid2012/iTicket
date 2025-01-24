module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define("Status", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
      },
    });

    Status.associate = (models) => {
      Status.hasMany(models.Cart, {
        foreignKey: "status_id",
        as: "cart_status",
      });
      Status.hasMany(models.Ticket, {
        foreignKey: "status_id",
        as: "ticket_status",
      });
      Status.hasMany(models.Booking, {
        foreignKey: "status_id",
        as: "booking_status",
      })
    };

    
    return Status;
  };
