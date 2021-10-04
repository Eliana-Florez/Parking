import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    codFactura: { type: Number, require: true },
    fecha: { type:  Date, require: true },
    horaEntrada: { type:  String, require: true },
    horaSalida: { type:  String, require: true },
    totalPagar: { type: String, require: true },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default model("Facturas", PostSchema);
