/**
 * Created by shrey.mahendru on 2017-03-04.
 */
let express = require('express');
let router = express.Router();

/* GET postings. */
router.get('/', function(req, res, next) {
    res.send('This is where you get postings.');
});

module.exports = router;
