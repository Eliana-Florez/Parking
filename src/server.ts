import express from "express";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";

//import routes
import usuarioRoutes from "./routes/usuarioRoutes";
import vehiculoRoutes from "./routes/vehiculoRoutes";
import facturaRoutes from "./routes/facturaRoutes";
import bahiaRoutes from "./routes/bahiaRoutes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    this.app.set("port", process.env.PORT || 4000);
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(compression());
  }

  public routes(): void {
    this.app.use("/api/usuario", usuarioRoutes);
    this.app.use("/api/vehiculo", vehiculoRoutes);
    this.app.use("/api/factura", facturaRoutes);
    this.app.use("/api/bahia", bahiaRoutes);
  }

  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server is listening on port ", this.app.get("port"));
    });
  }
}

export { Server };
