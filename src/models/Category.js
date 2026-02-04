const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Category", {
    category_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    category_name: { type: DataTypes.TEXT(100), allowNull: false },
  });
};
