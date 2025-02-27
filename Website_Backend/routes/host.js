const express = require("express");
const {
  personalContactDetail,
} = require("../controller/personalContactDetail");

const hostRouter = express.Router();

hostRouter.post("/personalContactDetail", personalContactDetail);

module.exports = hostRouter;
       