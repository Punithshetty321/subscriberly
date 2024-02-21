import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    // Remove "Bearer " prefix from the token string
    const tokenWithoutBearer = token.replace('Bearer ', '');

    // Verify the token without the "Bearer" prefix
    const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);

    console.log('Token verification successful. Decoded:', decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

export { verifyToken };
