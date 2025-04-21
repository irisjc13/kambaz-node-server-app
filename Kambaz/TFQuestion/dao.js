import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function createQuestion(question) {
    const newQuestion = { ...question, _id: uuidv4() }; // Generate a unique ID for the question
    return model.create(newQuestion);
  }

  export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId }, { $set: questionUpdates });
  }

  export const findQuestionById = (questionId) => { 
    return model.findById(questionId);
  }