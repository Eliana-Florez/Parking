"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    codFactura: { type: Number, require: true },
    fecha: { type: Date, require: true },
    horaEntrada: { type: String, require: true },
    horaSalida: { type: String, require: true },
    totalPagar: { type: String, require: true },
}, {
    versionKey: false, // You should be aware of the outcome after set to false
});
exports.default = (0, mongoose_1.model)("Facturas", PostSchema);
