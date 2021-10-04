import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    codParqueadero: { type: String, require: true },
    sectorParqueadero: { type:  String, require: true },
    estadoParqueadero: { type:  String, require: true },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default model("BahiaParqueadero", PostSchema);
