import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    description: String,
    dueDate: String,
    points: Number,
    quesNum: Number,
    score: Number,
    quizType: String,
    assignmentGroup: String,
    shuffleAnswers: String,
    timeLimit: Number,
    multipleAttempts: String,
    numOfAttemps: Number,
    viewResponses: String,
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: String,
    viewResults: String,
    webcamRequired: String,
    lockQuestionsAfterAnswering: String,
    availableDate: String,
    untilDate: String,
    published: Boolean
  },
  { collection: "quizzes" }
);
export default schema;