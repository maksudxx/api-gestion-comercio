const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("ServiceTicket", {
    service_ticket_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    service_ticket_device_info: { type: DataTypes.TEXT, allowNull: false },
    service_ticket_initial_diagnosis: { type: DataTypes.TEXT },
    service_ticket_entry_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    service_ticket_estimated_completion: {
      type: DataTypes.DATE,
    },
    service_ticket_status: { type: DataTypes.STRING(50) },
  });
};
