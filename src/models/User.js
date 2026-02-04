const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("User", {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    user_username: { type: DataTypes.TEXT(50), unique: true, allowNull: false },
    user_password: { type: DataTypes.TEXT, allowNull: false },
    user_firstname: { type: DataTypes.TEXT(100), allowNull: false },
    user_lastname: { type: DataTypes.TEXT(100), allowNull: false },
    user_is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  });
};
