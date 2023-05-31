const User = require("../../model/usersmodel");



const addWishlist = async (req, res) => {
  try {
    const  productId  = req.body.id;
    const { userID } = req.user; // Assuming you have a user ID available in the request

    // Find the user by ID
    const user = await User.findById(userID);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user?.wishlest?.includes(productId)) {
        // Remove the user from the dislikes array
        user.wishlest = user?.wishlest?.filter((prodId) => prodId.toString() !== productId.toString());
        await user.save();
        return res.json(user);
      }
    // Add the product ID to the user's wishlist
    user?.wishlest?.push(productId);

    // Save the changes to the user
    await user.save();

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};


  
module.exports = {
  addWishlist,
};


