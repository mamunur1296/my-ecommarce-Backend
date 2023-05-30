const mongoose = require('mongoose');

const validateMongoId = (id) => {
  if (!mongoose.isValidObjectId(id)) {
    throw new Error('Invalid MongoDB ObjectId');
  }
};
// const validateMongoId = (id) => {
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     throw new Error('Invalid MongoDB ObjectId');
//   }
// };
module.exports=validateMongoId;