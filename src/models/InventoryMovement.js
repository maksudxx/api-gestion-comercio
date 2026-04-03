import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("InventoryMovement", {
    inventory_movement_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
