import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("PaymentMethod", {
    payment_method_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    payment_method_name: { type: DataTypes.STRING(50) },
    payment_method_surcharge: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 0,
    },
  });
};
