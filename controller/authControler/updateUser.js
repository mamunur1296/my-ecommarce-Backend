const User = require("../../model/usersmodel");

const updateOneUser=async (req, res) => {

    try {
      const updatedUser = await User.findByIdAndUpdate(req.user.userID, req.body, { new: true });
  
      if (updatedUser) {
        res.json({
          message: 'User updated successfully',
          data: updatedUser,
        });
      } else {
        res.status(404).json({
          error: 'User not found',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 'Internal server error',
      });
    }
  };
module.exports=updateOneUser;