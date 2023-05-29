const logoutController = (req, res) => {
    // Clear the refresh token cookie
    res.clearCookie('refreshToken');
  
    // You can also clear any other relevant cookies if needed
  
    // Send a response indicating successful logout
    res.json({ message: 'Logout successful' });
  };
  
  module.exports = logoutController;
  