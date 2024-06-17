const express = require("express");

const router = express.Router();

const authcontrollers = require("../controllers/auth-controller");

const authvalidators = require("../validators/auth-validator.js");
// const loginSchema = require("../validators/auth-validator.js");

const validate = require("../middlewares/validate-middleware.js");

router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(authvalidators.signupSchema), authcontrollers.register);

router
  .route("/login")
  .post(validate(authvalidators.loginSchema), authcontrollers.login);

module.exports = router;
