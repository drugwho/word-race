const express = require("express");

const router = express.Router();

const Score = require("../../models/Scores");

// @route  api/scores
// @desc   send score and name
// @access Public
router.post("/", (req, res) => {
  //   console.log(req.body);
  const { name, score } = req.body;
  scoretoSend = new Score({ name, score });
  scoretoSend.save();
  res.status(200).send("User sent");
});

// @route  api/scores
// @desc   get avg/max and last 3 scores
// @access Public
router.get("/", async (req, res) => {
  const scoresArray = await Score.find().populate("scores", ["score"]);

  const displayScore = scoresArray.slice(-3);
  const scoresAvgArray = scoresArray.map((a) => Number(a.score));

  let average = Math.floor(
    scoresAvgArray.reduce(function (a, b) {
      return a + b;
    }, 0) / scoresAvgArray.length
  );
  scoresArray.sort(function (a, b) {
    return a.score - b.score;
  });
  let maxScore = Number(scoresArray[scoresArray.length - 1].score);

  const output = { max: maxScore, avg: average, lastThree: displayScore };
  res.json(output);
});

module.exports = router;
