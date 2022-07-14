const express = require("express");
const { v4: uuidv4 } = require("uuid");
const userRouter = express.Router();

const users = [
  { id: 1, name: "nguyen tuan anh" },
  { id: 2, name: "bui duy cuong" },
];

userRouter.get("/", (req, res) => res.send(users));

userRouter.post("/", (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
  };
  users.push(newUser);
  res.send(users);
});

userRouter.delete("/:id", (req, res) => {
  const cloneUsers = users.filter((item) => item.id != req.params.id);
  res.send(cloneUsers);
});

userRouter.put("/:id", (req, res) => {
  users.forEach((item) => {
    if (item.id == req.params.id) {
      item.name = req.body.name;
    }
  });
  res.send(users);
});

module.exports = { userRouter: userRouter };
