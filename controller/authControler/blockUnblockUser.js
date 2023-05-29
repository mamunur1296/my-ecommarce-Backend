const validateMongoId = require("../../Utilities/validateMongoId");
const User = require("../../model/usersmodel");

const isBlockUser = async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)
    try {
      const user = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: 'User successfully blocked' });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
const isUnBlockUser= async (req,res)=>{
    const { id } = req.params;
    validateMongoId(id)
    try {
      const user = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: 'User successfully  Unblocked' });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports={
    isBlockUser,
    isUnBlockUser,
};