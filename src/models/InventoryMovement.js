const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("InventoryMovement", {
    inventory_movement_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    inventory_movement_type: {
      type: DataTypes.ENUM("IN", "OUT"),
      allowNull: false,
    },
    inventory_movement_quantity: { type: DataTypes.INTEGER, allowNull: false },
    inventory_movement_reason: { type: DataTypes.STRING(255) },
  });
};
