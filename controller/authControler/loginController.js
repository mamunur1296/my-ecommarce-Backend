const { generateToken } = require('../../config/genaratJwtToken');
const User = require('../../model/usersmodel');
const bcrypt = require('bcrypt');

const loginUser= async (req, res) => {
    const { email, password } = req.body;
  
    // Retrieve the user with the provided email (replace this with your actual user data retrieval logic)
    const user = await User.findOne({ email });
  
    if (user) {
      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (isPasswordValid) {
        console.log('Password is correct');
        res.status(200).json({ message: 'Login successful', data: {
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            mobile:user.mobile,
            token: generateToken(user._id,user.email,user.mobile,)
        } });
      } else {
        console.log('Password is incorrect');
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      console.log('User not found');
      res.status(404).json({ error: 'User not found' });
    }
  };

  module.exports=loginUser