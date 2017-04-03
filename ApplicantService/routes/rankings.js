let express = require('express');
let router = express.Router();
let Ranking = require('../models/ranking');
let checkCoordinatorTokenOrStudentById = require('./checkCoordinatorTokenOrStudentById');

router.post('/', checkCoordinatorTokenOrStudentById, (req, res) => {
  req.body.rankings = req.body.rankings || [];
  req.body.rankings.forEach(ranking => {
    Ranking.findOneAndUpdate({
      user_id: req.body.user_id,
      posting_id: ranking.posting_id
    }, ranking, {upsert: true});
  });
  res.status(201).json({
    user_id: req.body.user_id,
    rankings: req.body.rankings
  });
});

router.get('/:id', checkCoordinatorTokenOrStudentById, (req, res) => {
  Ranking.find({
    user_id: req.params.id
  }, (err, rankings) => {
    if (err) throw err;

    res.status(200).json({
      user_id: req.params.id,
      rankings: rankings.map(ranking => ({
        user_id: ranking.user_id,
        posting_id: ranking.posting_id,
        rank: ranking.rank,
        course_code: ranking.course_code
      }))  
    })
  });
});

router.delete('/:id', checkCoordinatorTokenOrStudentById, (req, res) => {
  Ranking.findOneAndRemove({
    user_id: req.params.id,
    posting_id: req.query.posting_id
  }, (err, deletedRanking) => {
    if (err) throw err;

    if (!deletedRanking) {
      res.status(404).json({
        message: 'Ranking Not Found'
      });
    } else {
      res.status(200).json({
        user_id: deletedRanking.user_id,
        posting_id: deletedRanking.posting_id,
        rank: deletedRanking.rank,
        course_code: deletedRanking.course_code
      });
    }
  });
});

module.exports = router;
