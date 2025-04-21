import mongoose from "mongoose";

const QuizAttemptSchema = new mongoose.Schema(
  {
    _id:          String,
    student:      { type: String, ref: "UserModel", required: true },
    quiz:         { type: String, ref: "QuizModel", required: true },
    attemptNum:   { type: Number, required: true },
    answers: [
      {
        question:      { type: String, required: true },
        selectedAnswer:{ type: mongoose.Schema.Types.Mixed, required: true },
        correct:       { type: Boolean, required: true },
      }
    ],
    score:     { type: Number, required: true },
    takenAt:   { type: Date, default: Date.now },
  },
  { collection: "quizAttempts" }
);

export default QuizAttemptSchema;
