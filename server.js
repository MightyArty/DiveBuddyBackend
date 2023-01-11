require("dotenv").config();
const cors = require("cors");
const express = require("express");

const mongoose = require("mongoose");
//routes

const userRouter = require("./routes/users");
const appointmentRouter = require("./routes/appointments");
const messageRouter = require("./routes/messages");

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/users", userRouter);
app.use("/api/appointments", appointmentRouter);
app.use("/api/messages", messageRouter);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listeneing on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
