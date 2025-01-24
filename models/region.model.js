module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define("Region", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postpone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Region.associate = (models) => {
    Region.hasMany(models.Venue, {
      foreignKey: "region_id",
      as: "venue_region",
    });
    Region.hasMany(models.CustomerAddress, {
      foreignKey: "region_id",
      as: "address_region",
    });
    Region.hasMany(models.District, {
      foreignKey: "region_id",
      as: "district_region",
    });
  };

  return Region;
};
