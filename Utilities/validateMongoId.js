const mongoose = require('mongoose');

const validateMongoId = (id) => {
  if (!mongoose.isValidObjectId(id)) {
    throw new Error('Invalid MongoDB ObjectId');
  }
};

// Assuming you have an ID string to validate

// try {
//   validateMongoId(id);
//   console.log('Valid MongoDB ObjectId');
// } catch (error) {
//   console.error(error.message);
// }

module.exports=validateMongoId;