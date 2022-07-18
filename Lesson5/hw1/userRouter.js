const express = require("express");
const joi = require("joi");
const userRouter = express.Router();

const users = [
  {
    id: 1,
    name: "Bui Duy Cuong",
    phoneNumber: "0988855556",
    email: "buiduycuong@gmail.com",
    gender: "Male",
    age: 25,
  },
];

const validateUser = (user) => {
  const gender = ["Male", "Female", "Other"];

  const schema = joi.object({
    id: joi.number(),
    name: joi
      .string()
      .min(10)
      .regex(/[^0-9]/)
      .required(),
    phoneNumber: joi.string().pattern(new RegExp("^[0-9]*$")).min(10).max(12),
    email: joi.string().email().required(),
    gender: joi.compile(gender),
    age: joi.number().integer().positive().max(200),
  });
  return schema.validate(user);
};

userRouter.get("/", (req, res) => res.send(users));

userRouter.post("/", (req, res) => {
  // Validate req
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
  };
  users.push(newUser);
  res.send(users);
});

module.exports = { userRouter: userRouter };
