import * as dao from "./dao.js";

export default function FillInQuestionRoutes(app) {
  // Create a new question
  app.post("/api/fillinquestions", async (req, res) => {
    const question = req.body;
    const newQuestion = await dao.createQuestion(question);
    res.json(newQuestion);
  });

  // Add another correct choice
  app.post("/api/fillinquestions/:questionId/choices", async (req, res) => {
    const { questionId } = req.params;
    const { choice } = req.body; 
    const status = await dao.addCorrectChoice(questionId, choice);
    res.json(status);
  });

  // Remove a correct choice
  app.delete("/api/fillinquestions/:questionId/choices/:choice", async (req, res) => {
    const { questionId, choice } = req.params;
    const status = await dao.removeCorrectChoice(questionId, choice);
    res.json(status);
  });

  // Update the question
  app.put("/api/fillinquestions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const status = await dao.updateQuestion(questionId, questionUpdates);
    res.json(status);
  });
    // Get a question by ID
    app.get("/api/fillinquestions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const question = await dao.findQuestionById(questionId);
        res.json(question);
    }
    );
}