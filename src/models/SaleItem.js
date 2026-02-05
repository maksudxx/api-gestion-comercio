const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("SaleItem", {
    sale_item_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    sale_item_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1 }, // Evita ventas con cantidad 0 o negativa
    },
    sale_unit_price: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
    sale_item_subtotal: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      comment: "Resultado de quantity * unit_price",
    },
  });
};
