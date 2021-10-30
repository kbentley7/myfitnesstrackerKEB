const router = require("express").Router();
const db = require("../models");
const fs = require("fs");
const path = require("path");


// Route to get to homepage

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  
  // route to get to stats page

  
  //Route to get to excercise page to begin a workout

  
  
  module.exports = router;