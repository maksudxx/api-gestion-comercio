const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Product", {
    product_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    product_name: { type: DataTypes.STRING(255), allowNull: false },
    product_description: { type: DataTypes.TEXT },
    product_price: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
    product_stock_quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    product_is_service: { type: DataTypes.BOOLEAN, defaultValue: false },
    product_sku: { type: DataTypes.STRING(50), unique: true },
  });
};
