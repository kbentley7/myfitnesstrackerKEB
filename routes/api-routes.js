const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
