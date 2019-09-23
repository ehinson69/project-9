const express = require("express");
const router = express.Router();
const { Course } = require('../models');

/* GET - returns a list of courses. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

/* GET - returns a course. */
router.get("/:id", function(req, res, next) {
  res.send("respond with the resource");
});

/* POST - creates a course, sets the location header to the URI for the course,
 and returns no content courses. */
router.post("/", function(req, res, next) {
  res.redirect("create reource with no content");
});

/* PUT - updates a course and returns no content. */
router.put("/", function(req, res, next) {
  res.update("update a course and returns no content");
});

/*DELETE - deletes a course and returns no content. */
router.delete("/", function(req, res, next) {
  res.delete("deletes and returns no content")
});

module.exports = router;
