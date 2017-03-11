let jwt = require('jsonwebtoken');
let config = require('../config');

module.exports = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.redirect(401, '/');
            } else {
                if (decoded.user_type !== 'student') {
                    res.redirect(401, '/');
                } else {
                    next();
                }
            }
        });

    } else {
        return res.redirect(403, '/');
    }
}