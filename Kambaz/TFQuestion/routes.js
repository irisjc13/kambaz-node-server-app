import * as dao from "./dao.js";

export default function TFQuestionRoutes(app) {
    app.post("/api/tfquestions", async (req, res) => {
        const question = req.body; 
        const newQuestion = await dao.createQuestion(question);
        res.json(newQuestion); 
      });
    app.put("/api/tfquestions/:questionId", async (req, res) => {
        const { questionId } = req.params; 
        const questionUpdates = req.body; 
        const status = await dao.updateQuestion(questionId, questionUpdates);
        res.json(status); 
      });
      app.get("/api/tfquestions/:questionId", async (req, res) => {
        const { questionId } = req.params; 
        const question = await dao.findQuestionById(questionId);
        res.json(question);
      });
}