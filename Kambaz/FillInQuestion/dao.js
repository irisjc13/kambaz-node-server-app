import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const createQuestion = (question) => {
  const newQuestion = { ...question, _id: uuidv4() }; 
  return model.create(newQuestion);
};

export const addCorrectChoice = (questionId, choice) => {
    return model.updateOne(
      { _id: questionId },
      { $addToSet: { correctChoices: choice } } 
    );
  };
  export const removeCorrectChoice = (questionId, choice) => {
    return model.updateOne(
      { _id: questionId },
      { $pull: { correctChoices: choice } } 
    );
  };
  export const updateQuestion = (questionId, questionUpdates) => {
    return model.updateOne(
      { _id: questionId },
      { $set: questionUpdates } 
    );
  };

  export const findQuestionById = (questionId) => { 
    return model.findById(questionId);
  }