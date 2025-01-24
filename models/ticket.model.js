module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      service_fee: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ticket_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    Ticket.associate = (models) => {
      Ticket.belongsTo(models.Event, {
        foreignKey: "event_id",
        as: "ticket_event",
      });
      Ticket.belongsTo(models.Seat, {
        foreignKey: "seat_id",
        as: "ticket_seat",
      });
      Ticket.belongsTo(models.Status, {
        foreignKey: "status_id",
        as: "ticket_status",
      });
      Ticket.hasMany(models.Cart, {
        foreignKey: "ticket_id",
        as: "cart_ticket",
      });
  
    };

     
    return Ticket;
  };
  