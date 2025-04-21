import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String, 
    quiz: { type: String, ref: "QuizModel" }, 
    title: String, 
    points: Number, 
    question: String, 
    correctChoices: [String], // Array of correct answers
  },
  { collection: "fillinquestions" } 
);

export default schema;