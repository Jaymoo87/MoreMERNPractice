import express from "express";
import { createStudent, getStudents, deleteStudent } from "../controllers/student.js";
import student from "../models/student-model.js";

const studentRouter = express.Router();

studentRouter.get("/", getStudents);
studentRouter.post("/", createStudent);
studentRouter.delete("/:id", deleteStudent);

export default studentRouter;
