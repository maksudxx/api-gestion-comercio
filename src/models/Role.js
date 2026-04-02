const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Role", {
    role_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    role_name: { type: DataTypes.STRING(50), allowNull: false },
  });
};
