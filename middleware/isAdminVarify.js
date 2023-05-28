const isAdmin = (req, res, next) => {
    // Assuming you have a property called 'isAdmin' in the user object
    if (req.user.roll === "admin") {
       return next();
    }
     res.status(403).json({ error: 'Access denied. Admin authorization required.' });
  
    
  };
  
  module.exports = isAdmin;
  