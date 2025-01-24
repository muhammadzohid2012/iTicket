module.exports = (sequelize, DataTypes) => {
    const Sector = sequelize.define("Sector", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sector_name: {
        type: DataTypes.STRING,
        // primaryKey: true,
      }
    });
  
    Sector.associate = (models) => {
      Sector.hasMany(models.Seat, {
        foreignKey: "sector",
        as: "seat_sector",
      });
    }
    return Sector;
  };
  