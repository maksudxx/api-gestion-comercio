const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Brand", {
    brand_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    brand_name: { type: DataTypes.TEXT(100), allowNull: false },
  });
};
