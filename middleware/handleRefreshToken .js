const jwt = require('jsonwebtoken');
const generateRefreshToken = require('../config/generatRefressToken');

// Verify and refresh the access token using the refresh token
const handleRefreshToken = (req, res) => {
    const { refreshToken } = req.cookies;
  console.log(refreshToken);
    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token not found' });
    }
  
    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_SEC);
      console.log(decoded);
      // If the refresh token is valid, generate a new access token
      const newAccessToken = generateRefreshToken(decoded.userId ,decoded.emil,decoded.phon,decoded.roll  );
      // Return the new access token as a response
      res.json({ accessToken: newAccessToken });
  
    } catch (error) {
      // If the refresh token is invalid or has expired, handle the error
      console.error(error);
      res.status(403).json({ error: 'Invalid or expired refresh token' });
    }
  };

  module.exports=handleRefreshToken;