import express from "express";

const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
  res.send("router is working");
});

export default studentRouter;
