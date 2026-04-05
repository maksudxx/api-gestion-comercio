import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

// 1. Importaciones
// 2. Crear servidor (express)
// 3. Middlewares (body, cookies, logs, cors)
// 4. Rutas
// 5. Manejo de errores
// 6. Exportar

//Importamos las rutas y la conexión a la base de datos
import routes from "./index.js";
import "./db.js";

const server = express();

//Permite recibir datos tipo: nombre=juan&edad=30
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//permite recibir formatos JSON
server.use(bodyParser.json({ limit: "50mb" }));

//Cookies
server.use(cookieParser());

//Logger
server.use(morgan("dev"));

// CORS
const corsOptions = {
  origin: "https://localhost:5173",
  methods: "GET, POST, OPTIONS, PUT, DELETE",
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, token, Authorization",
  optionsSucessStatus: 200,
};

server.use(cors(corsOptions));
server.use("/", routes);

//Manejo global de errores
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
