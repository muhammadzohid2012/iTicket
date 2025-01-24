module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      finished: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      delivery_method_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount_coupon_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    })

    Booking.associate = (models) => {
      Booking.belongsTo(models.Cart, {
        foreignKey: "cart_id",
        as: "booking_cart",
      });
      Booking.belongsTo(models.Delivery, {
        foreignKey: "delivery_method_id",
        as: "booking_delivery"
      });
      Booking.belongsTo(models.Discount, {
        foreignKey: "discount_coupon_id",
        as: "booking_discount"
      });
      Booking.belongsTo(models.Status, {
        foreignKey: "status_id",
        as: "booking_status"
      });
      Booking.belongsTo(models.Payment, {
        foreignKey: "payment_method_id",
        as: "booking_payment"
      });
    }
    return Booking;
  };
  