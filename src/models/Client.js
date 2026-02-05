const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Client", {
    client_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    client_full_name: { type: DataTypes.STRING(255), allowNull: false },
    client_email: { type: DataTypes.STRING, validate: { isEmail: true } },
    client_tax: { type: DataTypes.STRING(50), allowNull: false }, // DNI/RUT/CEDULA/ETC
    client_phone: { type: DataTypes.STRING(50) },
    client_mobile_phone: { type: DataTypes.STRING(50) },
    client_address: { type: DataTypes.STRING(250) },
    client_city: { type: DataTypes.STRING(100) },
    client_postal_code: { type: DataTypes.STRING(20) },
  });
};
