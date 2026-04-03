import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("ServiceTicket", {
    service_ticket_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    service_ticket_type: {
      type: DataTypes.ENUM("HARDWARE", "SOFTWARE", "BOTH"),
      allowNull: false,
      defaultValue: "BOTH",
    },
    service_ticket_device_brand: { type: DataTypes.STRING(100) },
    service_ticket_device_model: { type: DataTypes.STRING(100) },
    service_ticket_serial_number: { type: DataTypes.STRING(100) },
    service_ticket_device_info: { type: DataTypes.TEXT, allowNull: false },
    service_ticket_initial_diagnosis: { type: DataTypes.TEXT },
    service_ticket_cost: { type: DataTypes.DECIMAL(12, 2) },
    service_ticket_deposit: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0 },
    service_ticket_entry_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    service_ticket_estimated_completion: {
      type: DataTypes.DATE,
    },
    service_ticket_status: {
      type: DataTypes.STRING(50),
      defaultValue: "PENDING",
    },
  });
};
