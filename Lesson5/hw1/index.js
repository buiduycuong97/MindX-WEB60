const express = require("express");
const { userRouter } = require("./userRouter");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/user", userRouter);

app.listen(port);
