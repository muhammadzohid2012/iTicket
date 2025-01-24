module.exports = (sequelize, DataTypes) => {
    const Flat = sequelize.define("Flat", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      floor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      condition: {
        type: DataTypes.STRING,
      }
    });
  
    Flat.associate = (models) => {
      Flat.hasMany(models.CustomerAddress, {
        foreignKey: "flat",
        as: "address_flat",
      });
    };

    return Flat;
  };
  