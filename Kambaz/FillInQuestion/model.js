import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("FillInQuestionModel", schema);
export default model;