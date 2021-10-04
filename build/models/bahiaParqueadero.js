"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    codParqueadero: { type: String, require: true },
    sectorParqueadero: { type: String, require: true },
    estadoParqueadero: { type: String, require: true },
}, {
    versionKey: false, // You should be aware of the outcome after set to false
});
exports.default = (0, mongoose_1.model)("BahiaParqueadero", PostSchema);
