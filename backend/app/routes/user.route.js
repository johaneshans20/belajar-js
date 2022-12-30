const express = require("express");
const router = express.Router();
const { tampilDataUser, getUser } = require("../controller/user.controller");
const passport = require("passport");

router.get(
  "/dataUser",
  passport.authenticate("adminPriveleges", {
    session: false,
  }),
  tampilDataUser
);
router.get(
  "/getUser",
  passport.authenticate("needAuthentication", {
    session: false,
  }),
  getUser
);

module.exports = router;
