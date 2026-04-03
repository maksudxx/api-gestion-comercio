import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("Supplier", {
    supplier_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    supplier_name: { type: DataTypes.STRING(150) },
    supplier_tax: { type: DataTypes.STRING(30) },
    supplier_phone: { type: DataTypes.STRING(30) },
  });
};
