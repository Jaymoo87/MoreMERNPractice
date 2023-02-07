import express from "express";
import { createStudent, getStudents } from "../controllers/student.js";
import student from "../models/student-model.js";

const studentRouter = express.Router();

studentRouter.get("/", getStudents);
studentRouter.post("/", createStudent);

export default studentRouter;
