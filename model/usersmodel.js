const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isBlocked:{
      type:Boolean,
      default:false
    },
    roll:{
      type:String,
      default:'user'
    },
    cart:{
      type:Array,
      default:[]
    },
    address:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"address"
    },
    wishlest:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"product"
    },
} ,
{
  timestamps:true
}
);

// Before saving the user, hash the password if it has been modified or is new
userSchema.pre('save', function(next) {
    const user = this;
  
    if (!user.isModified('password')) {
      return next();
    }
  
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        return next(err);
      }
  
      user.password = hash;
      next();
    });
  });
  
  // Method to compare passwords
  userSchema.methods.comparePassword = function(plainPassword, callback) {
    bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
      if (err) {
        return callback(err);
      }
  
      callback(null, isMatch);
    });
  };
const User=mongoose.model('User', userSchema);
module.exports = User;