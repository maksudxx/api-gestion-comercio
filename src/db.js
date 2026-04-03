import { Sequelize } from "sequelize";
import dotenv from "dotenv";

import brandModel from "./models/Brand.js";
import categoryModel from "./models/Category.js";
import clientModel from "./models/Client.js";
import inventoryMovementModel from "./models/InventoryMovement.js";
import paymentMethodModel from "./models/PaymentMethod.js";
import productModel from "./models/Product.js";
import roleModel from "./models/Role.js";
import saleModel from "./models/Sale.js";
import saleItemModel from "./models/SaleItem.js";
import serviceTicketModel from "./models/ServiceTicket.js";
import ServiceTicketItemModel from "./models/ServiceTicketItem.js";
import SupplierModel from "./models/Supplier.js";
import userModel from "./models/User.js";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, BD_PORT, DATABASE, DATABASE_URL } =
  process.env;

//definimos la url local de la base de datos
const DB_LOCAL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${BD_PORT}/${DATABASE}`;

//seleccionamos la url de la base de datos a usar
const targetUrl = DB_LOCAL || DATABASE_URL;

const sequelize = new Sequelize(targetUrl, {
  logging: false,
  dialectOptions: DATABASE_URL
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {},
});

//intectamos la conexion de sequelize a todos los modelos
brandModel(sequelize);
categoryModel(sequelize);
clientModel(sequelize);
inventoryMovementModel(sequelize);
paymentMethodModel(sequelize);
productModel(sequelize);
roleModel(sequelize);
saleModel(sequelize);
saleItemModel(sequelize);
serviceTicketModel(sequelize);
ServiceTicketItemModel(sequelize);
SupplierModel(sequelize);
userModel(sequelize);

//importamos los modelos de la carpeta models
const {
  Brand,
  Category,
  Client,
  InventoryMovement,
  PaymentMethod,
  Product,
  Role,
  Sale,
  SaleItem,
  ServiceTicket,
  ServiceTicketItem,
  Supplier,
  User,
} = sequelize.models;

// --- RELACIONES --- //

// UN ROL PERTENECE A MUCHOS USUARIOS - UN USUARIO SOLAMENTE PUEDE TENER UN ROL (1:N)
Role.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(Role, { foreignKey: "role_id" });

//UNA MARCA TIENE MUCHOS PRODUCTOS - UN PRODUCTO TIENE UNA MARCA(1:N)
Brand.hasMany(Product, { foreignKey: "brand_id" });
Product.belongsTo(Brand, { foreignKey: "brand_id" });

// UN PRODUCTO TIENE MUCHAS CATEGORIAS - UNA CATEGORIA PUEDE TENER MUCHOS PRODUCTOS (N:N)
Product.belongsToMany(Category, { through: "product_category" });
Category.belongsToMany(Product, { through: "product_category" });

// UNA COMPRA PERTENECE A UN CLIENTE - UN CLIENTE PUEDE TENER VARIAS COMPRAS (1:N)
Client.hasMany(Sale, { foreignKey: "client_id" });
Sale.belongsTo(Client, { foreignKey: "client_id" });

// UNA VENTA PERTENECE A UN VEDENDOR - UN VENDEDOR TIENE MUCHAS VENTAS (1:N)
User.hasMany(Sale, { foreignKey: "user_id" });
Sale.belongsTo(User, { foreignKey: "user_id" });

// UNA VENTA PUEDE TENER MUCHOS ITEMS COMO DETALLE (1:N)
Sale.hasMany(SaleItem, { foreignKey: "sale_id" });
SaleItem.belongsTo(Sale, { foreignKey: "sale_id" });

// UN PRODUCTO PUEDE HABER SIDO VENDIDO EN MULTIPLES FACTURAS DISTINTAS (1:N)
Product.hasMany(SaleItem, { foreignKey: "product_id" });
SaleItem.belongsTo(Product, { foreignKey: "product_id" });

//UN PRODUCTO TIENE MUCHOS MOVIMIENTOS (1:N)
Product.hasMany(InventoryMovement, { foreignKey: "product_id" });
InventoryMovement.belongsTo(Product, { foreignKey: "product_id" });

//UN EMPLEADO ES RESPONSABLE DE REGISTRAR MUCHOS MOVIMIENTOS (1:N)
User.hasMany(InventoryMovement, { foreignKey: "user_id" });
InventoryMovement.belongsTo(User, { foreignKey: "user_id" });

// UN CLIENTE PUEDE TENER MUCHOS TICKET DE SERVICIO TECNICO (1:N)
Client.hasMany(ServiceTicket, { foreignKey: "client_id" });
ServiceTicket.belongsTo(Client, { foreignKey: "client_id" });

// UN USUARIO (TÉCNICO) TIENE MUCHOS TICKETS, PERO 1 TICKET SOLO TIENE 1 DUEÑO/TÉCNICO (1:N)
User.hasMany(ServiceTicket, { foreignKey: "user_id" });
ServiceTicket.belongsTo(User, { foreignKey: "user_id" });

// UN TICKET ENGLOBA MUCHOS REPUESTOS (1:N)
ServiceTicket.hasMany(ServiceTicketItem, { foreignKey: "service_ticket_id" });
ServiceTicketItem.belongsTo(ServiceTicket, { foreignKey: "service_ticket_id" });

// UN TICKET DE SERVICIO ENGLOBA A MUCHOS ITEMS (1:N)
Product.hasMany(ServiceTicketItem, { foreignKey: "product_id" });
ServiceTicketItem.belongsTo(Product, { foreignKey: "product_id" });

// UNA VENTA TIENE UN METODO DE PAGO
PaymentMethod.hasMany(Sale, { foreignKey: "payment_method_id" });
Sale.belongsTo(PaymentMethod, { foreignKey: "payment_method_id" });

// MUCHOS PROVEEDORES TIENEN PRODUCTOS DE INVETARIO A CARGAR (1:N)
Supplier.hasMany(InventoryMovement, { foreignKey: "supplier_id" });
InventoryMovement.belongsTo(Supplier, { foreignKey: "supplier_id" });

//Exportamos los modelos y la conexión
export {
  Brand,
  Category,
  Client,
  InventoryMovement,
  PaymentMethod,
  Product,
  Role,
  Sale,
  SaleItem,
  ServiceTicket,
  ServiceTicketItem,
  Supplier,
  User,
  sequelize as conn,
};
