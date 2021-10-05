import express from "express";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import http from 'http';

//import routes
import usuarioRoutes from "./routes/usuarioRoutes";
import vehiculoRoutes from "./routes/vehiculoRoutes";
import facturaRoutes from "./routes/facturaRoutes";
import bahiaRoutes from "./routes/bahiaRoutes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.urlencoded({extended: false}));
    this.config();
    this.routes();
  }

  public config(): void {
    this.app.set("port", process.env.PORT || 4000);
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(compression());

    this.app.use((req,res, next) =>{
      res.header('Acces-Control-Allow-Origin', '*');
      res.header('Acces-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
      if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
    });
  }

  public routes(): void {
    this.app.use("/api/usuario", usuarioRoutes);
    this.app.use("/api/vehiculo", vehiculoRoutes);
    this.app.use("/api/factura", facturaRoutes);
    this.app.use("/api/bahia", bahiaRoutes);
  }

  public start(): void {
    const httpServer = http.createServer(this.app);
    httpServer.listen(this.app.get("port"), () => {
      console.log("Server is listening on port ", this.app.get("port"));
    });
  }
}

export { Server };
