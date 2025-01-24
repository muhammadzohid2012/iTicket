module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define("Gender", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  });
  Gender.associate = (models) => {
    Gender.hasMany(models.Human, {
      foreignKey: "gender_id",
      as: "human_gender",
    });
    Gender.hasMany(models.Customer, {
      foreignKey: "gender",
      as: "customer_gender",
    });
  };
  return Gender;
};
