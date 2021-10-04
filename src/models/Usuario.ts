import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    cedulaUser: { type: Number, require: true },
    nombreUser: { type: String, require: true },
    apellidosUser: { type: String, require: true },
    telefonoUser: { type: Number, require: true },
    emailUser: { type: String, require: true, unique: true, lowercase: true },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default model("Usuarios", PostSchema);
