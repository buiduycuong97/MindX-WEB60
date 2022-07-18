var express = require("express");
const joi = require("joi");
var router = express.Router();

const validateUser = (user) => {
  const schema = joi.object({
    fname: joi
      .string()
      .regex(/[^0-9]/)
      .required(),
    lname: joi
      .string()
      .regex(/[^0-9]/)
      .required(),
    birthday: joi.required(),
    gender: joi.string(),
    email: joi.string().email().required(),
    phone: joi.string().pattern(new RegExp("^[0-9]*$")).min(10).max(12),
  });
  return schema.validate(user);
};

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { body } = req;
  const { error } = validateUser(req.body);
  console.log(error);
  if (error) return res.status(404).send(error.details[0].message);
  res.render("users", { body });
});

module.exports = router;
