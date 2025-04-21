import QuizAttemptModel from "./model.js";

export const createAttempt = async (attempt) => {
  return QuizAttemptModel.create(attempt);
};

export const findAttemptsByQuizAndStudent = async (quizId, student) => {
  return QuizAttemptModel
    .find({ quiz: quizId, student })
    .sort({ attemptNum: -1 })
    .exec();
};

export const countAttemptsByQuizAndStudent = async (quizId, student) => {
  return QuizAttemptModel.countDocuments({ quiz: quizId, student }).exec();
};
