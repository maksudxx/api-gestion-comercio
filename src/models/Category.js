const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Category", {
    category_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    category_name: { type: DataTypes.STRING(100), allowNull: false },
  });
};
