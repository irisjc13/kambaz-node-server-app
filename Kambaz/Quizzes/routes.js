import * as dao from "./dao.js";
import QuizAttemptRoutes from "../QuizAttempt/routes.js";


export default function QuizRoutes(app) {

    app.post("/api/quizzes", async (req, res) => {
        const quiz = req.body;
        const newQuiz = await dao.createQuiz(quiz);
        res.send(newQuiz);
    });

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await dao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });


    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.deleteQuiz(quizId);
        res.send(status);
    });

     app.get("/api/courses/:courseId/quizzes", async (req, res) => {
       const { courseId } = req.params;
       const quizzes = await dao.findQuizzesForCourse(courseId);
       res.json(quizzes);
     });

     app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const quizzes = await dao.findAllQuestionsForQuiz(quizId);
        res.json(quizzes);
      });
      app.get("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quiz = await dao.findQuizById(quizId);
        if (quiz) {
          res.json(quiz);
        } else {
          res.sendStatus(404); 
        }
      });

       // mount the attempt endpoints too
      QuizAttemptRoutes(app);


}