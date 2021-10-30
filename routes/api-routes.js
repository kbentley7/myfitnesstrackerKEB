const router = require("express").Router();
const db = require("../models");



// Aggregate function to add totalDuration 
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

//Route to add sort
router.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises:duration" },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(10)
      .then((stats) => {
        res.json(stats);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
