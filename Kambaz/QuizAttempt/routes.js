import { v4 as uuidv4 } from "uuid";
import * as dao from "./dao.js";
import * as QuizDao from "../Quizzes/dao.js";

export default function QuizAttemptRoutes(app) {
  // Submit a new attempt
  app.post("/api/quizzes/:quizId/attempt", async (req, res) => {
    const student = req.body.student;          // or pull from req.user
    const quizId  = req.params.quizId;
    const { answers, score } = req.body;

    // count how many attempts they’ve made
    const used = await dao.countAttemptsByQuizAndStudent(quizId, student);

    // fetch quiz to check limits
    const quiz = await QuizDao.findQuizById(quizId);
    if (!quiz) {
      return res.sendStatus(404);
    }
    const allowed = quiz.multipleAttempts === "Yes"
      ? quiz.numOfAttemps
      : 1;
    if (used >= allowed) {
      return res.status(403).send("No attempts left");
    }

    // build & save attempt
    const attempt = {
      _id:         uuidv4(),
      student,
      quiz:        quizId,
      attemptNum:  used + 1,
      answers,
      score,
    };
    const saved = await dao.createAttempt(attempt);
    res.status(201).json(saved);
  });

  // Fetch all attempts (most recent first)
  app.get("/api/quizzes/:quizId/attempts", async (req, res) => {
    const quizId  = req.params.quizId;
    const student = req.query.student;
    const list = await dao.findAttemptsByQuizAndStudent(quizId, student);
    res.json(list);
  });
}
