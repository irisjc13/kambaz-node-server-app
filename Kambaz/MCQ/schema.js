import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    quiz: {type: String, ref: "QuizModel"},
    title: String,
    points: Number,
    question: String,
    choices: [
      {
        choice: String,
        isCorrect: Boolean,
      },
    ],
  },
  { collection: "mcq" }
);
export default schema;