const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');


function secureRoute(req, res, next) {
  const token = req.headers.authorization.replace('Bearer ', '');
  // checks the token, ok it was made by the server,
  // takes the sub(user _id) out of the token and stores it in req.userToken
  // and allows the user to proceed, if incorrect token - respond with message
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
