const User = require("../../model/usersmodel");
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

// Controller to initiate the password reset process
const initiatePasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a password reset token
    const token = crypto.randomBytes(20).toString('hex');

    // Set the password reset token and its expiration time on the user
    user.passwordResetToken = token;
    user.passwordResetExpire = Date.now() + 3600000; // Token expires after 1 hour
    await user.save();

    // Send the password reset email
    const transporter = nodemailer.createTransport({
      // Configure your email provider settings here
      // For example, using Gmail SMTP:
      service: 'mamunurrushid60@gmail.com',
      auth: {
        user: process.env.MYGMAIL,
        pass: process.env.MYPASS
      },
    });

    const mailOptions = {
      from: 'mamunurrushid60@gmail.com',
      to: email,
      subject: 'Password Reset',
      html: `You have requested a password reset. Please click the following link to reset your password: <a href="http://localhost:5000/api/router/reset-password/${token}">Reset Password</a>`,
    };

    await transporter.sendMail(mailOptions);

    // Return success message or handle the response accordingly
    return res.json({ message: 'Password reset initiated. Please check your email.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Controller to handle the password reset
const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const { token } = req.params;

    // Find the user by the password reset token
    const user = await User.findOne({ passwordResetToken: token });

    // Check if the user exists and the token is valid
    if (!user || user.passwordResetExpire < Date.now()) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    // Update the user's password and clear the password reset fields
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpire = undefined;
    await user.save();

    // Return success message or handle the response accordingly
    return res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  initiatePasswordReset,
  resetPassword,
};
