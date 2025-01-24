module.exports = (sequelize, DataTypes) => {
    const Delivery = sequelize.define("Delivery", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    Delivery.associate = (models) => {
      Delivery.hasMany(models.Booking, {
        foreignKey: "delivery_method_id",
        as: "booking_delivery",
      });
    };
  
    return Delivery;
  };
  