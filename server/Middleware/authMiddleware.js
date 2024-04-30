const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied. Token not found.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Add user from token payload to request object
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authorization denied. Invalid token.' });
  }
};

module.exports = authMiddleware;
