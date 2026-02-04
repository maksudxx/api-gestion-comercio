const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Role", {
    role_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    role_name: { type: DataTypes.TEXT(50), allowNull: false },
  });
};
