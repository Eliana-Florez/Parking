import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    placaVehiculo: { type: String, require: true },
    tipoVehiculo: { type: String, require: true },
    marcaVehiculo: { type: String, require: true },
    modeloVehiculo: { type: String, require: true },
    colorVehiculo: { type: String, require: true },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default model("Vehiculos", PostSchema);
