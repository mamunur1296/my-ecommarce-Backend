const bcrypt = require('bcrypt');
const User = require('../../model/usersmodel');
const validateMongoId = require('../../Utilities/validateMongoId');


// Controller to update the user's password
const updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const { id } = req.params;
    validateMongoId(id)
    // Find the user by ID
    const user = await User.findById(id);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the current password with the stored password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    // Update the user's password
    user.password = newPassword;
    await user.save();

    // Return success message or handle the response accordingly
    return res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};


module.exports = {
  updatePassword,

};
