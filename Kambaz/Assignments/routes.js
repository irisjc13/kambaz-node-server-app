import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  app.post("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignment = { ...req.body, course: courseId };
    const newAssignment = await assignmentsDao.createAssignment(assignment);
    res.json(newAssignment);
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.updateAssignment(assignmentId, req.body);
    res.json(status);
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const status = await assignmentsDao.deleteAssignment(req.params.assignmentId);
    res.json(status);
  });

  app.get("/api/assignments/:assignmentId", async (req, res) => {
    const assignment = await assignmentsDao.findAssignmentById(req.params.assignmentId);
    res.json(assignment);
  });
}
