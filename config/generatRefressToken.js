const jwt = require('jsonwebtoken');
const generateRefreshToken = (id,emil,phon,roll) => {
    const paylod={
        userID:id,
        emil:emil,
        phon:phon,
        roll
    }
    // Generate a refresh token with a unique secret key
    const refreshToken = jwt.sign(paylod, process.env.JWT_SEC, { expiresIn: '3600s' });
    return refreshToken;
  };
  module.exports= generateRefreshToken;