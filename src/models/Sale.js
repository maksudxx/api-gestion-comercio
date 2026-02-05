const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Sale", {
    sale_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    sale_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    sale_subtotal: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
    sale_total: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
  });
};
