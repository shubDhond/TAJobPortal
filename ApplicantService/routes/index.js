/**
 * Created by shrey.mahendru on 2017-03-19.
 */
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Applicant Service");
});

module.exports = router;
