const User = require("../../model/usersmodel");

const findSingleUsers = async (req, res) => {
    try {
      const { id } = req.params;
      const singleUser = await User.findOne({ _id: id });
      res.json({
        data: singleUser,
      });
    } catch (error) {
      console.log(error);
    }
  };
  module.exports=findSingleUsers;