import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRouter from "./routes/student.js";

const app = express();

app.use("/students", studentRouter);
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://admin:Rowan2014@jaymoomongo.rs7nh.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => app.listen(PORT, () => console.log(`Connected on port ${PORT}`)))
  .catch((err) => console.log(err.message));
