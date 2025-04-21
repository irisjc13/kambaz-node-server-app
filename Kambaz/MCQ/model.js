import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("MCQModel", schema);
export default model;