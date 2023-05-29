const validateMongoId = require("../../Utilities/validateMongoId");
const User = require("../../model/usersmodel");

  
const DeleitUser = async (req, res) => {
    try {
      const { id } = req.params;
      validateMongoId(id)
      const deletedUser = await User.deleteOne({ _id: id });
      
      if (deletedUser.deletedCount === 1) {
        res.json({
          message: 'User deleted successfully',
          data:deletedUser
        });
      } else {
        res.status(404).json({
          error: 'User not found',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  module.exports=DeleitUser;