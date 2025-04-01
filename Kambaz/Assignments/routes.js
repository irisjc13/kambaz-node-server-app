import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {

  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });


  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = { ...req.body, course: courseId };
    const newAssignment = assignmentsDao.createAssignment(assignment);
    res.json(newAssignment);
  });


  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const updatedAssignment = assignmentsDao.updateAssignment(assignmentId, req.body);
    res.json(updatedAssignment);
  });


  app.delete("/api/assignments/:assignmentId", (req, res) => {
    assignmentsDao.deleteAssignment(req.params.assignmentId);
    res.sendStatus(204);
  });
}
