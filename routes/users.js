const express = require("express");
const router = express.Router();
const { User } = require('../models');

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

/*POST user routes. */
router.post("/", function(req, res, next) {
  res.send('POST request to the homepage')
});
module.exports = router;
