import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    points: Number,

    course: {
      type: String,
      ref: "CourseModel",
      required: true,
    },
  },
  { collection: "assignments" }
);

export default assignmentSchema;