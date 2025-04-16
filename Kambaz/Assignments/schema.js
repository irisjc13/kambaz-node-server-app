import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    points: Number,
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { collection: "assignments" }
);

export default assignmentSchema;