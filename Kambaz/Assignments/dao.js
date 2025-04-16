import AssignmentModel from "./model.js";

export const createAssignment = (assignment) =>
  AssignmentModel.create(assignment);

export const findAssignmentsForCourse = (courseId) =>
  AssignmentModel.find({ course: courseId });

export const updateAssignment = (assignmentId, assignmentUpdates) =>
  AssignmentModel.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });

export const deleteAssignment = (assignmentId) =>
  AssignmentModel.deleteOne({ _id: assignmentId });

export const findAssignmentById = (assignmentId) =>
  AssignmentModel.findById(assignmentId);