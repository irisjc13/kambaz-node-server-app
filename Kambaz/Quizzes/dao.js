import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
import MCQModel from "../MCQ/model.js";
import FillInQuestionModel from "../FillInQuestion/model.js";
import TFQuestionModel from "../TFQuestion/model.js";

export function createQuiz(quiz) {
  const newQuiz = { ...quiz, _id: uuidv4() };
  return model.create(newQuiz);
}

export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}

export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, quizUpdates);
}

export function findQuizById(quizId) {
    return model.findById(quizId);
    }
export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
  }

  export async function findAllQuestionsForQuiz(quizId) {
    const mcqQuestions = await MCQModel.find({ quiz: quizId });
    const fillInQuestions = await FillInQuestionModel.find({ quiz: quizId });
    const tfQuestions = await TFQuestionModel.find({ quiz: quizId });
  
    return {
      mcqQuestions,
      fillInQuestions,
      tfQuestions,
    };
  }