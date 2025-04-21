import * as dao from "./dao.js";

export default function MCQ(app) {
    app.post("/api/mcq", async (req, res) => {
        const question = req.body;
        const newQuestion = await dao.createQuestion(question);
        res.json(newQuestion);
      });
    
      app.put("/api/mcq/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const questionUpdates = req.body;
        const status = await dao.updateQuestion(questionId, questionUpdates);
        res.json(status);
      });
      app.delete("/api/mcq/:questionId/choices/:choice", async (req, res) => {
        const { questionId, choice } = req.params;
        const status = await dao.deleteChoice(questionId, choice);
        res.json(status);
      });
      app.post("/api/mcq/:questionId/choices", async (req, res) => {
        const { questionId } = req.params;
        const choice = req.body; 
        const status = await dao.addChoice(questionId, choice);
        res.json(status);
      });
      app.put("/api/mcq/:questionId/correctAnswer", async (req, res) => {
        const { questionId } = req.params;
        const { choice } = req.body; // Expecting the choice string to mark as correct
        const status = await dao.updateCorrectAnswer(questionId, choice);
        res.json(status);
      });
        app.get("/api/mcq/:questionId", async (req, res) => {
            const { questionId } = req.params;
            const question = await dao.findQuestionById(questionId);
            res.json(question);
        });

}
