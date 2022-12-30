const express = require("express");
const router = express.Router();
const { create, login } = require("../controller/auth.controller");
const {
  runValidation,
  validationDaftar,
  validationLogin,
} = require("../validation");
// const passport = require("passport");

router.post("/daftar", validationDaftar, runValidation, create);
// router.get("/dataUser", tampilDataUser);
router.post("/login", validationLogin, runValidation, login);

module.exports = router;
