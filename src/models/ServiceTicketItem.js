import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("ServiceTicketItem", {
    service_ticket_item_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    service_ticket_item_quantity: { type: DataTypes.INTEGER, allowNull: false },
    service_ticket_item_price: { type: DataTypes.DECIMAL(12, 2) },
  });
};
