const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');


function secureRoute(req, res, next) {
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, secret, function(err) {
    if (err) {
      res.status(401).json({ message: 'Unauthorised!' });
    } else {
      req.userToken = jwt.decode(token).sub;
      next();
    }
  });
}

module.exports = secureRoute;
