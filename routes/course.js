const express = require("express");
const router = express.Router();
const { Course } = require('../models');

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;