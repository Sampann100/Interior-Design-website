const express = require("express");
const { signUpPage } = require("../controller/SignUp");
const { loginPage } = require("../controller/Login");

const userRouter = express.Router();

userRouter.post("/signup", signUpPage);

userRouter.post("/login", loginPage);


module.exports = userRouter;
