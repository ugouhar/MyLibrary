const express = require("express");
const router = express.Router();

//All authors route

router.get("/", (req, res) => {
  res.render("authors/index");
});

//New author route
router.get("author/new", (req, res) => {
  res.send("authors/new");
});

//Create author route
router.post("/", (req, res) => {
  res.send("Create");
});

module.exports = router;
