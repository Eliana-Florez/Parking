"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var compression_1 = __importDefault(require("compression"));
//import routes
var usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
var vehiculoRoutes_1 = __importDefault(require("./routes/vehiculoRoutes"));
var facturaRoutes_1 = __importDefault(require("./routes/facturaRoutes"));
var bahiaRoutes_1 = __importDefault(require("./routes/bahiaRoutes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set("port", process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, compression_1.default)());
    };
    Server.prototype.routes = function () {
        this.app.use("/api/usuario", usuarioRoutes_1.default);
        this.app.use("/api/vehiculo", vehiculoRoutes_1.default);
        this.app.use("/api/factura", facturaRoutes_1.default);
        this.app.use("/api/bahia", bahiaRoutes_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get("port"), function () {
            console.log("Server is listening on port ", _this.app.get("port"));
        });
    };
    return Server;
}());
exports.Server = Server;
