const jwt = require('jsonwebtoken');

function adminRoute(req, res, next) {
  //gets the token out of the headers, removes the 'Bearer ' and saves it to token
  const token = req.headers.authorization.replace('Bearer ', '');
  //checks the account type of the logged in user, if it's an admin - proceed
  if (jwt.decode(token).permission === 'admin') {
    next();
  } else {
  //if not an admin, respond with a message
    res.status(401).json({ message: 'Unauthorised!' });
  }
}

module.exports = adminRoute;
