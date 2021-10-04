"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    cedulaUser: { type: Number, require: true },
    nombreUser: { type: String, require: true },
    apellidosUser: { type: String, require: true },
    telefonoUser: { type: Number, require: true },
    emailUser: { type: String, require: true, unique: true, lowercase: true },
}, {
    versionKey: false, // You should be aware of the outcome after set to false
});
exports.default = (0, mongoose_1.model)("Usuarios", PostSchema);
