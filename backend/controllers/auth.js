const db = require("../config/db");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const jwtSecret = process.env.JWT_SECRET_KEY;
const resetPasswordTokenSecret = process.env.RESET_PASSWORD_TOKEN_SECRET;

// Transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

// Handle login for both Admin and Broker
const handleLogin = (req, res) => {
  const { email, password } = req.body;
  console.log('req.body', req.body);
  db.select('*').from('users').where('email', '=', email)
    .then(async user => {
      console.log('user', user);
      if (user.length) {
        // Compare the provided password with the hashed password in the database
        const isValidPassword = await bcrypt.compare(password, user[0].password);

        if (isValidPassword) {
          const token = jwt.sign({ id: user[0].id, email: user[0].email, username: user[0].name, type: user[0].type }, jwtSecret, { expiresIn: '1d' });
          res.json({ username: user[0].name, type: user[0].type, token });
        } else {
          res.status(400).json("wrong credentials!");
        }
      } else {
        res.status(400).json("no such user");
      }
    })
    .catch(err => {
      console.error('Error during login:', err);
      res.status(500).json("internal server error");
    });
};

// Handle registration for both Admin and Broker
// const handleRegister = (req, res) => {
//   const { name, email, password, type } = req.body;
//   console.log(name, email, password, type)
  
//   if (type !== 'Admin' && type !== 'Broker') {
//     return res.status(400).json({ message: 'Invalid user type' });
//   }

//   db.select('*').from('users').where('email', '=', email)
//     .then(async user => {
//       if (user.length) {
//         return res.status(400).json({ message: 'User already exists' });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);

//       const newUser = {
//         name,
//         email,
//         password: hashedPassword,
//         type,
//         status: 'Active'
//       };

//       db('users').insert(newUser)
//         .then(() => {
//           res.status(201).json({ message: 'User registered successfully' });
//         })
//         .catch(err => {
//           console.error('Error during registration:', err);
//           res.status(500).json({ message: 'Internal server error' });
//         });
//     })
//     .catch(err => {
//       console.error('Error checking user existence:', err);
//       res.status(500).json({ message: 'Internal server error' });
//     });
// };

const handleRegister = (req, res) => {
  const { name, email, password, type } = req.body;
  console.log(name, email, password, type);
  
  if (type !== 'Admin' && type !== 'Broker') {
    return res.status(400).json({ message: 'Invalid user type' });
  }

  db.select('*').from('users').where('email', '=', email)
    .then(async user => {
      if (user.length) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = {
        name,
        email,
        password: hashedPassword,
        type,
        status: 'Active'
      };

      db('users').insert(newUser)
        .then(() => {
          // Generate a token
          const token = jwt.sign({ email, type }, jwtSecret, { expiresIn: '1h' });

          res.status(201).json({
            message: 'User registered successfully',
            token  // Send token back to client
          });
        })
        .catch(err => {
          console.error('Error during registration:', err);
          res.status(500).json({ message: 'Internal server error' });
        });
    })
    .catch(err => {
      console.error('Error checking user existence:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
};

// Controller for forgot password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user exists
    const user = await db('users').select('*').where({ email }).first();
    if (!user) {
      return res.status(400).json({ error: 'No user with that email' });
    }

    // Generate a reset token
    const resetToken = jwt.sign({ id: user.id, email: user.email }, resetPasswordTokenSecret, { expiresIn: '1h' });

    // Send the reset token to the user's email
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: ${resetLink}`
    });

    res.json({ message: 'Password reset link has been sent to your email' });
  } catch (error) {
    console.error('Failed to process forgot password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for reset password
const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Verify the token
    const decoded = jwt.verify(token, resetPasswordTokenSecret);
    const user = await db('users').select('*').where({ id: decoded.id }).first();
    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    await db('users').where({ id: user.id }).update({ password: hashedPassword });

    res.json({ message: 'Password has been reset successfully' });
  } catch (error) {
    console.error('Failed to reset password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Export the functions
module.exports = {
  handleLogin,
  handleRegister,
  forgotPassword,
  resetPassword
};
