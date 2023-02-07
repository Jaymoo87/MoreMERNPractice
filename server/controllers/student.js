import studentData from "../models/student-model.js";

export const getStudents = async (req, res) => {
  try {
    const allStudents = await studentData.find();
    res.status(200).json(allStudents);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new studentData(student);
  try {
    await newStudent.save();
    res.status(200).json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
