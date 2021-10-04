"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    placaVehiculo: { type: String, require: true },
    tipoVehiculo: { type: String, require: true },
    marcaVehiculo: { type: String, require: true },
    modeloVehiculo: { type: String, require: true },
    colorVehiculo: { type: String, require: true },
}, {
    versionKey: false, // You should be aware of the outcome after set to false
});
exports.default = (0, mongoose_1.model)("Vehiculos", PostSchema);
