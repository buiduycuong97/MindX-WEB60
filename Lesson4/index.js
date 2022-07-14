const express = require("express");
const app = express();
const port = 5000;

const { mangaRouter } = require("./mangaRouter");
const { userRouter } = require("./userRouter");

app.use(express.json());

app.use("/api/manga", mangaRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log("server running", port);
});
