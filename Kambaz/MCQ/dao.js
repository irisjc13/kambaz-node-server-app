import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

// Create a new MCQ question
export const createQuestion = (question) => {
    const newQuestion = { ...question, _id: uuidv4() };
    return model.create(newQuestion);
  };
  
  // Update an existing MCQ question
  export const updateQuestion = (questionId, questionUpdates) => {
    return model.updateOne({ _id: questionId }, { $set: questionUpdates });
  };
  
  // Delete a choice from an MCQ question
  export const deleteChoice = (questionId, choice) => {
    return model.updateOne(
      { _id: questionId },
      { $pull: { choices: choice } } 
    );
  };
  // Add a choice to an MCQ question
  export const addChoice = (questionId, choice) => {
    return model.updateOne(
      { _id: questionId },
      { $push: { choices: choice } } 
    );
  };
  
  // Update the correct answer for an MCQ question
  export const updateCorrectAnswer = (questionId, choice) => {
    return model.updateOne(
      { _id: questionId, "choices.choice": choice },
      { $set: { "choices.$.isCorrect": true } } 
    );
  };

    export const findQuestionById = (questionId) => { 
      return model.findById(questionId);
    }