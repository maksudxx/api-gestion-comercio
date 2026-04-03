import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("Brand", {
    brand_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    brand_name: { type: DataTypes.STRING(100), allowNull: false },
  });
};
