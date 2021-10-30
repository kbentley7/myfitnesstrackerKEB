const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.workout.aggregate([
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
          },
        },
})